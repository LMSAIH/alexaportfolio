import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaResearchgate, FaGoogle } from "react-icons/fa";
import { SiOrcid } from "react-icons/si";
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="relative py-12 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent"></div>
      <div className="absolute bottom-1/2 right-10 w-40 h-40 bg-indigo-600/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-1/4 w-60 h-60 bg-purple-600/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Left column - About & Contact */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-7 h-7 rounded-full border border-indigo-500/50 flex items-center justify-center">
                <span className="text-indigo-300 text-sm font-medium">A</span>
              </div>
              <span className="text-indigo-100 font-light tracking-wide">Alexa Guido</span>
            </div>
            <p className="text-indigo-200 text-sm mb-4">
              Researcher exploring the intersection of science and technology to create meaningful impact.
            </p>
            <div className="text-indigo-200 text-sm space-y-1">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>contact@example.com</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>University Department, City</span>
              </div>
            </div>
          </div>
          
          {/* Middle column - Quick Links */}
          <div>
            <h3 className="text-indigo-100 text-lg font-light mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#home" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('home')?.scrollIntoView({behavior: 'smooth'});
                  }}
                  className="text-indigo-300 hover:text-indigo-200 transition-colors duration-200 text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link to="#research" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('research')?.scrollIntoView({behavior: 'smooth'});
                  }}
                  className="text-indigo-300 hover:text-indigo-200 transition-colors duration-200 text-sm"
                >
                  Research
                </Link>
              </li>
              <li>
                <Link to="#publications" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('publications')?.scrollIntoView({behavior: 'smooth'});
                  }}
                  className="text-indigo-300 hover:text-indigo-200 transition-colors duration-200 text-sm"
                >
                  Publications
                </Link>
              </li>
              <li>
                <Link to="#about" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('about')?.scrollIntoView({behavior: 'smooth'});
                  }}
                  className="text-indigo-300 hover:text-indigo-200 transition-colors duration-200 text-sm"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link to="#contact" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'});
                  }}
                  className="text-indigo-300 hover:text-indigo-200 transition-colors duration-200 text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Right column - Connect & Subscribe */}
          <div>
            <h3 className="text-indigo-100 text-lg font-light mb-4">Connect with Me</h3>
            <div className="flex space-x-3 mb-6">
              <a href="#" className="text-indigo-300 hover:text-indigo-100 transition-colors duration-300" aria-label="LinkedIn">
                <FaLinkedin size={18} />
              </a>
              <a href="#" className="text-indigo-300 hover:text-indigo-100 transition-colors duration-300" aria-label="GitHub">
                <FaGithub size={18} />
              </a>
              <a href="#" className="text-indigo-300 hover:text-indigo-100 transition-colors duration-300" aria-label="Twitter">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="text-indigo-300 hover:text-indigo-100 transition-colors duration-300" aria-label="ResearchGate">
                <FaResearchgate size={18} />
              </a>
              <a href="#" className="text-indigo-300 hover:text-indigo-100 transition-colors duration-300" aria-label="Google Scholar">
                <FaGoogle size={18} />
              </a>
              <a href="#" className="text-indigo-300 hover:text-indigo-100 transition-colors duration-300" aria-label="ORCID">
                <SiOrcid size={18} />
              </a>
            </div>
            
            <div>
              <h4 className="text-indigo-200 text-sm mb-2">Subscribe to my newsletter</h4>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-indigo-900/30 border border-indigo-500/30 rounded-l-md py-2 px-3 text-sm text-indigo-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 flex-grow min-w-0"
                />
                <button 
                  type="submit" 
                  className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-r-md px-3 transition-colors duration-300 text-sm"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="border-t border-indigo-500/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-indigo-300/70 text-sm">&copy; {year} Alexa Guido. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-indigo-300/70 hover:text-indigo-300 text-xs">Privacy Policy</a>
            <a href="#" className="text-indigo-300/70 hover:text-indigo-300 text-xs">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;