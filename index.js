require('dotenv').config();  // load env vars

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require("path");


const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected!'))
  .catch(err => console.error('Connection error:', err));


// Quote Schema
const quoteSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  service: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
});

const Quote = mongoose.model('Quote', quoteSchema);

// Nodemailer transporter setup using env variables
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // Gmail App Password
  },
});

// POST endpoint to save quote and send notification email
app.post('/api/quotes', async (req, res) => {
  console.log('POST /api/quotes hit with:', req.body); // good for debugging

  try {
    const { name, email, phone, service, message } = req.body;
    if (!name || !email || !phone || !service) {
      return res.status(400).json({ error: 'Please fill all required fields.' });
    }

    const newQuote = new Quote({ name, email, phone, service, message });
    await newQuote.save();

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.CLIENT_EMAIL,
      subject: 'New Quote Request Received',
      text: `
        You have a new quote request:

        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Service: ${service}
        Message: ${message || 'No message provided'}
      `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Email sending error:', error);
      } else {
        console.log('Email sent:', info.response);
      }
    });

    res.status(201).json({ message: 'Quote request submitted successfully!' });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Server error, please try again later.' });
  }
});




// Serve static files from React frontend
const staticPath = path.join(__dirname, 'build');
app.use(express.static(staticPath));

app.get(/.*/, function (req, res) {
  res.sendFile(path.join(staticPath, 'index.html'));
});




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
