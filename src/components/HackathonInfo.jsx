import React from 'react';
import Track1 from '../assets/Agri.jpg'; // Replace with actual path
import Track2 from '../assets/Edu.jpg';
import Track3 from '../assets/Fin.jpg';
import Track4 from '../assets/Heal.jpg';
import Track5 from '../assets/Open.jpg';
import { BackgroundBeams } from '../components/ui/background-beams';

const HackathonInfo = () => {
  const tracks = [
    { name: "Track 1", description: "This track focuses on leveraging technology to revolutionize agriculture. Participants will explore solutions to address challenges such as sustainable farming, food security, and improving agricultural productivity. Projects may involve using AI for crop monitoring, developing IoT-enabled devices for smart farming, or creating blockchain-based supply chain management systems.", image: Track1 },
    { name: "Track 2", description: "This track aims to enhance education through innovative technological solutions. Participants will work on projects that improve learning experiences, teaching methods, or educational accessibility. Ideas may include developing personalized learning platforms, creating interactive educational games, or using virtual reality for immersive learning experiences.", image: Track2 },
    { name: "Track 3", description: "This track focuses on utilizing technology to transform the financial services industry. Participants will explore solutions to improve financial inclusion, enhance payment systems, or develop innovative financial products. Projects may involve creating mobile banking applications, developing peer-to-peer lending platforms, or using blockchain for secure financial transactions.", image: Track3 },
    { name: "Track 4", description: "This track aims to improve healthcare outcomes through technological advancements. Participants will work on projects that address challenges in diagnosis, treatment, or healthcare delivery. Ideas may include developing medical imaging analysis tools, creating telemedicine platforms, or using AI for drug discovery.", image: Track4 },
    { name: "Track 5", description: "This track encourages participants to come up with their own innovative ideas that address real-world problems. Participants will have the freedom to explore any problem or industry and propose creative solutions. This track is open to a wide range of ideas and encourages out-of-the-box thinking.", image: Track5 },
  ];

  return (
    <section className="relative h-fit flex bg-neutral-950 flex-col items-center justify-center text-white p-4 sm:p-6 md:p-10 rounded-md overflow-hidden">
      {/* Background Beams */}
      <div className="absolute inset-0 z-0">
        <BackgroundBeams />
      </div>

      {/* Header Sections */}
      <div className="flex relative z-10 flex-col sm:flex-row justify-between w-full max-w-5xl mb-8 space-y-4 sm:space-y-0 sm:space-x-4">
        {/* 24 Hours Hackathon */}
        <div className="bg-gray-800 text-white p-4 sm:p-6 rounded-lg shadow-lg w-full sm:w-1/4 text-center flex items-center justify-center">
          <h2 className="text-2xl tracking-wider sm:text-3xl font-bold text-green-400 m-auto">24 Hours HACKATHON</h2>
        </div>

        {/* Incentives */}
        <div className="bg-gray-800 text-white text-center p-4 sm:p-6 rounded-lg shadow-lg w-full sm:w-4/5" id="prizes">
          <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 uppercase">Incentives</h3>
          <ul className="text-base sm:text-lg space-y-1 sm:space-y-2 font-semibold">
            <li>15K Prize Pool</li>
            <li>Don't miss out on this thrilling hackathon! Win an exciting prize pool and secure an exclusive internship opportunity. Show off your skills and take your career to the next level. This is your chance to shine!</li>
          </ul>
        </div>
      </div>

      {/* Tracks Section */}
      <div className="w-full relative z-10 max-w-5xl mb-8" id="tracks">
        <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">Tracks</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {tracks.map((track, index) => (
            <div key={index} className="flip-card w-full h-64 perspective">
              <div className="flip-card-inner relative w-full h-full transition-transform duration-500 transform-style-preserve-3d hover:rotate-y-180">
                <div className="flip-card-front absolute w-full h-full bg-gray-700 rounded-lg shadow-lg flex items-center justify-center p-4 backface-hidden">
                  <img src={track.image} alt={track.name} className="w-full h-full object-cover rounded-lg" />
                </div>
                <div className="flip-card-back absolute w-full h-full bg-gray-600 rounded-lg shadow-lg flex items-center justify-center p-4 backface-hidden rotate-y-180">
                  <div className="overflow-auto max-h-full p-2">
                    <p className="text-sm sm:text-base leading-relaxed">{track.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HackathonInfo;
