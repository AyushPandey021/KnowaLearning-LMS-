import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Knowa.png"; // replace with actual path

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-black text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:justify-between gap-12 lg:gap-20">

        {/* Logo & Description */}
        <div className="lg:w-[40%] flex flex-col gap-4 items-center lg:items-start text-center lg:text-left">
          <img src={logo} alt="Logo" className="h-30 w-auto rounded-md mx-auto lg:mx-0" />
          <h2 className="text-2xl font-bold text-white">Virtual Courses</h2>
          <p className="text-gray-400 text-sm">
            AI-powered learning platform to help you grow smarter. Learn anything, anytime, anywhere.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-3 justify-center lg:justify-start">
            {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
              >
                <Icon className="text-white text-lg" />
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="lg:w-[25%] flex flex-col gap-3 text-center lg:text-left">
          <h3 className="text-white font-semibold text-lg mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate("/")}>Home</li>
            <li className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate("/allcourses")}>Courses</li>
            <li className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate("/login")}>Login</li>
            <li className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate("/profile")}>My Profile</li>
          </ul>
        </div>

        {/* Explore Categories */}
        <div className="lg:w-[25%] flex flex-col gap-3 text-center lg:text-left">
          <h3 className="text-white font-semibold text-lg mb-2">Explore Categories</h3>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer transition-colors">Web Development</li>
            <li className="hover:text-white cursor-pointer transition-colors">AI/ML</li>
            <li className="hover:text-white cursor-pointer transition-colors">Data Science</li>
            <li className="hover:text-white cursor-pointer transition-colors">UI/UX Design</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-sm text-center text-gray-500">
        © {new Date().getFullYear()} LearnAI. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
