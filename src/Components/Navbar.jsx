import React, { useState } from "react";
import {
  FaShoppingCart,
  FaUser,
  FaSearch,
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg px-[80px] py-[20px]  fixed top-0 left-0 right-0 z-50" style={{ fontFamily: 'Satoshi, sans-serif' }}>
      <div className="max-w-7xl mx-auto">
        
        <div className="hidden lg:flex items-center justify-between ">
          
          <div className="flex-1 flex justify-start">
            <div className="text-3xl font-bold text-black cursor-pointer hover:opacity-80 transition-opacity">
              SHOP.CO
            </div>
          </div>

         
          <div className=" flex items-center justify-center space-x-1">
            {/* Navigation Menu */}
            <ul className="flex items-center space-x-10 text-gray-800 font-semibold">
              <li>
                <a href="/shop" className="relative hover:text-black transition-colors after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-black after:transition-all flex items-center gap-1">
                  Shop
                  <FaChevronDown className="text-xs" />
                </a>
              </li>
              <li>
                <a href="/sale" className="relative hover:text-black transition-colors after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-black after:transition-all">
                  On Sale
                </a>
              </li>
              <li>
                <a href="/new" className="relative hover:text-black transition-colors after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-black after:transition-all">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="/brands" className="relative hover:text-black transition-colors after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-black after:transition-all">
                  Brands
                </a>
              </li>
            </ul>

            
            <div className="relative ml-8">
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                <FaSearch />
              </span>
              <input
                type="text"
                placeholder="Search for products..."
                className="w-60 border-2 border-gray-200 rounded-full pl-12 pr-6 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black bg-gray-100 hover:bg-gray-200 transition-colors"
              />
            </div>
          </div>

          
          <div className="flex-1 flex justify-end">
            <div className="flex items-center space-x-6">
              <div className="relative cursor-pointer hover:scale-110 transition-transform">
                <FaShoppingCart className="text-2xl text-gray-700" />
              </div>
              <div className="relative cursor-pointer hover:scale-110 transition-transform">
                <FaUser className="text-2xl text-gray-700" />
              </div>
            </div>
          </div>
        </div>

        
        <div className="lg:hidden flex items-center justify-between">
          
          <div className="text-2xl font-bold text-black cursor-pointer hover:opacity-80 transition-opacity">
            SHOP.CO
          </div>

         
          <div
            className="text-gray-800 text-xl cursor-pointer p-3 rounded-full"
            onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>

       
        {menuOpen && (
          <div className="fixed top-[88px] left-0 w-full bg-white shadow-lg border-t border-gray-200 lg:hidden z-40">
            
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                  <FaSearch />
                </span>
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full border-2 border-gray-200 rounded-full pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  style={{backgroundColor: 'rgb(240, 240, 240)'}}
                />
              </div>
            </div>

           
            <ul className="flex flex-col text-gray-800 font-medium">
              <li className="px-6 py-4 border-b border-gray-100">
                <a href="/shop" className="block text-lg">Shop</a>
              </li>
              <li className="px-6 py-4 border-b border-gray-100">
                <a href="/sale" className="block text-lg">On Sale</a>
              </li>
              <li className="px-6 py-4 border-b border-gray-100">
                <a href="/new" className="block text-lg">New Arrivals</a>
              </li>
              <li className="px-6 py-4">
                <a href="/brands" className="block text-lg">Brands</a>
              </li>
            </ul>

            
            <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
              <div className="flex items-center justify-center space-x-8">
                <div className="flex items-center space-x-2 cursor-pointer">
                  <FaShoppingCart className="text-2xl" />
                  <span className="text-lg font-medium">Shopping Cart</span>
                </div>
                <div className="flex items-center space-x-2 cursor-pointer">
                  <FaUser className="text-2xl" />
                  <span className="text-lg font-medium">My Account</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 