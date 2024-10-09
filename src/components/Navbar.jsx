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
    <div className=" top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6">
      <nav className="bg-transparent  shadow-lg rounded-lg max-w-5xl mx-auto">
        <div className="px-4 sm:px-6">
          <div className="flex items-center justify-center h-14 sm:h-16">
            {navItems.map((item) => (
              <a
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-2 sm:px-3 py-2 rounded-md text-xs sm:text-sm font-medium cursor-pointer transition-colors duration-200 ease-in-out mx-1 sm:mx-2"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;