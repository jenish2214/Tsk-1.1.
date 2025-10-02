import React from "react";
import { FaRegEnvelope } from "react-icons/fa";

const Newsletter = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" style={{ fontFamily: 'Satoshi, sans-serif' }}>
      <div className="bg-black rounded-3xl p-6 sm:p-10 md:p-14 lg:p-16 text-white shadow-lg">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-12">
          
          {/* Heading */}
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center lg:text-left leading-snug lg:max-w-lg">
            STAY UPTO DATE ABOUT<br />OUR LATEST OFFERS
          </h3>

          {/* Form */}
          <div className="w-full max-w-sm sm:max-w-md">
            <div className="flex flex-col items-center lg:items-start gap-4 w-full">
              
              {/* Input */}
              <div className="relative w-full">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <FaRegEnvelope className="text-lg" />
                </span>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full bg-white text-gray-800 placeholder-gray-400 rounded-full pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-shadow"
                />
              </div>

              {/* Button */}
              <button
                type="button"
                className="w-full bg-white text-black rounded-full py-3 font-medium text-base hover:bg-gray-100 transition-colors"
              >
                Send Us For Notification
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
