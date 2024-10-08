import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const targetDate = new Date('October 21, 2024').getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft('Event Started');
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft(`${days}d : ${hours}h : ${minutes}m : ${seconds}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white rounded-md"
      style={{
        backgroundColor: '#1f2937',
        backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)',
        backgroundSize: '32px 32px'
      }}>
      <img src="/imagepng.png" alt="House of Coders" className="mb-4 w-3/4 max-w-lg" />
      <p className="text-xl mb-4">SVG of Throne: [Animation]</p>
      <p className="text-3xl text-green-400 mb-4">HACKING BEGINS IN:</p>
      <div className="flex items-center space-x-4">
        <div className="bg-gray-700 px-4 py-2 rounded-lg text-2xl font-semibold animate-pulse">
          {timeLeft}
        </div>
        <button className="bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold px-6 py-2 rounded-full shadow-lg transform hover:scale-110">
          REGISTER
        </button>
      </div>
      <p className="mt-4 text-green-500">On Scroll Fill Animation</p>
    </section>
  );
};

export default Hero;
