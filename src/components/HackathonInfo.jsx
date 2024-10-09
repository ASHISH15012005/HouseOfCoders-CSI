import React from 'react';
import { BackgroundBeams } from './ui/background-beams';

const HackathonInfo = () => {
  const tracks = [
    { name: "Track 1", description: "Lorem ipsum dolor sit amet." },
    { name: "Track 2", description: "Consectetur adipiscing elit." },
    { name: "Track 3", description: "Sed do eiusmod tempor incididunt." },
    { name: "Track 4", description: "Ut labore et dolore magna aliqua." },
    { name: "Track 5", description: "Ut enim ad minim veniam." },
  ];

  return (
    <section className="relative h-fit flex bg-neutral-950 flex-col items-center justify-center text-white p-4 sm:p-6 md:p-10 rounded-md overflow-hidden">
      {/* Background Beams */}
      <div className="absolute inset-0 z-0">
        {/* <BackgroundBeams /> */}
      </div>

      {/* Header Sections */}
      <div className="flex relative z-10 flex-col sm:flex-row justify-between w-full max-w-5xl mb-8 space-y-4 sm:space-y-0 sm:space-x-4">
        {/* 24 Hours Hackathon */}
        <div className="bg-gray-800 text-white p-4 sm:p-6 rounded-lg shadow-lg w-full sm:w-1/2 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold hover:text-red-400">24 Hours HACKATHON</h2>
        </div>

        {/* Incentives */}
        <div className="bg-gray-800 text-white text-center p-4 sm:p-6 rounded-lg shadow-lg w-full sm:w-1/2">
          <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 hover:text-emerald-400 uppercase">Incentives</h3>
          <ul className="text-base sm:text-lg space-y-1 sm:space-y-2 font-semibold">
            <li>15K Prize Pool</li>
            <li>Internship Opportunity from Sponsor 1, Sponsor 2, Sponsor 3</li>
          </ul>
        </div>
      </div>

      {/* Tracks Section */}
      <div className="w-full relative z-10 max-w-5xl mb-8">
        <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">Tracks</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {tracks.map((track, index) => (
            <div key={index} className="flip-card w-full h-36 perspective">
              <div className="flip-card-inner relative w-full h-full transition-transform duration-500 transform-style-preserve-3d hover:rotate-y-180">
                <div className="flip-card-front absolute w-full h-full bg-gray-700 rounded-lg shadow-lg flex items-center justify-center p-4 backface-hidden">
                  <h4 className="text-lg sm:text-xl font-semibold">{track.name}</h4>
                </div>
                <div className="flip-card-back absolute w-full h-full bg-gray-600 rounded-lg shadow-lg flex items-center justify-center p-4 backface-hidden rotate-y-180">
                  <p className="text-sm sm:text-base">{track.description}</p>
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
