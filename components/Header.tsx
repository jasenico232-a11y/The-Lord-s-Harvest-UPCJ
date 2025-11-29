import React, { useState } from 'react';
import { Menu, X, Phone, Heart } from 'lucide-react';
import HarvestLogo from './HarvestLogo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-harvest-cream shadow-sm sticky top-0 z-50 font-serif">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          {/* Logo Container */}
          <div className="relative h-16 w-16 shrink-0">
            <HarvestLogo className="w-full h-full drop-shadow-md" />
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-harvest-brown tracking-wide leading-tight">The Lord's Harvest</h1>
            <p className="text-[0.65rem] md:text-xs text-harvest-green font-sans tracking-widest font-bold uppercase">United Pentecostal Church of Jamaica</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 font-sans text-harvest-dark font-medium">
          <a href="#home" className="hover:text-harvest-gold transition-colors">Home</a>
          <a href="#about" className="hover:text-harvest-gold transition-colors" aria-label="About Us section">About Us</a>
          <a href="#schedule" className="hover:text-harvest-gold transition-colors">Schedule</a>
          <a href="#portal" className="hover:text-harvest-gold transition-colors">Member Portal</a>
          
          <div className="flex items-center gap-4 pl-4 border-l border-stone-200">
            <a 
              href="https://share.google/0XlL7yC2xXWGt64El" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-harvest-brown hover:text-harvest-gold transition-colors font-bold text-sm"
              aria-label="Give to UPCJ"
            >
              <Heart className="w-4 h-4 mr-1 text-harvest-gold" fill="currentColor" />
              <span>Give</span>
            </a>
            <a href="tel:+18764811654" className="flex items-center text-harvest-brown hover:text-harvest-gold transition-colors font-bold text-sm hidden lg:flex">
              <Phone className="w-4 h-4 mr-2" />
              <span>+1 (876) 481-1654</span>
            </a>
            <a href="#contact" className="px-5 py-2 bg-harvest-gold text-white rounded-full hover:bg-amber-600 transition-colors shadow-sm text-sm whitespace-nowrap">
              Contact Us
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-harvest-brown p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-harvest-cream border-t border-stone-200 shadow-inner">
          <div className="flex flex-col p-4 space-y-4 font-sans text-harvest-dark">
            <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>About Us</a>
            <a href="#schedule" onClick={() => setIsMenuOpen(false)}>Schedule</a>
            <a href="#portal" onClick={() => setIsMenuOpen(false)}>Member Portal</a>
            <div className="pt-4 border-t border-stone-200 space-y-3">
              <a 
                href="https://share.google/0XlL7yC2xXWGt64El" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center text-harvest-gold font-bold border border-harvest-gold/30 rounded-md py-2 hover:bg-harvest-gold hover:text-white transition-colors"
              >
                <Heart className="w-4 h-4 mr-2" fill="currentColor" /> Give Online
              </a>
              <a href="tel:+18764811654" className="flex items-center justify-center text-harvest-brown font-bold">
                <Phone className="w-4 h-4 mr-2" /> +1 (876) 481-1654
              </a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block text-center bg-harvest-gold text-white py-2 rounded-md font-bold">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;