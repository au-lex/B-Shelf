import { Facebook, Instagram, Twitter } from 'lucide-react';
import React from 'react'
import { NavLink } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-50 pt-16 pb-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Logo and About Section */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                <div className="">
            <NavLink to="/" className="b block">
              <img src="https://res.cloudinary.com/dmhvsyzch/image/upload/v1736312874/image_prev_ui_2_d4zqol.png"
               alt="logo" className='w-[150px] h-[50px] object-cover' />
            </NavLink>
          </div>
                  
                </div>
                <p className="text-gray-600 text-sm">
                  Where Every Book Finds a Friend. Join our community of book lovers and share your reading journey.
                </p>
              </div>
    
              {/* Quick Links */}
              <div>
                <h3 className="font-semibold text-slate-700 mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 hover:text-[#f56256] text-sm">Browse Books</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-[#f56256] text-sm">My Library</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-[#f56256] text-sm">Reading Lists</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-[#f56256] text-sm">Book Clubs</a></li>
                </ul>
              </div>
    
              {/* Support */}
              <div>
                <h3 className="font-semibold text-slate-700 mb-4">Support</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 hover:text-[#f56256] text-sm">Help Center</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-[#f56256] text-sm">Contact Us</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-[#f56256] text-sm">Privacy Policy</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-[#f56256] text-sm">Terms of Service</a></li>
                </ul>
              </div>
    
              {/* Newsletter */}
              <div>
                <h3 className="font-semibold text-slate-700 mb-4">Stay Updated</h3>
                <div className="space-y-4">
                  <p className="text-gray-600 text-sm">Subscribe to our newsletter for updates and reading recommendations.</p>
                  <div className="flex gap-2">
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="px-4 py-2 rounded-lg border border-gray-300 text-sm flex-1"
                    />
                    <button className="bg-[#f56256] text-white px-4 py-2 rounded-lg text-sm hover:bg-rose-600 transition-colors">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
    
            {/* Bottom Section */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-600 text-sm">
                  © 2025 Bie-Shelf. All rights reserved.
                </p>
                <div className="flex space-x-6">
                  <a href="#" className="text-gray-600 hover:text-[#f56256]">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-[#f56256]">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-[#f56256]">
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      );
  
}

export default Footer


