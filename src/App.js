import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Residential Wiring',
    message: '',
  });

  const [formMessage, setFormMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const response = await fetch('http://localhost:5000/api/quotes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      toast.success(data.message || 'Submitted successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'Residential Wiring',
        message: '',
      });
    } else {
      toast.error(data.error || 'Submission failed.');
    }
  } catch (error) {
    toast.error('Server error. Please try again later.');
  }

  setLoading(false);
};

  const services = [
    {
      id: 1,
      img: "/img1.jpg",
      title: "Residential Wiring",
      description: "Safe and efficient wiring for homes and renovations."
    },
    {
      id: 2,
      img: "/img2.jpg",
      title: "Commercial Installations",
      description: "Complete solutions for offices and retail spaces."
    },
    {
      id: 3,
      img: "/img3.jpg",
      title: "24/7 Emergency Repairs",
      description: "Fast response for electrical emergencies."
    },
    {
      id: 4,
      img: "/img4.jpg",
      title: "Battery,Inspections & Consulting",
      description: "Expert electrical advice and safety checks."
    },
    {
      id: 5,
      img: "/img5.jpg",
      title: "Lighting Installation",
      description: "Stylish and energy-efficient lighting solutions."
    },
    {
      id: 6,
      img: "/img6.jpg",
      title: "Solar Services",
      description: "Powerful setups for factories and warehouses."
    },
    {
      id: 7,
      img: "/img7.jpg",
      title: "Industrial Services",
      description: "Powerful setups for factories and warehouses."
    },
    {
      id: 8,
      img: "/img8.jpg",
      title: "Pannel Board Services",
      description: "Powerful setups for factories and warehouses."
    },
    {
      id: 9,
      img: "/img9.jpg",
      title: "Meter Services",
      description: "Powerful setups for factories and warehouses."
    },
    {
      id: 10,
      img: "/img15.jpg",
      title: "Solar Power Services",
      description: "Powerful setups for factories and warehouses."
    },
    {
      id: 11,
      img: "/img13.jpg",
      title: "Agriculture,Industrial Services",
      description: "Powerful setups for factories and warehouses."
    },
    {
      id: 12,
      img: "/img12.jpg",
      title: "Power planet Services",
      description: "Powerful setups for factories and warehouses."
    },
  ];

  return (
    <>
      {/* Internal Styles */}
      <ToastContainer position="top-right" autoClose={3000} />

     <style>
  {`
    .hero {
      background: url('/hero.jpg') center center / cover no-repeat;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      color: white;
      text-align: center;
    }
    .hero::before {
      content: "";
      position: absolute;
      top: 0; left: 0;
      width: 100%; height: 100%;
      background-color: rgba(0,0,0,0.6);
      z-index: 1;
    }
    .hero .container {
      position: relative;
      z-index: 2;
    }
    .service-card {
      height: 100%;
      transition: transform 0.3s ease;
    }
    .service-card:hover {
      transform: translateY(-5px);
    }
    .service-card .card-img-top {
      height: 200px;
      object-fit: cover;
    }
    @media (max-width: 768px) {
      .hero {
        padding: 80px 20px;
      }
      .display-4 {
        font-size: 2rem;
      }
      .lead {
        font-size: 1rem;
      }
    }

    /* Video wrapper to enforce 9:16 aspect ratio */
    .video-wrapper {
      position: relative;
      width: 100%;
      padding-top: calc(16 / 9 * 100%); /* 16:9 ratio */
      padding-top: calc(100% * 16 / 9); /* fallback if calc above doesn't work */
      padding-top: 177.77%; /* fallback for 9:16 aspect ratio */
      height: 0;
      overflow: hidden;
      border-radius: 0.5rem;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
      background: #000;
    }

    /* Adjust padding-top to get 9:16 (width:height) ratio */
    /* 9:16 aspect ratio means height is larger than width */
    /* So padding-top = (height / width) * 100% = (16/9)*100% ≈ 177.77% */

    /* Correct padding for 9:16 */
    .video-wrapper {
      padding-top: 177.77%;
    }

    /* Video fills the wrapper absolutely */
    video {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 0.5rem;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }
  `}
</style>


      {/* Navbar */}
     <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
  <div className="container">
    <a className="navbar-brand fw-bold" href="/">
      Sivamani Electrical Contract
    </a>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navmenu">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="#services">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#projects">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#testimonials">Testimonials</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">Contact</a>
        </li>
      </ul>

      {/* --- Call and WhatsApp Buttons --- */}
      <div className="d-flex ms-lg-3 mt-3 mt-lg-0 gap-2">
        <a
          href="tel:9698635163"
          className="btn btn-outline-primary btn-sm"
        >
          📞 Call Now
        </a>

       <a
  href="https://wa.me/919698635163?text=Hi%20Sivamani%20Electrical%2C%20I%20am%20interested%20in%20your%20services.%20Please%20get%20in%20touch."
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-success btn-sm"
>
  💬 WhatsApp
</a>

      </div>
    </div>
  </div>
</nav>



      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="display-4 fw-bold">Sivamani Electrical Contract Services You Can Trust</h1>
          <p className="lead">Residential • Commercial • Emergency support 24/7</p>
          <a href="#contact" className="btn btn-warning btn-lg mt-4">Request a Quote</a>
        </div>
      </section>

      {/* Services Section (No Carousel) */}
      <section id="services" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Our Services</h2>
          <div className="row g-4">
            {services.map((svc) => (
              <div key={svc.id} className="col-md-4">
                <div className="card h-100 service-card shadow-sm">
                  <img src={svc.img} className="card-img-top" alt={svc.title} />
                  <div className="card-body">
                    <h5 className="card-title">{svc.title}</h5>
                    <p className="card-text">{svc.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section (with Videos) */}
    <section id="projects" className="py-5 bg-light">
  <div className="container">
    <h2 className="text-center mb-4">Recent Projects</h2>
    <div className="row g-4">
      <div className="col-md-6 col-lg-3">
        <div className="video-wrapper">
          <video src="/vid1.mp4" controls preload="metadata" />
        </div>
      </div>
      <div className="col-md-6 col-lg-3">
        <div className="video-wrapper">
          <video src="/vid2.mp4" controls preload="metadata" />
        </div>
      </div>
      <div className="col-md-6 col-lg-3">
        <div className="video-wrapper">
          <video src="/vid4.mp4" controls preload="metadata" />
        </div>
      </div>
      <div className="col-md-6 col-lg-3">
        <div className="video-wrapper">
          <video src="/vid5.mp4" controls preload="metadata" />
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Testimonials */}
     <section id="testimonials" className="py-5 bg-light">
  <div className="container">
    <h2 className="text-center mb-5 fw-bold">What Our Clients Say</h2>
    <div className="row g-4 justify-content-center">
      
      <div className="col-md-6">
        <div className="testimonial-card p-4 shadow-sm rounded bg-white h-100 border-start border-4 border-warning position-relative">
          <div className="mb-3">
            <div className="text-warning fs-5">★★★★★</div>
          </div>
          <p className="fs-5 text-secondary">
            “BrightWire rewired our entire house safely and quickly. Professional, punctual, and affordable.”
          </p>
          <footer className="blockquote-footer text-end fw-semibold mt-3">
            Kanagalingame <span className="text-muted">• Homeowner</span>
          </footer>
        </div>
      </div>

      <div className="col-md-6">
        <div className="testimonial-card p-4 shadow-sm rounded bg-white h-100 border-start border-4 border-warning position-relative">
          <div className="mb-3">
            <div className="text-warning fs-5">★★★★☆</div>
          </div>
          <p className="fs-5 text-secondary">
            “Efficient team — completed our office wiring on time with minimal disruption. Would definitely work with them again.”
          </p>
          <footer className="blockquote-footer text-end fw-semibold mt-3">
            Sivapathy <span className="text-muted">• Company CEO</span>
          </footer>
        </div>
      </div>

    </div>
  </div>
</section>


      {/* Contact Section */}
      <section id="contact" className="py-5 bg-secondary text-white">
        <div className="container">
          <h2 className="text-center mb-4">Request a Quote</h2>
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" value={formData.name} onChange={handleChange} required disabled={loading} />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" value={formData.email} onChange={handleChange} required disabled={loading} />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Phone</label>
                  <input type="text" className="form-control" id="phone" value={formData.phone} onChange={handleChange} required disabled={loading} />
                </div>
                <div className="mb-3">
                  <label htmlFor="service" className="form-label">Service Interested In</label>
                  <select className="form-control" id="service" value={formData.service} onChange={handleChange} disabled={loading}>
                    <option>Residential Wiring</option>
                    <option>Commercial Installation</option>
                    <option>Emergency Repair</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" rows="3" value={formData.message} onChange={handleChange} disabled={loading}></textarea>
                </div>
                <button type="submit" className="btn btn-warning" disabled={loading}>
                  {loading ? 'Submitting...' : 'Submit'}
                </button>
              </form>
              {formMessage && <div className="mt-3">{formMessage}</div>}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 bg-dark text-white text-center">
        <div className="container">
          <p className="mb-0">&copy; 2025 Sivamani Electrical Contract Services. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
