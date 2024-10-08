import React from 'react';

const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="w-full flex justify-around bg-gray-800 text-white py-4 shadow-md rounded-lg border border-gray-700">
      <a 
        onClick={() => scrollToSection('register')} 
        className="hover:text-green-400 transition-colors duration-300 cursor-pointer"
      >
        Register
      </a>
      <a 
        onClick={() => scrollToSection('prizes')} 
        className="hover:text-green-400 transition-colors duration-300 cursor-pointer"
      >
        Prizes
      </a>
      <a 
        onClick={() => scrollToSection('tracks')} 
        className="hover:text-green-400 transition-colors duration-300 cursor-pointer"
      >
        Tracks
      </a>
      <a 
        onClick={() => scrollToSection('timeline')} 
        className="hover:text-green-400 transition-colors duration-300 cursor-pointer"
      >
        Timeline
      </a>
    </nav>
  );
};

export default Navbar;
