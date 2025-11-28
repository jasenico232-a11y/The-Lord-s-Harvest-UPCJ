import React, { useState } from 'react';
import { Calendar, Heart, Mail, User, PhoneCall, ShieldCheck, Lock } from 'lucide-react';
import { AppointmentType } from '../types';
import HarvestLogo from './HarvestLogo';

const Portal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'appointment' | 'prayer'>('appointment');
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  // Form States
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [apptType, setApptType] = useState<AppointmentType>(AppointmentType.PRAYER_MEETING);
  const [date, setDate] = useState('');
  
  // Separate content states for different tabs
  const [appointmentDetails, setAppointmentDetails] = useState('');
  const [prayerRequest, setPrayerRequest] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      // Reset after 3 seconds
      setTimeout(() => {
        setFormStatus('idle');
        // Clear common fields
        setName('');
        setContact('');
        // Clear specific fields
        setDate('');
        setAppointmentDetails('');
        setPrayerRequest('');
      }, 5000);
    }, 1500);
  };

  return (
    <section id="portal" className="py-20 bg-harvest-cream">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          
          {/* Left Side: Info */}
          <div className="lg:w-1/3 space-y-6">
            <h2 className="text-4xl font-serif font-bold text-harvest-brown">Ministry Portal</h2>
            <div className="w-16 h-1 bg-harvest-gold rounded-full"></div>
            <p className="text-stone-600 text-lg leading-relaxed">
              We are here to serve you. Whether you need counseling, want to schedule a baptism class, or simply need someone to agree with you in prayer.
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-100">
              <h3 className="font-bold text-harvest-brown mb-4 flex items-center">
                <ShieldCheck className="w-5 h-5 mr-2 text-harvest-green" />
                Confidentiality
              </h3>
              <p className="text-sm text-stone-500">
                All counseling sessions and private prayer requests are held in strict confidence by our pastoral team. You are safe here.
              </p>
            </div>

            {/* Church Logo */}
            <div className="mt-8 flex justify-center pt-6">
              <HarvestLogo className="w-48 h-48 opacity-90 drop-shadow-md transition-transform hover:scale-105 duration-500" />
            </div>
          </div>

          {/* Right Side: Interactive Form */}
          <div className="lg:w-2/3 bg-white rounded-2xl shadow-xl overflow-hidden border border-stone-100">
            {/* Tabs */}
            <div className="flex border-b border-stone-100">
              <button 
                type="button"
                onClick={() => { setActiveTab('appointment'); setFormStatus('idle'); }}
                className={`flex-1 py-4 text-center font-semibold transition-all duration-300 ease-in-out flex items-center justify-center gap-2 ${activeTab === 'appointment' ? 'bg-harvest-brown text-white' : 'text-stone-500 hover:bg-stone-50 hover:text-harvest-brown'}`}
              >
                <Calendar className="w-4 h-4" />
                Schedule Appointment
              </button>
              <button 
                type="button"
                onClick={() => { setActiveTab('prayer'); setFormStatus('idle'); }}
                className={`flex-1 py-4 text-center font-semibold transition-all duration-300 ease-in-out flex items-center justify-center gap-2 ${activeTab === 'prayer' ? 'bg-harvest-green text-white' : 'text-stone-500 hover:bg-stone-50 hover:text-harvest-green'}`}
              >
                <Heart className="w-4 h-4" />
                Prayer Request
              </button>
            </div>

            <div className="p-8">
              {formStatus === 'success' ? (
                <div className="text-center py-12 animate-fade-in">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-harvest-brown mb-2">Received with Love</h3>
                  <p className="text-stone-600">
                    {activeTab === 'appointment' 
                      ? 'Your request has been sent. We will contact you shortly to confirm the time.' 
                      : 'Your prayer request has been placed on our altar. We are standing with you.'}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Common Fields */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-harvest-brown flex items-center">
                        <User className="w-4 h-4 mr-2 text-harvest-gold" /> Name
                      </label>
                      <input 
                        required
                        type="text" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 rounded-md border border-stone-200 focus:border-harvest-gold focus:ring-2 focus:ring-harvest-gold/20 outline-none transition-all"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-harvest-brown flex items-center">
                        <PhoneCall className="w-4 h-4 mr-2 text-harvest-gold" /> Contact Number
                      </label>
                      <input 
                        required
                        type="tel" 
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        className="w-full px-4 py-3 rounded-md border border-stone-200 focus:border-harvest-gold focus:ring-2 focus:ring-harvest-gold/20 outline-none transition-all"
                        placeholder="+1 (876) 481-1654"
                      />
                    </div>
                  </div>

                  {/* Dynamic Content Area with Key for re-triggering animation */}
                  <div key={activeTab} className="animate-fade-in">
                    {activeTab === 'appointment' && (
                      <div className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-sm font-bold text-harvest-brown">Appointment Type</label>
                            <select 
                              value={apptType}
                              onChange={(e) => setApptType(e.target.value as AppointmentType)}
                              className="w-full px-4 py-3 rounded-md border border-stone-200 focus:border-harvest-gold focus:ring-2 focus:ring-harvest-gold/20 outline-none bg-white transition-shadow"
                            >
                              {Object.values(AppointmentType).map((type) => (
                                <option key={type} value={type}>{type}</option>
                              ))}
                            </select>
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-bold text-harvest-brown flex items-center">
                              <Calendar className="w-4 h-4 mr-2 text-harvest-gold" /> Preferred Date
                            </label>
                            <input 
                              required
                              type="date" 
                              value={date}
                              onChange={(e) => setDate(e.target.value)}
                              className="w-full px-4 py-3 rounded-md border border-stone-200 focus:border-harvest-gold focus:ring-2 focus:ring-harvest-gold/20 outline-none transition-all text-stone-600"
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-harvest-brown flex items-center">
                            <Mail className="w-4 h-4 mr-2 text-harvest-gold" /> 
                            Additional Details
                          </label>
                          <textarea 
                            required
                            value={appointmentDetails}
                            onChange={(e) => setAppointmentDetails(e.target.value)}
                            rows={4}
                            className="w-full px-4 py-3 rounded-md border border-stone-200 focus:border-harvest-gold focus:ring-2 focus:ring-harvest-gold/20 outline-none transition-all resize-none"
                            placeholder="Please share any specific topics or concerns you'd like to discuss..."
                          ></textarea>
                        </div>
                      </div>
                    )}

                    {activeTab === 'prayer' && (
                      <div className="space-y-2">
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-harvest-brown flex items-center">
                            <Mail className="w-4 h-4 mr-2 text-harvest-gold" /> 
                            Your Prayer Request
                          </label>
                          <textarea 
                            required
                            value={prayerRequest}
                            onChange={(e) => setPrayerRequest(e.target.value)}
                            rows={4}
                            className="w-full px-4 py-3 rounded-md border border-stone-200 focus:border-harvest-gold focus:ring-2 focus:ring-harvest-gold/20 outline-none transition-all resize-none"
                            placeholder="Share what's on your heart. We are here to stand with you in faith..."
                          ></textarea>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="space-y-4">
                    <button 
                      type="submit" 
                      disabled={formStatus === 'submitting'}
                      className={`w-full py-4 rounded-md font-bold text-white shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${activeTab === 'appointment' ? 'bg-harvest-brown hover:bg-harvest-dark' : 'bg-harvest-gold hover:bg-amber-600'}`}
                    >
                      {formStatus === 'submitting' ? 'Sending...' : (activeTab === 'appointment' ? 'Request Appointment' : 'Send Prayer Request')}
                    </button>

                    {activeTab === 'prayer' && (
                      <div className="flex items-start gap-2 pt-2 text-stone-500 text-xs bg-stone-50 p-3 rounded border border-stone-100 animate-fade-in">
                        <Lock className="w-3 h-3 mt-0.5 flex-shrink-0 text-harvest-green" />
                        <p>
                          <span className="font-bold text-harvest-brown">Privacy Assurance:</span> Your prayer requests are handled with the utmost care and confidentiality. They are shared strictly with our pastoral prayer team for intercession purposes only.
                        </p>
                      </div>
                    )}
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portal;