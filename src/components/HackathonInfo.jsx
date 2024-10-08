import React from 'react';
import './HackathonInfo.css';

const HackathonInfo = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white bg-gray-900 p-10 rounded-md">
      {/* Header Sections */}
      <div className="flex justify-between w-full max-w-5xl mb-4">
        {/* 24 Hours Hackathon */}
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-1/3 text-left mr-4">
          <h2 className="text-3xl font-bold">24 Hours HACKATHON</h2>
        </div>
        
        {/* Incentives */}
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-1/3 text-left ml-4">
          <h3 className="text-2xl font-bold mb-4">Incentives</h3>
          <ul className="text-lg space-y-2 font-semibold">
            <li>15K Prize Pool</li>
            <li>Internship Opportunity from Sponsor 1, Sponsor 2, Sponsor 3</li>
          </ul>
        </div>
      </div>

      {/* Tracks Section */}
      <div className="w-full max-w-5xl mb-8">
        <h3 className="text-3xl font-bold mb-6 text-center">Tracks</h3>
        <div className="flex justify-between">
          {["Track 1", "Track 2", "Track 3", "Track 4", "Track 5"].map((track, index) => (
            <div key={index} className="flip-card w-36 h-36 mx-2 flex-1">
              <div className="flip-card-inner">
                <div className="flip-card-front bg-gray-700 rounded-lg shadow-lg flex items-center justify-center p-4">
                  <h4 className="text-xl font-semibold">{track}</h4>
                </div>
                <div className="flip-card-back bg-gray-600 rounded-lg shadow-lg flex items-center justify-center p-4">
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sponsors Section */}
      <div className="text-center w-full max-w-3xl border border-red-600 rounded-md p-6 bg-gray-800">
        <h3 className="text-2xl font-bold text-red-500 mb-4">Sponsors</h3>
        <div className="flex justify-around">
          {["Sponsor 1", "Sponsor 2", "Sponsor 3"].map((sponsor, index) => (
            <div key={index} className="text-xl font-semibold text-white bg-gray-700 p-4 rounded-md shadow-md w-1/3 mx-2">
              {sponsor}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HackathonInfo;
