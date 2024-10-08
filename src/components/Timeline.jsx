import React from 'react';

const DaySubSection = ({ day, items }) => (
  <div className="flex flex-col items-center justify-center text-white p-8 mb-6 rounded-lg bg-gray-800 w-full max-w-4xl transition transform hover:scale-105"
       style={{ boxShadow: '0 4px 15px rgba(0, 0, 0, 0.6)' }}>
    <h3 className="text-2xl font-semibold mb-4">Day {day}</h3>
    <p className="text-lg text-center">{items}</p>
  </div>
);

const Timeline = () => {
  const day1Items = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  const day2Items = 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
  const day3Items = 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

  return (
    <section id="timeline" className="min-h-screen flex flex-col items-center justify-center text-white p-10 rounded-md"
      style={{
        backgroundColor: '#1f2937',
        backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)',
        backgroundSize: '32px 32px'
      }}>
      <h2 className="text-3xl font-semibold mb-8">3-Day Timeline</h2>
      <DaySubSection day={1} items={day1Items} />
      <DaySubSection day={2} items={day2Items} />
      <DaySubSection day={3} items={day3Items} />
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-2 mt-8 rounded-full shadow-lg animate-bounce"
      >
        UP
      </button>
    </section>
  );
};

export default Timeline;
