import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="bg-gray-100 border-t border-gray-200"
      style={{ fontFamily: "Satoshi, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Section */}
          <div className="flex flex-col space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">SHOP.CO</h2>
            <p className="text-gray-600 leading-relaxed max-w-md">
              We have clothes that suit your style and which you're proud to wear. From women to men.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Facebook"
                className="w-8 h-8 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <FaFacebookF size={16} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-8 h-8 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <FaInstagram size={16} />
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex md:justify-end">
            <div className="flex flex-col space-y-4">
              <h4 className="font-bold text-gray-900 text-lg tracking-wide">HELP</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="hover:text-gray-900 cursor-pointer transition-colors">
                  Privacy Statement
                </li>
                <li className="hover:text-gray-900 cursor-pointer transition-colors">
                  Terms & Conditions
                </li>
                <li className="hover:text-gray-900 cursor-pointer transition-colors">
                  Cookie Policy
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
          <div className="mb-2 sm:mb-0 text-center sm:text-left">
            © {new Date().getFullYear()} SHOP.CO. All rights reserved.
          </div>
          <div className="flex space-x-4 justify-center sm:justify-start">
            <a href="#" className="hover:text-gray-900 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-gray-900 transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-gray-900 transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
