import React from "react";
import { FaQuoteRight, FaChevronLeft, FaChevronRight, FaUser } from 'react-icons/fa';
import { useState, useEffect } from "react";
import { motion, useSpring, useTransform } from 'framer-motion';
import about from '../assets/aboutimg.jpg';
import slider from "../assets/slider.jpg";
import slider2 from "../assets/slider2.jpg";
import slider3 from "../assets/slider3.jpg"
import project from "../assets/project.jpg";
import project2 from "../assets/project2.jpg";

import "./Home.css";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AnimatedCounter = ({ end, duration = 2000 }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <>{count}</>;
};


const Home = () => {
//  const { ref, inView } = useInView({
//   triggerOnce: true,
//   threshold: 0.3,
// });
  const [current, setCurrent] = useState(0);
const slides = [
  {
    image: "https://images.unsplash.com/photo-1728721529009-bfaab6fcc8e6?auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Modern Construction Solutions",
    description:
      "Building your dream project with quality and trust.",
  },
  {
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Innovative Building Designs",
    description:
      "Creating modern spaces with excellence and innovation.",
  },
  {
    image: "https://images.unsplash.com/photo-1606402179428-a57976d71fa4?auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG91c2UlMjBhdCUyMG5pZ2h0fGVufDB8fDB8fHwy" ,
    title: "Trusted Construction Experts",
    description:
      "Delivering high-quality projects on time and within budget.",
  },
];
const data = [
    {
      id: 1,
      text: "This is due to their excellent service, competitive pricing and customer support. It's thoroughly refreshing to get new such a personal touch.",
      name: "Mario Prince",
      role: "Marketing Manager",
      image: "https://static.vecteezy.com/system/resources/thumbnails/022/133/672/small/user-profile-icon-for-any-purposes-vector.jpg"
    },
    {
      id: 2,
      text: "This is due to their excellent service, competitive pricing and customer support. It's thoroughly refreshing to get new such a personal touch.",
      name: "Moni Makra",
      role: "Business Man",
      image: "https://static.vecteezy.com/system/resources/thumbnails/022/133/672/small/user-profile-icon-for-any-purposes-vector.jpg"
    },
    {
      id: 3,
      text: "This is due to their excellent service, competitive pricing and customer support. It's thoroughly refreshing to get new such a personal touch.",
      name: "Arnika Rara",
      role: "CEO",
      image: "https://static.vecteezy.com/system/resources/thumbnails/022/133/672/small/user-profile-icon-for-any-purposes-vector.jpg"
    }
  ];
const services = [
  {
    id: 1,
    title: "Building Construction",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd",
  },
  {
    id: 2,
    title: "Architecture Design",
    image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2",
  },
  {
    id: 3,
    title: "Interior Design",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
  },
  {
    id: 4,
    title: "Factory Manufacture",
    image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c",
    active: true,
  },
  {
    id: 5,
    title: "Project Planning",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
  },
  {
    id: 6,
    title: "Painting Services",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828",
  },
];
const projects = [
  {
    id: 1,
    title: "Luxury Villa",
    category: "Construction",
    img: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800",
  },
  {
    id: 2,
    title: "Modern House",
    category: "Architecture",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
  },
  {
    id: 3,
    title: "Office Building",
    category: "Construction",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
  },
  {
    id: 4,
    title: "Commercial Complex",
    category: "Building",
    img: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=800",
  },
  {
    id: 5,
    title: "Apartment",
    category: "Residential",
    img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
  },
  {
    id: 6,
    title: "Bridge Project",
    category: "Infrastructure",
    img: "https://images.unsplash.com/photo-1448630360428-65456885c650?w=800",
  },
];
const [hovered, setHovered] = useState(null);
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? services.length - 1 : prev - 1
    );
  };

useEffect(() => {
  const interval = setInterval(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, 4000);

  return () => clearInterval(interval);
}, []);
  
  return (
    <>
      
<section className="hero">
  <img
    src={slides[current].image}
    alt={slides[current].title}
    className="hero-image"
  />

  <div className="overlay"></div>

  <div className="hero-content">
    <h1>{slides[current].title}</h1>

    <p>{slides[current].description}</p>

    
  </div>
</section>

      {/* ABOUT SECTION */}

      <section className="about">
  <div className="about-left">
    <div className="image-container">
<img src={about} alt="Construction" width={650} height={450} />      {/* Overlay Box */}
      <div className="experience-box">
        <h3>34</h3>
        <p>YEARS OF<br/>EXPERIENCE</p>
      </div>
    </div>
  </div>

  <div className="about-right">
    <span className="subtitle">About Us</span>
    <h2>We Will Satisfy You By Our Work Ideas</h2>
    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo numquam eaque unde, atque quo quas facilis? Amet quia mollitia eveniet aliquam non tenetur perferendis reprehenderit ut, ullam illum deleniti facere.
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla eum maxime quam eaque molestias! Perspiciatis a ea voluptas animi, exercitationem iure saepe soluta. Nostrum asperiores fuga voluptatibus in voluptate dolor.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ex unde autem veritatis voluptate minima non rerum provident rem, quaerat a dignissimos voluptatem quis consectetur, nesciunt ut nam quia illo.
    </p>
    
    <div className="action-row">
      <button className="read-more">Read More <span className="plus-icon">+</span></button>
      
    </div>
    
  </div>
</section>

      {/* COUNTER SECTION */}

      <section className="counter-section">
  <div className="counter-box">
    <h3>+<AnimatedCounter end={3200} /></h3>
    <p>Project Completed</p>
  </div>

  <div className="counter-box">
    <h3>+<AnimatedCounter end={500} /></h3>
    <p>Work Employed</p>
  </div>

  <div className="counter-box">
    <h3>+<AnimatedCounter end={900} /></h3>
    <p>Happy Customers</p>
  </div>

  <div className="counter-box">
    <h3>+<AnimatedCounter end={2800} /></h3>
    <p>Painting Services</p>
  </div>
</section>

      {/* SERVICES TITLE */}
   <section className="section-wrapper">

  <div className="section-header">
    <span>Our Services</span>

    <h2>
      We Provide For <br />
      Superior Construction Service
    </h2>
  </div>

  <section className="services-section">

    <button className="carousel-btn left" onClick={prevSlide}>
      ❮
    </button>

    <div className="services-grid">
      {services.slice(current, current + 3).map((service) => (
        <div key={service.id} className="service-card">

          <div className="image-wrapper">
            <img
              src={service.image}
              alt={service.title}
              className="service-image"
            />

           
          </div>

          <div className="card-content">
            <h3>{service.title}</h3>

            <p>
              We provide high quality construction services with
              experienced professionals and modern technology.
            </p>

            <div className="card-footer">
              <span className="read-more">
                Read More
              </span>

              <button className="plus-btn">
                +
              </button>
            </div>
          </div>

        </div>
      ))}
    </div>

    <button className="carousel-btn right" onClick={nextSlide}>
      ❯
    </button>

  </section>

</section>

   


<section className="testimonial-section">
      <div className="testimonial-container">
        {/* Header Section */}
        <div className="testimonial-header">
          <div className="header-left">
            <div className="red-bars">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <span className="subtitle-test" style={{'color':'#ffffff'}}>Testimonial For Us</span>
            <h2 className="title">What Coustomer Says <br /> About Us</h2>
          </div>
          
          <div className="header-right">
            <button className="nav-btn"><FaChevronLeft /></button>
            <button className="nav-btn"><FaChevronRight /></button>
          </div>
        </div>

        {/* The Cards Grid (Hanging Section) */}
        <div className="testimonial-grid">
          {data.map((item) => (
            <div className="testimonial-card" key={item.id}>
              {/* Quote Icon */}
              <div className="quote-box">
                <FaQuoteRight />
              </div>
              
              <p className="testimonial-text">{item.text}</p>
              
              <div className="divider"></div>
              
              <div className="profile-info">
                <div className="profile-icon-wrap"><FaUser /></div>
                <div className="profile-details">
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


       {/* PROJECT TITLE */}

  {/* Added Headers */}
 
<section className="projects-section">

  <div className="section-title">
    <span>OUR RECENT PROJECTS</span>
    <h2>Our Special Projects </h2>
  </div>

  <div className="project-grid">
  {projects.map((item) => (
    <div
      key={item.id}
      className={`project-card ${hovered === item.id ? "active" : ""}`}
      onMouseEnter={() => setHovered(item.id)}
      onMouseLeave={() => setHovered(null)}
    >
      <img src={item.img} alt={item.title} />

      <div className="project-overlay">
        <p>{item.category}</p>
        <h3>{item.title}</h3>

        <button className="view-btn">+</button>
      </div>
    </div>
  ))}
</div>
<div className="projects-footer">
  <button className="more-btn">
    View More
    <span>+</span>
  </button>
</div>

</section>
{/* 
<section className="news-section">
  <div className="section-heading">
    <span>Latest News</span>
    <h2>Our Latest News & Articles</h2>
  </div>

  <div className="news-grid">
    <div className="news-card">
      <img src="https://plus.unsplash.com/premium_photo-1681823687646-e78d2da9b71a?&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAxfHxidWlsZGVyc3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
      <h3>Improve Workflow Using Construction Planning</h3>
      <p>12 Dec 2026</p>
    </div>

    <div className="news-card">
      <img src="https://images.unsplash.com/photo-1647735282077-c12699af40be?&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc2fHxidWlsZGVyc3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
      <h3>Guide Remodeling Your Building Efficiently</h3>
      <p>15 Dec 2026</p>
    </div>
  </div>
</section> */}
{/* 

<section className="skills-section">
  <div className="skills-left">
    <span className="sub-title">Our Special Skills</span>

    <h2>
      Easy Way To Collaborate <br />
      Our Company
    </h2>

    <p>
      It is a long established fact that a reader will be distracted by
      the readable content of a page when looking at its layout.
    </p>

    <div className="skill">
      <div className="skill-header">
        <span>Industrial</span>
        <span>65%</span>
      </div>
      <div className="bar">
        <div className="fill fill1"></div>
      </div>
    </div>

    <div className="skill">
      <div className="skill-header">
        <span>Construction</span>
        <span>85%</span>
      </div>
      <div className="bar">
        <div className="fill fill2"></div>
      </div>
    </div>

    <div className="skill">
      <div className="skill-header">
        <span>Remodeling</span>
        <span>75%</span>
      </div>
      <div className="bar">
        <div className="fill fill3"></div>
      </div>
    </div>

    <button className="contact-btn">
      Contact Now <span>+</span>
    </button>
  </div>

  <div className="skills-right">
    <img src="https://images.unsplash.com/photo-1778074762033-c6595907684d?&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGJ1aWxkZXJzJTIwcHJvamVjdHxlbnwwfHwwfHx8Mg%3D%3D" alt="" />
    <img src="https://images.unsplash.com/photo-1765706845871-951abd038627?&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGJ1aWxkZXJzJTIwcHJvamVjdHxlbnwwfHwwfHx8Mg%3D%3D" alt="" />
    <img src="https://images.unsplash.com/photo-1693639435051-d58ac86db299?&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1aWxkZXJzJTIwcHJvamVjdHxlbnwwfHwwfHx8Mg%3D%3D" alt="" />
    <img src="https://images.unsplash.com/photo-1713593930871-e21d7f9ef4a1?&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1aWxkZXJzfGVufDB8fDB8fHwy" alt="" />
  </div>
</section> */}



<section className="quote-section">
  <div className="quote-map">
   <iframe
  title="map"
  src="https://maps.google.com/maps?q=SAHASRA%20BUILDERS%2C%20Akshaya%20Building%20Park%2C%2025%20A%2C%20Junction%2C%20Dhanuvachapuram%2C%20Kerala%20695503&z=15&output=embed"
  width="100%"
  height="450"
  style={{ border: 0 }}
  loading="lazy"
  allowFullScreen
></iframe>
  </div>

  <div className="quote-form">

    <h2>Request A Quote</h2>

    <input type="text" placeholder="Your Name" />
    <input type="email" placeholder="Email Address" />
    <input type="text" placeholder="Phone Number" />

    <textarea
      rows="5"
      placeholder="Message"
    ></textarea>

    <button>Submit Request</button>
  </div>
</section>
    </>
  );
};

export default Home;