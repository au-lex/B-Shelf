import React, { useState } from 'react';
import UserLayout from '../user/UserLayout';
import { BsSendFill } from "react-icons/bs";

import PostInput from './Post/PostInput';

interface User {
  id: string;
  name: string;
  avatar: string;
  username: string;
}

interface Comment {
  id: string;
  user: User;
  content: string;
  timestamp: string;
}

interface Post {
  id: string;
  user: User;
  type: 'text' | 'image';
  content: string;
  imageUrl?: string;
  likes: number;
  comments: Comment[];
  shares: number;
  timestamp: string;
  bookTitle?: string;
  bookAuthor?: string;
}

const Community: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: "1",
      user: {
        id: "u1",
        name: "Sarah Parker",
        avatar: "https://plus.unsplash.com/premium_photo-1663054774427-55adfb2be76f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlfGVufDB8fDB8fHww",
        username: "bookworm_sarah"
      },
      type: "image",
      content: "My weekend reading setup! 📚✨ Currently lost in 'The Invisible Life of Addie LaRue'. The way Schwab weaves time and memory is pure magic.",
      imageUrl: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3N8ZW58MHx8MHx8fDA%3D",
      likes: 234,
      shares: 45,
      comments: [
        {
          id: "c1",
          user: {
            id: "u2",
            name: "Mike Ross",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fHww",
            username: "mike_reads"
          },
          content: "That book destroyed me! The ending was incredible.",
          timestamp: "2h ago"
        }
      ],
      timestamp: "3h ago",
      bookTitle: "The Invisible Life of Addie LaRue",
      bookAuthor: "V.E. Schwab"
    },
    {
      id: "2",
      user: {
        id: "u3",
        name: "Alex Chen",
        avatar: "https://plus.unsplash.com/premium_photo-1663054774427-55adfb2be76f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlfGVufDB8fDB8fHww",
        username: "alexreads"
      },
      type: "text",
      content: "Just finished 'Tomorrow, and Tomorrow, and Tomorrow'. Gaming, friendship, love - this book has it all. Anyone else feel like they need a support group after reading it? 🎮❤️",
      likes: 189,
      shares: 23,
      comments: [
        {
          id: "c2",
          user: {
            id: "u4",
            name: "Emily Wu",
            avatar: "https://images.unsplash.com/photo-1587614382231-d1590f0039e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXJzfGVufDB8fDB8fHww",
            username: "em_reads"
          },
          content: "YES! I'm still processing everything. That scene in the hospital... 😭",
          timestamp: "1h ago"
        }
      ],
      timestamp: "5h ago",
      bookTitle: "Tomorrow, and Tomorrow, and Tomorrow",
      bookAuthor: "Gabrielle Zevin"
    },
    {
      id: "3",
      user: {
        id: "u5",
        name: "Jordan Smith",
        avatar: "https://media.istockphoto.com/id/2012746918/photo/businessman-computer-or-programming-code-in-night-office-for-software-development.webp?a=1&b=1&s=612x612&w=0&k=20&c=BVmZ-EfCd5pD8weA38o19okhBl6ohGXlZ8aS7iIrrWA=",
        username: "jordy_books"
      },
      type: "image",
      content: "Monthly book haul! 📚 Found some amazing deals at the used bookstore. Spot any favorites?",
      imageUrl: "https://images.unsplash.com/photo-1491841573634-28140fc7ced7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGJvb2tzfGVufDB8fDB8fHww",
      likes: 456,
      shares: 67,
      comments: [],
      timestamp: "1d ago"
    }
  ]);

  const [commentInputs, setCommentInputs] = useState<{ [key: string]: string }>({});

  const handleLike = (postId: string) => {
    setPosts(posts.map(post =>
      post.id === postId
        ? { ...post, likes: post.likes + 1 }
        : post
    ));
  };

  const handleShare = (postId: string) => {
    setPosts(posts.map(post =>
      post.id === postId
        ? { ...post, shares: post.shares + 1 }
        : post
    ));
  };

  const handleComment = (postId: string) => {
    if (!commentInputs[postId]?.trim()) return;

    const newComment: Comment = {
      id: `c${Math.random()}`,
      user: {
        id: "current",
        name: "Current User",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fHww",
        username: "current_user"
      },
      content: commentInputs[postId],
      timestamp: "Just now"
    };

    setPosts(posts.map(post =>
      post.id === postId
        ? { ...post, comments: [...post.comments, newComment] }
        : post
    ));
    setCommentInputs({ ...commentInputs, [postId]: "" });
  };

  const renderPost = (post: Post) => (
    <div key={post.id} className="border rounded-lg p-6 mb-6 bg-white shadow-sm">
      {/* Post Header */}
      <div className="flex items-center mb-4">
        <img 
          src={post.user.avatar} 
          alt={post.user.name} 
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <div className="font-bold">{post.user.name}</div>
          <div className="text-gray-500 text-sm">@{post.user.username} · {post.timestamp}</div>
        </div>
      </div>

      {/* Post Content */}
      <div className="mb-4">
        <p className="mb-2">{post.content}</p>
        {post.bookTitle && (
          <div className="text-sm text-gray-600 mt-1">
            📖 {post.bookTitle} by {post.bookAuthor}
          </div>
        )}
        {post.type === "image" && (
          <img 
            src={post.imageUrl} 
            alt="Post content" 
            className="w-full h-auto rounded-lg mt-3"
          />
        )}
      </div>

      {/* Engagement Metrics */}
      <div className="flex items-center gap-6 mb-4 text-gray-600">
        <button 
          onClick={() => handleLike(post.id)}
          className="flex items-center gap-2 hover:text-blue-500"
        >
          ❤️ {post.likes}
        </button>
        <button className="flex items-center gap-2">
          💬 {post.comments.length}
        </button>
        <button 
          onClick={() => handleShare(post.id)}
          className="flex items-center gap-2"
        >
          🔄 {post.shares}
        </button>
      </div>

      {/* Comments Section */}
      <div className="space-y-3">
        {post.comments.map(comment => (
          <div key={comment.id} className="bg-gray-50 p-3 rounded-lg flex items-start">
            <img 
              src={comment.user.avatar} 
              alt={comment.user.name} 
              className="w-8 h-8 rounded-full mr-2"
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold">{comment.user.name}</span>
                <span className="text-gray-500 text-sm">@{comment.user.username}</span>
                <span className="text-gray-500 text-sm">· {comment.timestamp}</span>
              </div>
              <p className="text-gray-800">{comment.content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Comment Input */}
      <div className="mt-4 flex gap-2">
        <input
          type="text"
          value={commentInputs[post.id] || ""}
          onChange={(e) => setCommentInputs({
            ...commentInputs,
            [post.id]: e.target.value
          })}
          placeholder="Add a comment..."
          className="flex-1 p-2 border rounded-lg"
          onKeyPress={(e) => e.key === 'Enter' && handleComment(post.id)}
        />
        <button
          onClick={() => handleComment(post.id)}
          className="px-4 py-2 bg-base text-white rounded-lg hover:bg-blue-600"
        >
            
            <BsSendFill />
  
        </button>
      </div>
    </div>
  );

  return (
    <UserLayout>


    <div className="max-w-4xl mx-auto p-4">
<PostInput />
      {/* Posts Feed */}
      <div>
        {posts.map(post => renderPost(post))}
      </div>
    </div>
    </UserLayout>
  );
};

export default Community;
 