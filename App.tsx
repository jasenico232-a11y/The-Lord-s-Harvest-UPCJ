import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServiceSchedule from './components/ServiceSchedule';
import AIComfort from './components/AIComfort';
import Portal from './components/Portal';
import ContactFooter from './components/ContactFooter';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans antialiased text-harvest-dark">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        {/* About Section Snippet */}
        <section id="about" className="py-16 bg-harvest-cream text-center px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-harvest-brown mb-6">Welcome to the Fold</h2>
            <p className="text-lg text-stone-700 leading-relaxed">
              "The harvest truly is plenteous, but the labourers are few." <br/>
              <span className="text-sm text-harvest-gold font-bold mt-2 block">- Matthew 9:37</span>
            </p>
            <p className="mt-6 text-stone-600">
              We are a Bible-believing church where the spirit of the Lord is free to move. 
              Whether you are seeking a new church home or just need a place to rest your spirit, 
              our doors and hearts are open to you.
            </p>
          </div>
        </section>

        {/* AI Feature: Refuge Finder */}
        <AIComfort />

        <ServiceSchedule />
        
        <Portal />
      </main>

      <ContactFooter />
    </div>
  );
};

export default App;