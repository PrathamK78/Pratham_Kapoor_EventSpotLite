import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import Header from './components/Header';
import EventCard from './components/EventCard';
import EventModal from './components/EventModal';
import { eventData } from './data/eventData.js';
import './styles/animation.css';
import Wall2 from './assets/images/wallpaper2.jpg';
import Wall3 from './assets/images/wallpaper3.jpg';


const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [usePattern, setUsePattern] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const filteredEvents = eventData.filter(event => 
    event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const backgroundStyles = usePattern
    ? {
        backgroundImage: `url(${Wall3})`,
        backgroundSize: 'cover'
      }
    : {
        backgroundImage: `url(${Wall2})`,
        backgroundSize: 'cover',
      };

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div className="min-h-screen opacity-0 animate-[fadeIn_0.5s_ease-in_forwards]" style={backgroundStyles}>
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        usePattern={usePattern}
        setUsePattern={setUsePattern}
      />
      
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((event, index) => (
            <EventCard
              key={event.id}
              event={event}
              index={index}
              onClick={setSelectedEvent}
            />
          ))}
        </div>
      </main>

      {selectedEvent && (
        <EventModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </div>
  );
};

export default App;