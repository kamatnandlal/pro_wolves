import React from 'react';
import { Link } from 'react-router-dom';
import { Dog, Search, Bell } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="border-b border-gray-800 bg-black/95 backdrop-blur-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Dog className="h-8 w-8 text-purple-500" />
            <span className="font-bold text-xl tracking-wider">W.O.L.V.E.S</span>
          </Link>
          
          <div className="flex-1 max-w-lg mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-gray-900 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <Bell className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80"
              alt="Profile"
              className="h-8 w-8 rounded-full border-2 border-purple-500"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}