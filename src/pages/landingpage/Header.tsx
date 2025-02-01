import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {  X } from 'lucide-react';
import { VscMenu } from "react-icons/vsc";


interface NavItem {
  label: string;
  path: string;
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Contribute', path: '/contribute' },
    { label: 'Connect', path: '/connect' },
    { label: 'Blog', path: '/blog' },
    // { label: 'Shop', path: '/shop' },
    { label: 'Contact', path: '/contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-white shadow-sm  z-40 fixed">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[4rem]">
          {/* Logo */}
          <div className="">
            <NavLink to="/" className="b block">
              <img src="https://res.cloudinary.com/dmhvsyzch/image/upload/v1736312874/image_prev_ui_2_d4zqol.png"
               alt="logo" className='w-[100px] h-[90px] object-cover' />
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                className={({ isActive }) => 
                  `px-3 py-2 text-sm font-medium transition-colors ${
                    isActive 
                      ? 'text-blue-500 font-semibold'
                      : 'text-gray-600 hover:text-blue-500'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <NavLink
                  to="/signup"
              className="bg-base text-white px-8 py-3 rounded-full  text-sm w-full  font-medium hover:bg-base/50 transition-colors"
            >
              Signup
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md  text-slate-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <VscMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 mt-[4rem] bg-white transform z-50 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-4 border px-4 bg-white">
          {navItems.map((item, index) => (
            <NavLink
              key={item.label}
              to={item.path}
              onClick={toggleMenu}
              className={({ isActive }) => 
                `px-4 py-3 text-lg font-medium transition-colors border-b border-gray-100
                ${isActive ? 'text-[#f56256] font-semibold' : 'text-gray-600'}
                transform transition-transform duration-300 ease-in-out
                ${isMenuOpen ? 'translate-x-0' : 'translate-x-8'}
                `
              }
              style={{
                transitionDelay: `${index * 50}ms`
              }}
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink
            to="/signup"
            onClick={toggleMenu}
            className="mt-6 bg-[#f56256] text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-600 transition-colors text-center"
          >
          Signup
          </NavLink>
        </div>
      </div>

      
    </header>
  );
};

export default Header;