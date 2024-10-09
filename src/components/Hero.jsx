import React, { useState, useEffect } from 'react';
import logo from "../assets/logo.png";
import heroimage from "../assets/img3.webp";
import Navbar from './Navbar';

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
    <div
      className="min-h-screen flex flex-col justify-center items-center"
      style={{
        backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.05) 3px, transparent 3px), linear-gradient(rgba(255,255,255,0.05) 3px, transparent 3px)',
        backgroundSize: '32px 32px',
      }}
    >
      <Navbar />
      <section className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 lg:px-8 py-8 lg:py-0">
        <div className="w-full lg:w-3/5 flex flex-col items-center justify-center text-white mb-8 lg:mb-0">
          <img src={logo} alt="House of Coders" className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mb-6 lg:mb-8" />
          <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-green-400 mb-4 text-center">HACKING BEGINS IN:</p>
          <div className="flex flex-col items-center space-y-4">
            <div className="bg-gray-700 px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold animate-pulse">
              {timeLeft}
            </div>
            <button className="bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow-lg transform hover:scale-110 transition-transform duration-300 text-base sm:text-lg lg:text-xl">
              REGISTER
            </button>
          </div>
        </div>

        <div className="w-full lg:w-2/5 flex justify-center items-center mt-8 lg:mt-0">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
            <img
              src={heroimage}
              alt="Hero"
              className="rounded-3xl w-full h-[40vh] sm:h-[50vh] lg:h-[60vh] xl:h-[70vh] object-cover shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;