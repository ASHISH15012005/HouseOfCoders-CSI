import React from 'react'

const Sponsers = () => {
    return (
        <div className="text-center w-full mx-auto max-w-3xl border border-red-600 mb-10 mt-10 rounded-md p-4 sm:p-6 bg-gray-800">
            <h3 className="text-xl sm:text-2xl font-bold text-red-500 mb-4">Sponsors</h3>
            <div className="flex flex-col sm:flex-row justify-around space-y-2 sm:space-y-0 sm:space-x-2">
                {["Sponsor 1", "Sponsor 2", "Sponsor 3"].map((sponsor, index) => (
                    <div key={index} className="text-base sm:text-xl font-semibold text-white bg-gray-700 p-3 sm:p-4 rounded-md shadow-md w-full sm:w-1/3">
                        {sponsor}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sponsers
