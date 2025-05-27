
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useCallback } from 'react';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = useCallback((sectionId: string) => {
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    } else {
      // If we're already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  }, [navigate, location.pathname]);

  return (
    <footer className="border-t border-slate-800 py-8 sm:py-12 px-4 safe-area">
      <div className="responsive-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-3 sm:mb-4">
              VOCLY AI
            </h3>
            <p className="text-gray-400 mb-4 sm:mb-6 responsive-text">
              Reimagining business, one call at a time.
            </p>
          </div>
          
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection('home')} 
                className="block text-gray-400 hover:text-white transition-colors text-left focus-visible responsive-text"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('tailored-business')} 
                className="block text-gray-400 hover:text-white transition-colors text-left focus-visible responsive-text"
              >
                Services
              </button>
              <Link 
                to="/demo" 
                className="block text-gray-400 hover:text-white transition-colors focus-visible responsive-text"
              >
                Demo
              </Link>
              <button 
                onClick={() => scrollToSection('pricing')} 
                className="block text-gray-400 hover:text-white transition-colors text-left focus-visible responsive-text"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="block text-gray-400 hover:text-white transition-colors text-left focus-visible responsive-text"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-gray-400 text-sm sm:text-base">© 2025 VOCLY AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
