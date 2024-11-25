import React from 'react';
import { Settings, Grid, Bookmark, Users } from 'lucide-react';

export default function Profile() {
  return (
    <div className="pt-16 ml-64">
      <div className="mb-8">
        <div className="flex items-center space-x-8">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80"
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-purple-500"
          />
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold">Alex Thompson</h1>
              <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center space-x-2">
                <Settings className="h-5 w-5" />
                <span>Edit Profile</span>
              </button>
            </div>
            
            <div className="flex space-x-8">
              <div>
                <span className="font-bold">1,234</span> posts
              </div>
              <div>
                <span className="font-bold">4,567</span> followers
              </div>
              <div>
                <span className="font-bold">890</span> following
              </div>
            </div>
            
            <p className="max-w-md">
              Wildlife photographer 📸 | Nature enthusiast 🌲 | Pack leader 🐺
              Capturing the beauty of the wild, one shot at a time.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="flex justify-center space-x-16 py-4">
          <button className="flex items-center space-x-2 text-purple-500">
            <Grid className="h-5 w-5" />
            <span>Posts</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-400 hover:text-white">
            <Bookmark className="h-5 w-5" />
            <span>Saved</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-400 hover:text-white">
            <Users className="h-5 w-5" />
            <span>Clubs</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-1">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="aspect-square bg-gray-900">
            <img
              src={`https://images.unsplash.com/photo-${1550000000000 + i}?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80`}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}