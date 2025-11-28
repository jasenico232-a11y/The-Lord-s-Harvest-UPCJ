import React, { useState } from 'react';
import { Sparkles, Send, BookOpen } from 'lucide-react';
import { getSpiritualComfort } from '../services/geminiService';
import { AIComfortResponse } from '../types';

const AIComfort: React.FC = () => {
  const [emotion, setEmotion] = useState('');
  const [response, setResponse] = useState<AIComfortResponse | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSeek = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!emotion.trim()) return;

    setLoading(true);
    const result = await getSpiritualComfort(emotion);
    setResponse(result);
    setLoading(false);
  };

  return (
    <section className="py-16 bg-harvest-green text-white relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" 
           style={{backgroundImage: 'radial-gradient(#C5A059 2px, transparent 2px)', backgroundSize: '30px 30px'}}>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto bg-harvest-dark/30 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl">
          <div className="text-center mb-8">
            <Sparkles className="w-10 h-10 text-harvest-gold mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-2">Seek Refuge in His Word</h2>
            <p className="text-stone-200 font-light">
              Tell us how you are feeling today, and receive a comforting scripture tailored for your heart.
            </p>
          </div>

          <form onSubmit={handleSeek} className="flex flex-col sm:flex-row gap-3 mb-8">
            <input 
              type="text"
              value={emotion}
              onChange={(e) => setEmotion(e.target.value)}
              placeholder="I am feeling... (e.g., anxious, lonely, grateful)"
              className="flex-1 px-6 py-4 rounded-lg bg-white/90 text-harvest-brown placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-harvest-gold text-lg"
            />
            <button 
              type="button" // Changed to button to avoid form submission reload, handleSeek handles logic
              onClick={handleSeek}
              disabled={loading}
              className="px-8 py-4 bg-harvest-gold hover:bg-amber-600 rounded-lg font-bold text-white transition-colors disabled:opacity-50 flex items-center justify-center"
            >
              {loading ? 'Seeking...' : <><span className="mr-2">Find Peace</span> <Send className="w-5 h-5" /></>}
            </button>
          </form>

          {response && (
            <div className="bg-white/95 rounded-xl p-6 md:p-8 text-harvest-brown animate-fade-in shadow-inner border-l-8 border-harvest-gold">
              <div className="flex items-start gap-4">
                <BookOpen className="w-8 h-8 text-harvest-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="text-xl md:text-2xl font-serif italic mb-4 leading-relaxed">
                    "{response.verse}"
                  </p>
                  <div className="flex flex-col md:flex-row md:items-center justify-between border-t border-stone-200 pt-4 gap-4">
                    <span className="font-bold text-harvest-brown uppercase tracking-widest text-sm">
                      {response.reference}
                    </span>
                    <p className="text-harvest-green text-sm md:text-right italic">
                      {response.message}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AIComfort;