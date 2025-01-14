import React, { useState, useEffect } from 'react';
import { Building2, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsLoading(true);
    // Simulate page loading
    setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 500);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/subsidiaries', label: 'Subsidiaries' },
    { path: '/news', label: 'News' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <>
      {/* Loading Indicator */}
      <div className={`fixed top-0 left-0 w-full h-1 bg-black z-[60] transition-transform duration-300 ${isLoading ? 'scale-x-100' : 'scale-x-0'}`}>
        <div className="h-full bg-purple-600 animate-loading"></div>
      </div>

      <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/95 shadow-lg' : 'bg-black/50'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2 hover:text-gray-300 transition-colors">
              <Building2 size={32} className="text-white" />
              <span className="text-xl font-bold text-white">NEXUS GROUP</span>
            </Link>
            
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-white hover:text-purple-400 transition-colors ${
                    location.pathname === link.path ? 'text-purple-500' : ''
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            
            <button 
              className="md:hidden text-white z-50 relative"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <div className={`transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}>
                <Menu size={24} />
              </div>
              <div className={`absolute top-0 left-0 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}>
                <X size={24} />
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <div 
            className={`md:hidden fixed inset-0 bg-black/95 backdrop-blur-sm transform transition-all duration-300 ${
              isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
            }`}
            style={{ zIndex: 40 }}
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-2xl font-bold text-white hover:text-purple-400 transition-all transform hover:scale-105 ${
                    location.pathname === link.path ? 'text-purple-500' : ''
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}