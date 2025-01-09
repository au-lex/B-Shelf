    import { Calendar, MessageCircle, User } from 'lucide-react';

import React from 'react'

const Blog: React.FC = () => {
    interface BlogPost {
        id: number;
        title: string;
        image: string;
        author: string;
        date: string;
        comments: number;
        category: string;
        description: string;
      }

    const blogPosts = [
        {
          id: 1,
          title: "Connecting Reader Books of January Releases",
          image: "https://bookpress.themeperch.net/html/assets/images/blog/post-thumbnail-3.png",
          author: "Admin",
          date: "April 26, 2022",
          comments: 10,
          category: "Uncategorized",
          description: "Discover the most anticipated books of January 2022! From gripping thrillers to heartwarming romance, we've curated the best new releases to kickstart your reading year."
        },
        {
          id: 2,
          title: "Best Fiction Books for Summer Reading",
          image: "https://bookpress.themeperch.net/html/assets/images/blog/post-thumbnail-2.png",
          author: "Admin",
          date: "April 28, 2022",
          comments: 15,
          category: "Fiction",
          description: "Summer is the perfect time to dive into new worlds. Check out our carefully selected fiction recommendations that will transport you to amazing adventures."
        },
        {
          id: 3,
          title: "Must-Read Non-Fiction Books of 2022",
          image: "https://bookpress.themeperch.net/html/assets/images/blog/post-thumbnail-1.png",
          author: "Admin",
          date: "April 30, 2022",
          comments: 8,
          category: "Non-Fiction",
          description: "Expand your knowledge with these thought-provoking non-fiction releases. From science to history, these books offer fascinating insights into our world."
        },
    
        
      ];



      const BlogPostCard: React.FC<{ post: BlogPost }> = ({ post }) => {
        return (
          <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
            {/* Image Container */}
            <div className="relative h-48 sm:h-64 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
      
            {/* Content Container */}
            <div className="p-4 sm:p-6">
              {/* Meta Information */}
              <div className="flex flex-wrap gap-2 sm:gap-4 text-sm text-gray-600 mb-3">
                <div className="flex items-center gap-1">
                  <User size={16} />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle size={16} />
                  <span>{post.comments} Comments</span>
                </div>
                <span className="text-base">{post.category}</span>
              </div>
      
              {/* Title */}
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                {post.title}
              </h2>
      
              {/* Description */}
              <p className="text-gray-600 mb-4 text-sm ">
                {post.description}
              </p>
      
              {/* Read More Button */}
              <button className="bg-base text-white px-4 sm:px-6 py-2 rounded-md hover:bg-base/20 transition-colors duration-300 text-sm ">
                Read More
              </button>
            </div>
          </div>
        );
      };
      return (
        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12">Latest Blog Posts</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map(post => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>
      );
  
}

export default Blog









