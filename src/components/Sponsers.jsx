import React from 'react';
import Spon1 from '../assets/Spon1.png';
import Spon2 from '../assets/Spon2.png';
import Spon3 from '../assets/Spon31.png';

const Sponsers = () => {
    return (
        <div className="text-center w-full mx-auto max-w-3xl border border-red-600 mb-10 mt-10 rounded-md p-4 sm:p-6 bg-gray-800">
            <h3 className="text-3xl sm:text-4xl font-bold text-red-500 mb-4">Sponsors</h3>
            <div className="flex flex-col sm:flex-row justify-around space-y-2 sm:space-y-0 sm:space-x-2">
                {[
                    {img: Spon1 },
                    {img: Spon2 },
                    {img: Spon3 }
                ].map((sponsor, index) => (
                    <div key={index} className="text-base sm:text-xl font-semibold text-white bg-gray-700 p-3 sm:p-4 rounded-md shadow-md w-full sm:w-1/3">
                        <div className="w-full h-40 flex justify-center items-center mb-2 rounded-md">
                            <img src={sponsor.img} alt={sponsor.name} className="w-[200px] h-[100px]"/>
                        </div>
                        {sponsor.name}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sponsers;
