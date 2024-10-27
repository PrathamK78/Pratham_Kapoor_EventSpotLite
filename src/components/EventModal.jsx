import React from 'react';
import { X, Calendar, MapPin } from 'lucide-react';
import { formatDate } from '../utils/dateUtils';

const EventModal = ({ event, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-[fadeIn_0.3s_ease-out]">
    <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-[scaleIn_0.3s_ease-out]">
      <div className="relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-white hover:text-gray-200 z-10"
        >
          <X size={24} />
        </button>
        <img
          src={event.image}
          alt={event.name}
          className="w-full h-64 object-cover"
        />
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">{event.name}</h2>
        <div className="flex items-center text-gray-600 mb-3">
          <Calendar size={18} className="mr-2" />
          <span>{formatDate(event.date)}</span>
        </div>
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin size={18} className="mr-2" />
          <span>{event.location}</span>
        </div>
        <p className="text-gray-700 leading-relaxed">{event.description}</p>
      </div>
    </div>
  </div>
);

export default EventModal;