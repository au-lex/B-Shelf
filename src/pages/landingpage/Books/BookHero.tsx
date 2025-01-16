

import React, { useState, useEffect } from 'react';

const BookHero: React.FC = () => {

    interface Book {
        id: number;
        title: string;
        imageUrl: string;
      }



      const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

      const quotes = [
        {
          text: "There is more treasure in books than in all the pirate's loot on Treasure Island.",
          author: "Walt Disney"
        },
        {
            text: " treasure in books than in all the pirate's loot on Treasure Island.",
            author: "Walt Disney"
          },

          {
            text: "AUlex is more treasure in books than in all the pirate's loot on Treasure Island.",
            author: "Aulex Disney"
          },
      ];
    
      const books: Book[] = [
        {
          id: 1,
          title: "Holy Bible",
          imageUrl: "https://bookpress.themeperch.net/html/assets/images/index2/book-mockup1.png",
        },
        {
          id: 2,
          title: "Harry Potter",
          imageUrl: "https://bookpress.themeperch.net/html/assets/images/index2/book-mockup3.png",
        },
        {
          id: 3,
          title: "Lean UX",
          imageUrl: "https://bookpress.themeperch.net/html/assets/images/index2/book-mockup4.png",
        },
        {
          id: 4,
          title: "Don't Make Me Think",
          imageUrl: "https://bookpress.themeperch.net/html/assets/images/index2/book-mockup5.png",
        }
      ];
    
      useEffect(() => {
        const timer = setInterval(() => {
          setCurrentQuoteIndex((prevIndex) => 
            prevIndex === quotes.length - 1 ? 0 : prevIndex + 1
          );
        }, 2000);
    
        return () => clearInterval(timer);
      }, [quotes.length]);
  return (
    <>
          <div className="max-w-4xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Quote Section */}
        <div className="bg-base rounded-lg p-8 text-white relative h-[200px] flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-6">Today's Quote</h2>
          <div className="transition-opacity duration-500">
            <p className="text-lg mb-4 italic">"{quotes[currentQuoteIndex].text}"</p>
            <p className="text-sm">-{quotes[currentQuoteIndex].author}</p>
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {quotes.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${
                  currentQuoteIndex === index ? 'bg-white' : 'bg-white/50'
                }`}
                onClick={() => setCurrentQuoteIndex(index)}
                aria-label={`Quote ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* New Arrivals Section */}
        <div className="bg-white roundd-lg pxu-6 sbhadow-lg">
          <div className="fjlex items-center hidden mb-6">
            <div className="w-1 h-16 bg-red-500 mr-4"></div>
            <h2 className="text-2xl font-bold">New Arrivals</h2>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4">
            {books.map((book) => (
              <div 
                key={book.id}
                className="flex-shrink-0 w-32"
              >
                <img
                  src={book.imageUrl}
                  alt={book.title}
                  className="w-full h-48 object-cover rounded-md shadow-md hover:shadow-lg transition-shadow duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default BookHero







