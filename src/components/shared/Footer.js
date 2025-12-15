import React from 'react';
import { Facebook, Linkedin, Instagram, Youtube, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer>
      <div className="containerLayout">
        <div className="footer-wrap">
          {/* Left Side - Contact Info */}
          <div className="footer-left">
            <h1 className="footer-title">SundarSTEM School</h1>

            <div className="footer-info-item">
              <strong>For Inquiries:</strong>
              <p>info@sundarstem.edu.pk</p>
            </div>

            <div className="footer-info-item">
              <strong>Mobile:</strong>
              <p>+92-300-4139222</p>
            </div>

            <div className="footer-info-item">
              <strong>Mobile & WhatsApp:</strong>
              <p>+92-321-7276806</p>
            </div>

            <div className="footer-info-item">
              <strong>Address:</strong>
              <p>SundarSTEM 31 Km, Multan Road Madina Colony, Sundar Lahore 53800 Pakistan.</p>
            </div>
          </div>

          {/* Right Side - Logo */}
          <div className="footer-right">
            <img alt="Sundar STEM Logo" src="/sundar-footer-logo.png" className="footer-logo-img" onError={(e) => {
              e.target.style.display = 'none';
            }} />
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="copyright-bar">
        © 2021 - 2025 SundarSTEM School. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
