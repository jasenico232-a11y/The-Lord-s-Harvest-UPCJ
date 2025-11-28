import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, MessageCircle, Heart } from 'lucide-react';
import HarvestLogo from './HarvestLogo';

const ContactFooter: React.FC = () => {
  return (
    <footer id="contact" className="bg-harvest-dark text-stone-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center p-0 overflow-hidden border border-white/10">
                <HarvestLogo className="w-full h-full" />
              </div>
              <h4 className="text-xl font-serif font-bold text-white">The Lord's Harvest</h4>
            </div>
            <p className="text-harvest-gold text-xs font-bold tracking-widest uppercase mb-4 pl-1">The Lord Is Always Present</p>
            <p className="mb-6 text-sm leading-relaxed">
              A United Pentecostal Church of Jamaica assembly. We are dedicated to the reaping of souls and the perfecting of saints. Join our community of faith.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://wa.me/18764811654" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-green-600 hover:text-white transition-colors"
                aria-label="Message on WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/p/The-Lords-Harvest-UPCJ-61555789682770/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                aria-label="Visit us on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/tlhupcj/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-pink-600 hover:text-white transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-serif font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#home" className="hover:text-harvest-gold transition-colors">Home</a></li>
              <li><a href="#schedule" className="hover:text-harvest-gold transition-colors">Service Schedule</a></li>
              <li><a href="#portal" className="hover:text-harvest-gold transition-colors">Book Counseling</a></li>
              <li><a href="#portal" className="hover:text-harvest-gold transition-colors">Prayer Requests</a></li>
              <li className="pt-2">
                <a 
                  href="https://share.google/0XlL7yC2xXWGt64El" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-harvest-gold hover:text-white transition-colors font-bold"
                >
                  <Heart className="w-4 h-4 mr-2 text-harvest-gold" fill="currentColor" />
                  Give to UPCJ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-serif font-bold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-harvest-gold flex-shrink-0" />
                <span>
                  Top Temple Hall,<br/>
                  Noland Hill, Jamaica
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-harvest-gold flex-shrink-0" />
                <a href="tel:+18764811654" className="hover:text-white transition-colors">+1 (876) 481-1654</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-harvest-gold flex-shrink-0" />
                <span>contact@lordsharvestupcj.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-xs text-stone-500">
          <p>&copy; {new Date().getFullYear()} The Lord's Harvest UPCJ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;