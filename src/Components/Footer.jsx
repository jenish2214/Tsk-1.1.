import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 px-30" style={{ fontFamily: 'Satoshi, sans-serif', backgroundColor: 'rgb(240, 240, 240)' }}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          
          <div className="flex flex-col space-y-6">
            <h2 className="text-3xl font-extrabold text-gray-900">SHOP.CO</h2>
            <p className="text-gray-600 leading-relaxed max-w-md">
              We have clothes that suits your style and which you're proud to wear. From women to men.
            </p>
            <div className="flex space-x-4 text-gray-600">
              <a href="#" aria-label="Facebook" className="w-8 h-8 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                <FaFacebookF size={16} />
              </a>
              <a href="#" aria-label="Instagram" className="w-8 h-8 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                <FaInstagram size={16} />
              </a>
            </div>
          </div>

       
          <div className="flex justify-end">
            <div className="flex flex-col space-y-4">
              <h4 className="font-bold text-gray-900 text-lg tracking-wide">HELP</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="hover:text-gray-900 cursor-pointer transition-colors">Privacy statement</li>
                <li className="hover:text-gray-900 cursor-pointer transition-colors">Terms & Conditions</li>
                <li className="hover:text-gray-900 cursor-pointer transition-colors">Cookie Policy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
          <div className="mb-3 sm:mb-0">
            © {new Date().getFullYear()} SHOP.CO. All rights reserved.
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-900 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Terms</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
