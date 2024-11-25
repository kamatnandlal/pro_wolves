import React from 'react';
import { Users, Plus, Settings } from 'lucide-react';

export default function Clubs() {
  const clubs = [
    {
      id: 1,
      name: 'Nature Photographers',
      members: 1234,
      image: 'https://images.unsplash.com/photo-1542856391-010fb87dcfed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 2,
      name: 'Wildlife Enthusiasts',
      members: 892,
      image: 'https://images.unsplash.com/photo-1564466809058-bf4114d55352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'
    }
  ];

  return (
    <div className="pt-16 ml-64">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Your Clubs</h1>
        <button className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg">
          <Plus className="h-5 w-5" />
          <span>Create Club</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {clubs.map(club => (
          <div key={club.id} className="bg-gray-900 rounded-lg overflow-hidden">
            <div className="relative h-48">
              <img src={club.image} alt={club.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <h3 className="text-xl font-bold">{club.name}</h3>
                <div className="flex items-center space-x-2 text-sm text-gray-300">
                  <Users className="h-4 w-4" />
                  <span>{club.members.toLocaleString()} members</span>
                </div>
              </div>
              <button className="absolute top-4 right-4 p-2 bg-black/40 rounded-full hover:bg-black/60">
                <Settings className="h-5 w-5" />
              </button>
            </div>
            
            <div className="p-4 flex justify-between items-center">
              <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg">
                View Club
              </button>
              <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg">
                Invite Members
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}