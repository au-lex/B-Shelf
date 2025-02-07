import React from 'react'
import { Camera, Smile, AtSign, Link, Send } from 'lucide-react';

const PostInput: React.FC = () => {
  return (
    <div className=" my-8">
      <div className="bg-white rounded-xl border p-6 space-y-4">
        {/* Header */}
        <div className="flex items-center space-x-3">
        <div className="profile">
            <img src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"  className='w-10 h-10 rounded-full object-cover'  alt="profile" />
          </div>
          <span className="font-medium text-gray-700">What's on your mind?</span>
        </div>
        
        {/* Text Input */}
        <div className="relative">
          <textarea 
            className="w-full min-h-[120px] p-4 bg-gray-50 rounded-lg border-0 focus:ring-2 focus:ring-blue-500 resize-none"
            placeholder="Share your thoughts about books..."
          />
        </div>
        
        {/* Action Bar */}
        <div className="flex items-center justify-between pt-2 border-t">
          <div className="flex space-x-2">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 text-gray-600">
              <Camera size={20} />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 text-gray-600">
              <Smile size={20} />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 text-gray-600">
              <AtSign size={20} />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 text-gray-600">
              <Link size={20} />
            </button>
          </div>
          
          <button className="px-6 py-2 bg-base text-white rounded-full font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2">
            <span>Share</span>
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostInput




