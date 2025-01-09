import React, { useState } from 'react';
import { BookOpen, User, Star, Heart, Share2, Download, ChevronLeft } from 'lucide-react';
import { Book, Tab, TabId, Review } from './types';
import Layout from '../../../components/layout/Layout';
import BackButton from '../../../components/Backbtn';

const BookPreview: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<TabId>('preview');

  // Static book data for demonstration
  const book: Book = {
    id: 1,
    title: "The Midnight Library",
    author: "Matt Haig",
    image: "https://bookpress.themeperch.net/html/assets/images/index2/book-mockup1.png",
    rating: 4.5,
    description: "Between life and death there is a library...",
    genre: "Fiction",
    price: "$18.99",
    publishDate: "2020",
    publisher: "Viking",
    pages: 304,
    language: "English",
    isbn: "978-0525559474",
    preview: `Chapter 1: The Library\n\n

Mrs. Elm made her first move. A knight hopping over the pawns. This was exactly the kind of thing that would have intimidated Nora as a child, but she had grown to love the game, even if she found it difficult to win against her former school librarian.

"Every move you make is a new possibility," Mrs. Elm had told her all those years ago. The words had stayed with Nora, though at the time, they seemed to belong to the world of chess alone.

Now, as Nora sat at the small wooden table under the glow of a flickering lamp, the room around her felt both vast and intimate. The library stretched infinitely in all directions, shelves upon shelves of books, each with its own title written in gold ink. The faint smell of aged paper and polished wood lingered in the air.

Nora hesitated before moving her pawn forward. She glanced up at Mrs. Elm, whose kind but discerning eyes seemed to see right through her uncertainty.

"What's the point of all these books if I don't know which one to choose?" Nora finally asked, gesturing to the endless shelves.`,
    reviews: [
      { user: "Sarah J.", rating: 5, comment: "Beautiful story...", date: "2024-01-05" },
      { user: "Michael R.", rating: 4, comment: "Engaging narrative...", date: "2024-01-03" }
    ]
  };

  const tabs: Tab[] = [
    { id: 'preview', label: 'Preview' },
    { id: 'details', label: 'Details' },
    { id: 'reviews', label: 'Reviews' }
  ];

  const RatingStars: React.FC<{ rating: number; size?: number }> = ({ rating, size = 18 }) => (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={size}
          className={i < Math.floor(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
        />
      ))}
      <span className="text-gray-600 ml-2">{rating} rating</span>
    </div>
  );

  const BookDetails: React.FC<{ book: Book }> = ({ book }) => {
    const details = [
      { label: "Publisher", value: book.publisher },
      { label: "Publish Date", value: book.publishDate },
      { label: "Pages", value: book.pages.toString() },
      { label: "Language", value: book.language },
      { label: "ISBN", value: book.isbn },
      { label: "Genre", value: book.genre }
    ];
    return (
      <div className="grid grid-cols-2 gap-4">
        {details.map((detail, index) => (
          <div key={index}>
            <h3 className="font-medium text-gray-900">{detail.label}</h3>
            <p className="text-gray-600">{detail.value}</p>
          </div>
        ))}
      </div>
    );
  };

  const Reviews: React.FC<{ reviews: Review[] }> = ({ reviews }) => (
    <div className="space-y-6">
      {reviews.map((review, index) => (
        <div key={index} className="border-b pb-6 last:border-b-0">
          <div className="flex items-center justify-between mb-2">
            <span className="font-medium text-gray-900">{review.user}</span>
            <span className="text-sm text-gray-600">{review.date}</span>
          </div>
          <RatingStars rating={review.rating} size={16} />
          <p className="text-gray-600 mt-2">{review.comment}</p>
        </div>
      ))}
    </div>
  );

  const renderTabContent = () => {
    switch (currentTab) {
      case 'preview':
        return (
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">{book.description}</p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-800 whitespace-pre-line">{book.preview}</p>
            </div>
          </div>
        );
      case 'details':
        return <BookDetails book={book} />;
      case 'reviews':
        return <Reviews reviews={book.reviews} />;
      default:
        return null;
    }
  };

  return (
    
<Layout>



    <div className="min-h-screen bg-gray-50 py-8  pt-[6rem]">
      <div className="max-w-6xl mx-auto bg-white lg:rounded-xl lg:shadow-lg overflow-hidden">
        <div className="border-b p-4 flex justify-between items-center">
          <BackButton />

          <div className="flex gap-4">
            <button className="p-2 hover:text-blue-600">
              <Share2 size={20} />
            </button>
            <button className="p-2 hover:text-red-600">
              <Heart size={20} />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6">
          <div className="md:col-span-1">
            <div className="sticky top-6">
              <img src={book.image} alt={book.title} className="w-full rounded-lg shadow-md" />
              <div className="mt-6 space-y-4">
                <button className="w-full bg-base text-white px-6 py-3 rounded-lg hover:bg-base/30 transition-colors flex items-center justify-center gap-2">
                  <BookOpen size={20} />
                  Read Now
                </button>
                <button className="w-full border-2 border-base text-base px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
                  <Download size={20} />
                  Download Sample
                </button>
              </div>
            </div>
          </div>
          <div className="md:col-span-2">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{book.title}</h1>
            <div className="flex items-center gap-2 mb-4">
              <User size={18} className="text-gray-600" />
              <span className="text-gray-600">{book.author}</span>
            </div>
            <RatingStars rating={book.rating} />
            <div className="border-b mb-6 mt-6">
              <div className="flex gap-8">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    className={`pb-4 px-2 ${
                      currentTab === tab.id
                        ? 'border-b-2 border-base text-base font-medium'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                    onClick={() => setCurrentTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>

    </Layout>
  );
};

export default BookPreview;
