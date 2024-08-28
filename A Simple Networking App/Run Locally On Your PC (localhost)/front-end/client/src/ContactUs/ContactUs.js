import React, { useEffect, useState } from "react";
import "./ContactUs.css";
import image1 from "../Images/ContactUs-image-1.jpg";
import image2 from "../Images/ContactUs-image-2.jpg";
import image3 from "../Images/ContactUs-image-3.jpg";

const ContactUs = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [image1, image2, image3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="contact-us-container">
      <div className="image-carousel">
        <img src={images[currentImage]} alt="Contact Us" />
      </div>
      <div className="contact-boxes">
        <div className="contact-box">
          <div className="contact-image">
            <img src={image1} alt="Contact 1" />
          </div>
          <h2>Gurugram Office</h2>
          <p>Building No. 7, CyberHub</p>
          <p>Gurugram, Haryana, India</p>
          <p>e-mail : abc@g.co</p>
          <p>Phone : 9958969870</p>
        </div>
        <div className="contact-box">
          <div className="contact-image">
            <img src={image2} alt="Contact 2" />
          </div>
          <h2>Bangalore Office</h2>
          <p>Cyber City, Sohna Road</p>
          <p>Opposite Sector-18</p>
          <p>Bangalore, Karnataka, India</p>
          <p>e-mail : abc@g.co</p>
          <p>Phone : 9958969870</p>
        </div>
        <div className="contact-box">
          <div className="contact-image">
            <img src={image3} alt="Contact 3" />
          </div>
          <h2>Mumbai Office</h2>
          <p>
            789 Oak St, City, Country
            <p>Worli, Mumbai, India</p>
            <p>e-mail : abc@g.co</p>
            <p>Phone : 9958969870</p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
