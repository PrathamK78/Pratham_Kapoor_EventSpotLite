import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { formatDate } from '../utils/dateUtils';

const EventCard = ({ event, index, onClick }) => (
  <div
    className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden transform transition duration-200 hover:scale-125 hover:shadow-2xl hover:bg-black hover:text-white cursor-pointer opacity-0 animate-[fadeInUp_0.5s_ease-out_forwards]"
    style={{ animationDelay: `${index * 0.1}s` }}
    onClick={() => onClick(event)}
  >
    <img
      src={event.image}
      alt={event.name}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">{event.name}</h2>
      <div className="flex items-center text-gray-500 mb-2">
        <Calendar size={16} className="mr-2" />
        <span>{formatDate(event.date)}</span>
      </div>
      <div className="flex items-center text-gray-500">
        <MapPin size={16} className="mr-2" />
        <span>{event.location}</span>
      </div>
    </div>
  </div>
);

export default EventCard;