import React from 'react';
import { Heart, MessageCircle, Share2, Bookmark } from 'lucide-react';

export default function Feed() {
  const posts = [
    {
      id: 1,
      user: {
        name: 'Sarah Wilson',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80'
      },
      image: 'https://images.unsplash.com/photo-1612387290123-34af734b5f61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
      likes: 1234,
      caption: 'Adventure awaits! 🌄 #Wolves #Nature'
    },
    {
      id: 2,
      user: {
        name: 'Mike Rivers',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80'
      },
      image: 'https://images.unsplash.com/photo-1564466809058-bf4114d55352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
      likes: 856,
      caption: 'Pack life 🐺 #WolvesForever'
    }
  ];

  return (
    <div className="space-y-8 pt-16 ml-64">
      {posts.map(post => (
        <div key={post.id} className="bg-gray-900 rounded-lg overflow-hidden">
          <div className="p-4 flex items-center space-x-3">
            <img src={post.user.avatar} alt={post.user.name} className="h-10 w-10 rounded-full" />
            <span className="font-semibold">{post.user.name}</span>
          </div>
          
          <img src={post.image} alt="" className="w-full aspect-square object-cover" />
          
          <div className="p-4 space-y-3">
            <div className="flex justify-between items-center">
              <div className="flex space-x-4">
                <Heart className="h-6 w-6 hover:text-red-500 cursor-pointer" />
                <MessageCircle className="h-6 w-6 hover:text-blue-500 cursor-pointer" />
                <Share2 className="h-6 w-6 hover:text-green-500 cursor-pointer" />
              </div>
              <Bookmark className="h-6 w-6 hover:text-yellow-500 cursor-pointer" />
            </div>
            
            <div>
              <p className="font-semibold">{post.likes.toLocaleString()} likes</p>
              <p><span className="font-semibold">{post.user.name}</span> {post.caption}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}