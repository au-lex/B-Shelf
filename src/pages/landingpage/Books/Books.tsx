import React from 'react'
import { BookOpen, User, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Books: React.FC = () => {

    interface Book {
        id: number;
        title: string;
        author: string;
        image: string;
        rating: number;
        description: string;
        genre: string;
        price: string;
      }
    const books = [
        {
          id: 1,
          title: "The Midnight Library",
          author: "Matt Haig",
          image: "https://bookpress.themeperch.net/html/assets/images/index2/book-mockup1.png",
          rating: 4.5,
          description: "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived.",
          genre: "Fiction",
          price: "$18.99"
        },
        {
          id: 2,
          title: "Atomic Habits",
          author: "James Clear",
          image: "https://bookpress.themeperch.net/html/assets/images/index2/book-mockup3.png",
          rating: 4.8,
          description: "A revolutionary guide to building good habits and breaking bad ones, offering practical strategies for lasting change in your life.",
          genre: "Self-Help",
          price: "$24.99"
        },
        {
          id: 3,
          title: "Project Hail Mary",
          author: "Andy Weir",
          image: "https://bookpress.themeperch.net/html/assets/images/index2/book-mockup4.png",
          rating: 4.7,
          description: "A lone astronaut must save the earth from disaster in this masterful science fiction adventure from the author of The Martian.",
          genre: "Science Fiction",
          price: "$22.99"
        },
        {
          id: 4,
          title: "The Lincoln Highway",
          author: "Amor Towles",
          image: "https://bookpress.themeperch.net/html/assets/images/index2/book-mockup5.png",
          rating: 4.6,
          description: "A captivating novel about three young men on a journey through 1950s America, filled with adventure and self-discovery.",
          genre: "Historical Fiction",
          price: "$19.99"
        },
        {
          id: 5,
          title: "The Silent Patient",
          author: "Alex Michaelides",
          image: "https://bookpress.themeperch.net/html/assets/images/index2/book-mockup7.png",
          rating: 4.4,
          description: "A psychological thriller about a woman's act of violence against her husband, and the therapist obsessed with uncovering her motive.",
          genre: "Thriller",
          price: "$16.99"
        },
        {
          id: 6,
          title: "Cloud Cuckoo Land",
          author: "Anthony Doerr",
          image: "https://bookpress.themeperch.net/html/assets/images/index2/book-mockup9.png",
          rating: 4.5,
          description: "An ambitious novel about children on the cusp of adulthood, searching for hope in a broken world across different time periods.",
          genre: "Literary Fiction",
          price: "$21.99"
        }
      ];



      const BookCard: React.FC<{ book: Book }> = ({ book }) => {
        return (
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col">
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-base">
                {book.genre}
              </div>
            </div>
      
            {/* Content Container */}
            <div className="p-6 flex-1 flex flex-col">
              {/* Title and Author */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">{book.title}</h3>
              <div className="flex items-center gap-2 mb-2">
                <User size={16} className="text-gray-600" />
                <span className="text-gray-600">{book.author}</span>
              </div>
      
              {/* Rating */}
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < Math.floor(book.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                  />
                ))}
                <span className="text-gray-600 text-sm ml-2">{book.rating}</span>
              </div>
      
              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 flex-1">
                {book.description}
              </p>
      
              {/* Price and Actions */}
              <div className="mt-auto">
                <div className="flex items-center justify-between mb-3 hidden">
                  <span className="text-xl font-bold text-gray-900">{book.price}</span>
                  <span className="text-sm text-green-600">In Stock</span>
                </div>
      
                <div className="flex gap-2">
                  <button className="flex-1 bg-base text-white px-4 py-2 rounded-lg hover:bg-base/30 transition-colors flex items-center justify-center gap-2">
                    <BookOpen size={18} />
                    Read Now
                  </button>
                  <Link to = "/books-preview" className="px-4 py-2 rounded-lg block border-2 border-base text-base hover:bg-blue-50 transition-colors">
                    Preview
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      };
  return (
    <>

    <section className="py-12 px-4 b0">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Featured Books</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated collection of bestselling books across various genres.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </section>
 
    </>
  )
}

export default Books









