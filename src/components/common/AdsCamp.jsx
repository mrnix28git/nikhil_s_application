import React from 'react';

const FooterCTA = () => {
  return (
    <div className="fixed bottom-0 w-full bg-[#f5effa] px-4 py-4 shadow-md z-50">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-4">
        {/* Price & Info */}
        <div>
          <p className="text-2xl font-bold text-black">₹1999/-</p>
          <p className="text-sm text-gray-600">(Limited Seats Left!)</p>
          <p className="text-sm text-gray-600">1 Lakh+ Students Taught</p>
        </div>

        {/* CTA Button */}
        <a
          href="#"
          className="bg-gradient-to-r from-orange-400 to-pink-500 text-white px-6 py-3 rounded-md font-semibold hover:scale-105 transition-transform duration-300"
        >
          Click Here to Join the Course
        </a>
      </div>
    </div>
  );
};

export default FooterCTA;
