import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Handle scroll and update active section
  useEffect(() => {
    const handleScroll = () => {
      // Update navbar appearance based on scroll
      setIsScrolled(window.scrollY > 20);
      
      // Get all sections to track
      const sections = ['home', 'research', 'publications', 'about', 'contact'];
      
      // Find the current section based on scroll position
      const scrollPosition = window.scrollY + 100; // Offset for better detection
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Function to scroll to section when clicked
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 bg-gray-900/80 backdrop-blur-md shadow-md' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo/Name */}
        <div>
          <Link 
            to="/" 
            className="text-indigo-300 hover:text-indigo-200 transition-colors duration-200 flex items-center space-x-2"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="w-8 h-8 rounded-full bg-indigo-900/30 border border-indigo-500/50 flex items-center justify-center">
              <span className="text-indigo-300 font-medium">A</span>
            </div>
            <span className="font-light tracking-wide">Alexa Guido</span>
          </Link>
        </div>
        
        {/* Navigation Links */}
        <div className="hidden md:flex space-x-1">
          {[
            { id: 'home', label: 'Home' },
            { id: 'research', label: 'Research' },
            { id: 'publications', label: 'Publications' },
            { id: 'about', label: 'About' },
            { id: 'contact', label: 'Contact' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-4 py-2 rounded-md transition-all duration-200 relative ${
                activeSection === item.id
                  ? 'text-indigo-300'
                  : 'text-indigo-100 hover:text-indigo-300'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/3 h-0.5 bg-indigo-400 rounded-full"></span>
              )}
            </button>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            className="text-indigo-300 hover:text-indigo-100 transition-colors duration-200"
            aria-label="Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;