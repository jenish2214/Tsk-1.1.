import React from "react";

const HeroSection = () => {
  return (
    <section className="relative bg-gray-50 overflow-hidden m-auto pt-20" style={{ fontFamily: 'Satoshi, sans-serif' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-5 py-16 md:py-20  ">
        <div className="grid grid-cols-1  gap-10 lg:gap-16 items-center">
          
         
          <div className="text-center">
           
            <div className="relative inline-block mb-8">
              <span className="absolute -left-8 -bottom-20 text-black text-6xl md:text-7xl select-none">✦</span>
              <span className="absolute -right-12 -top-10 text-black text-7xl md:text-8xl select-none">✦</span>
              
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
                FIND CLOTHES <br />
                THAT MATCHES <br />
                YOUR STYLE
              </h1>
            </div>

            
            <p className="max-w-lg text-gray-600 sm:text-lg mx-auto leading-6 line-clamp-[1.5]">
  Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
</p>


           
<div className="mt-8 flex justify-center lg:justify-start">
  <button className="bg-black text-white px-8 py-3 rounded-full font-medium text-base hover:bg-gray-800 transition-colors">
    Shop Now
  </button>
</div>


            <div className="mt-12 sm:mt-16 grid grid-cols-3 gap-4 md:gap-6 max-w-md sm:max-w-2xl mx-auto">
             
              <div className="text-center">
                <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                  200+
                </h3>
                <p className="text-gray-600 mt-1 text-sm sm:text-base">
                  International Brands
                </p>
              </div>

             
              <div className="text-center border-l border-gray-200 pl-4 md:pl-6">
                <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                  2,000+
                </h3>
                <p className="text-gray-600 mt-1 text-sm sm:text-base">
                  High-Quality Products
                </p>
              </div>

              
              <div className="text-center border-l border-gray-200 pl-4 md:pl-6">
                <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                  30,000+
                </h3>
                <p className="text-gray-600 mt-1 text-sm sm:text-base">
                  Happy Customers
                </p>
              </div>
            </div>
          </div>

          
          <div className="relative">
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
