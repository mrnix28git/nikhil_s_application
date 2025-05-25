import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Footer = () => {
  const [email, setEmail] = React.useState('');
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing with: ${email}`);
      setEmail('');
    }
  };

  return (
    <footer className="bg-gradient-purple text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-gold text-2xl font-semibold mb-4">Powered By</h3>
            <h4 className="text-white text-2xl font-bold mb-4">SkillEnable EduTech Pvt Ltd.</h4>
            <p className="text-sm font-lato mb-1">Regd. under Ministry of Corporate Affairs</p>
            <p className="text-sm font-lato mb-4">Government of India</p>
            
            <div className="flex items-start mb-2">
              <img src="/images/img_icon_black_900.svg" alt="Phone" className="w-6 h-6 mr-4" />
              <p className="text-base font-medium">+91 - 7439041439</p>
            </div>
            
            <div className="flex items-start">
              <img src="/images/img_icon.svg" alt="Email" className="w-6 h-6 mr-4" />
              <p className="text-base font-medium">admin@academyofvedicvidya.com</p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-gold text-2xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/privacy-policy" className="text-sm font-poppins hover:text-gold transition-colors">Privacy Policy</Link></li>
              <li><Link to="/term-of-use" className="text-sm font-poppins hover:text-gold transition-colors">Term of Use</Link></li>
              <li><Link to="/contact-us" className="text-sm font-poppins hover:text-gold transition-colors">Contact Us</Link></li>
              <li><Link to="/about-us" className="text-sm font-poppins hover:text-gold transition-colors">About Us</Link></li>
              <li>
                <Link to="/become-an-instructor" className="text-sm font-poppins hover:text-gold transition-colors">
                  Become an Instructor
                  <span className="inline-block ml-2 bg-[#c91765] text-white text-xs px-2 py-0.5 rounded">Hiring!</span>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Subscribe */}
          <div>
            <h3 className="text-gold text-2xl font-semibold mb-4">Subscribe Now!</h3>
            <p className="text-sm font-lato mb-1">Rest assured, we do not send promotional emails. You will</p>
            <p className="text-sm font-lato mb-1">only receive notifications when we have an ongoing offer on</p>
            <p className="text-sm font-lato mb-6">our courses.</p>
            
            <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={handleEmailChange}
                className="bg-[#fafafa] text-black font-inter font-semibold text-sm px-4 py-3 rounded-[23px] border border-[#eaeaea] focus:outline-none focus:ring-1 focus:ring-purple"
                required
              />
              <Button 
                type="submit" 
                className="bg-pink rounded-[24px] shadow-custom px-6 py-3"
              >
                Subscribe
              </Button>
            </form>
            
            <div className="mt-8 flex flex-wrap gap-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-pink w-10 h-10 rounded-full flex items-center justify-center border border-purple hover:bg-pink-dark transition-colors">
                <i className="text-white"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-pink w-10 h-10 rounded-full flex items-center justify-center border border-purple hover:bg-pink-dark transition-colors">
                <i className="text-white"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-pink w-10 h-10 rounded-full flex items-center justify-center border border-purple hover:bg-pink-dark transition-colors">
                <i className="text-white"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-pink w-10 h-10 rounded-full flex items-center justify-center border border-purple hover:bg-pink-dark transition-colors">
                <i className="text-white"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="bg-pink w-10 h-10 rounded-full flex items-center justify-center hover:bg-pink-dark transition-colors">
                <i className="text-white"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="bg-purple py-4 text-center">
        <p className="text-white text-sm font-medium">©2025. Academy of Vedic Vidya. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;