import React from 'react';

const Navbar = () => {
  const navItems = [
    { id: 'register', label: 'Register' },
    { id: 'prizes', label: 'Prizes' },
    { id: 'tracks', label: 'Tracks' },
    { id: 'timeline', label: 'Timeline' },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-800 shadow-lg">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-center h-16">
          {navItems.map((item) => (
            <a
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors duration-200 ease-in-out mx-2"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;