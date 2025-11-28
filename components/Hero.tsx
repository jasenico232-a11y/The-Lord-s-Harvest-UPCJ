import React from 'react';
import { ChevronDown } from 'lucide-react';
import HarvestLogo from './HarvestLogo';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2073&auto=format&fit=crop" 
          alt="Wheat field harvest" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-harvest-brown/50 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-harvest-dark/90 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white space-y-6">
        <div className="flex flex-col items-center gap-3 mb-2">
          <HarvestLogo className="w-24 h-24 md:w-32 md:h-32 mb-2 drop-shadow-2xl opacity-95 hover:scale-105 transition-transform duration-500" />
          <span className="inline-block py-1 px-3 border border-harvest-gold rounded-full text-xs font-sans tracking-widest uppercase bg-black/30 backdrop-blur-sm text-harvest-gold">
            United Pentecostal Church of Jamaica
          </span>
          <p className="text-harvest-gold font-bold tracking-[0.2em] uppercase text-sm md:text-base drop-shadow-md">
            The Lord Is Always Present
          </p>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight drop-shadow-xl">
          A Place to Seek Refuge <br/> <span className="text-harvest-gold italic">& Find It</span>
        </h1>
        <p className="text-lg md:text-xl font-sans font-light text-stone-100 max-w-2xl mx-auto drop-shadow-md leading-relaxed">
          Welcome to The Lord's Harvest. We are a community of faith, peace, and serenity. 
          Join us in the reaping time as we gather in His name.
        </p>
        
        <div className="pt-8 flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#portal" 
            className="px-8 py-4 bg-harvest-gold text-white rounded-md font-semibold hover:bg-amber-600 transition-transform transform hover:scale-105 shadow-xl uppercase tracking-wide text-sm"
          >
            Request Prayer
          </a>
          <a 
            href="#schedule" 
            className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-md font-semibold hover:bg-white hover:text-harvest-brown transition-all shadow-lg uppercase tracking-wide text-sm"
          >
            Join a Service
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/70">
        <ChevronDown className="w-8 h-8" />
      </div>
    </section>
  );
};

export default Hero;