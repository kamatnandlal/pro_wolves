import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Users, UserCircle, PlusSquare, MessageCircle } from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="fixed w-64 h-screen pt-16 bg-black border-r border-gray-800">
      <div className="p-4 space-y-4">
        <Link to="/" className="flex items-center space-x-3 p-3 hover:bg-gray-900 rounded-lg">
          <Home className="h-6 w-6" />
          <span>Home</span>
        </Link>
        <Link to="/clubs" className="flex items-center space-x-3 p-3 hover:bg-gray-900 rounded-lg">
          <Users className="h-6 w-6" />
          <span>Clubs</span>
        </Link>
        <button className="flex items-center space-x-3 p-3 hover:bg-gray-900 rounded-lg w-full">
          <PlusSquare className="h-6 w-6" />
          <span>Create</span>
        </button>
        <button className="flex items-center space-x-3 p-3 hover:bg-gray-900 rounded-lg w-full">
          <MessageCircle className="h-6 w-6" />
          <span>Messages</span>
        </button>
        <Link to="/profile" className="flex items-center space-x-3 p-3 hover:bg-gray-900 rounded-lg">
          <UserCircle className="h-6 w-6" />
          <span>Profile</span>
        </Link>
      </div>
    </div>
  );
}