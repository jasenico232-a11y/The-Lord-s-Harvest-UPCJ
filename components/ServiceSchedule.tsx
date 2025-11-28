import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { ServiceEvent } from '../types';

const events: ServiceEvent[] = [
  {
    id: '1',
    day: 'Sunday',
    time: '10:00 AM',
    title: 'Divine Worship Service',
    description: 'A time of high praise, worship, and the preaching of the Word.'
  },
  {
    id: '2',
    day: 'Sunday',
    time: '6:30 PM',
    title: 'Evangelistic Service',
    description: 'Reaping the harvest of souls. Bring a friend!'
  },
  {
    id: '3',
    day: 'Tuesday',
    time: '7:00 PM',
    title: 'Prayer & Fasting Meeting',
    description: 'Seeking God\'s face for our community and families.'
  },
  {
    id: '4',
    day: 'Thursday',
    time: '7:30 PM',
    title: 'Bible Study',
    description: 'Deep dive into the scriptures. Interactive study.'
  },
  {
    id: '5',
    day: 'Friday',
    time: '7:00 PM',
    title: 'Youth Ministry (Harvest Youth)',
    description: 'Empowering the next generation.'
  }
];

const ServiceSchedule: React.FC = () => {
  return (
    <section id="schedule" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-harvest-brown mb-4">Weekly Gathering Times</h2>
          <div className="w-24 h-1 bg-harvest-gold mx-auto rounded-full"></div>
          <p className="mt-4 text-stone-600 max-w-xl mx-auto">
            We believe in the power of gathering together. There is a place for you here.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {events.map((event) => (
            <div key={event.id} className="bg-harvest-cream rounded-xl p-6 border border-stone-100 shadow-sm hover:shadow-md transition-shadow hover:border-harvest-gold/30 group">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-harvest-dark text-harvest-gold px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  {event.day}
                </span>
                <Clock className="w-5 h-5 text-harvest-green" />
              </div>
              <h3 className="text-xl font-bold text-harvest-brown mb-2 group-hover:text-harvest-gold transition-colors">
                {event.title}
              </h3>
              <p className="text-stone-500 text-sm mb-4 flex items-center">
                 <span className="font-semibold mr-2">{event.time}</span>
              </p>
              <p className="text-stone-600 text-sm leading-relaxed border-t border-stone-200 pt-4">
                {event.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSchedule;