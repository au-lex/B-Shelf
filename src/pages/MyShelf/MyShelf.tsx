import React, { useState, useMemo } from 'react';
import UserLayout from '../user/UserLayout';

interface Book {
  id: string;
  title: string;
  author: string;
  year: number;
  rating: number;
  coverUrl: string;
  borrowedOn: string;
  submissionDue: string;
  type: 'Borrowed' | 'E-BOOK';
  isOverdue?: boolean;
  isFavorite?: boolean;
  isArticle?: boolean;
  hasAudio?: boolean;
}

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => (
  <div className="bg-white rounded-lg shadow-md p-4 flex flex-col gap-3">
    <div className="flex gap-4">
      <img
        src={book.coverUrl}
        alt={book.title}
        className="w-24 h-32 object-cover rounded"
      />
      <div className="flex flex-col flex-1">
        <div className="text-xs text-gray-600">
          Borrowed on
          <div>{book.borrowedOn}</div>
        </div>
        <div className="mt-2 text-xs text-gray-600">
          Submission Due
          <div className={`${book.isOverdue ? 'text-red-500' : ''}`}>
            {book.submissionDue}
            {book.isOverdue && '(Over Due)'}
          </div>
        </div>
        <div className={`mt-2 px-3 py-1 text-sm text-white rounded w-fit
          ${book.type === 'E-BOOK' ? 'bg-green-500' : 'bg-gray-500'}`}>
          {book.type}
        </div>
      </div>
    </div>

    <div className="flex flex-col gap-1">
      <h3 className="font-medium">{book.title}</h3>
      <div className="text-sm text-gray-600">
        {book.author}, {book.year}
      </div>
      <div className="text-sm text-gray-600">
        {book.rating}/5
      </div>
    </div>

    <div className="flex gap-2 border-2 border-base ">
      <button className={`flex-1 py-2 px-4 rounded  text-sm
        ${book.type === 'E-BOOK'
          ? 'text-base '
          : 'text-base font-bold'}`}>
        {book.type === 'E-BOOK' ? 'Read' : 'Return'}
      </button>
      {book.hasAudio && (
        <button className="p-2 rounded hover:bg-gray-50 ">
          <HeadphonesIcon className="w-5 h-5 text-gray-400" />
        </button>
      )}
    </div>
  </div>
);

const HeadphonesIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
  </svg>
);

const MyShelf: React.FC = () => {
  const categories = [
    'All Books',
    'Favourite',
    'Borrowed Books',
    'E-Books',
    'Audio Books',
    'Articles & Journals'
  ];

  const [activeCategory, setActiveCategory] = useState('All Books');

  const books: Book[] = [
    {
      id: '1',
      title: "Don't Make Me Think",
      author: 'Steve Krug',
      year: 2000,
      rating: 4.5,
      coverUrl: 'https://res.cloudinary.com/dmhvsyzch/image/upload/v1737042740/Rectangle_12_4_valwav.png',
      borrowedOn: '11 Mar 2023 09:00 AM',
      submissionDue: '14 Mar 2023',
      type: 'Borrowed',
      isFavorite: true,
      isOverdue: true
    },
    {
      id: '2',
      title: 'Rich Dad Poor Dad',
      author: 'Robert T. Kiyosaki',
      year: 1997,
      rating: 5,
      coverUrl: 'https://res.cloudinary.com/dmhvsyzch/image/upload/v1737042746/Rectangle_12_2_lyroux.png',
      borrowedOn: '11 Mar 2023 09:00 AM',
      submissionDue: '14 Mar 2023',
      type: 'E-BOOK',
      hasAudio: true
    },
    {
      id: '3',
      title: 'The Psychology of Money',
      author: 'Morgan Housel',
      year: 2020,
      rating: 4.8,
      coverUrl: 'https://res.cloudinary.com/dmhvsyzch/image/upload/v1737042738/Rectangle_12_6_whchf6.png',
      borrowedOn: '15 Mar 2023 02:30 PM',
      submissionDue: '22 Mar 2023',
      type: 'E-BOOK',
      isFavorite: true
    },
    {
      id: '4',
      title: 'Latest Research in AI',
      author: 'Various Authors',
      year: 2024,
      rating: 4.2,
      coverUrl: 'https://res.cloudinary.com/dmhvsyzch/image/upload/v1737042748/Rectangle_12_1_xdz8oa.png',
      borrowedOn: '18 Mar 2023 10:15 AM',
      submissionDue: '25 Mar 2023',
      type: 'E-BOOK',
      isArticle: true
    }
  ];

  const filteredBooks = useMemo(() => {
    switch (activeCategory) {
      case 'Favourite':
        return books.filter(book => book.isFavorite);
      case 'Borrowed Books':
        return books.filter(book => book.type === 'Borrowed');
      case 'E-Books':
        return books.filter(book => book.type === 'E-BOOK' && !book.isArticle);
      case 'Audio Books':
        return books.filter(book => book.hasAudio);
      case 'Articles & Journals':
        return books.filter(book => book.isArticle);
      default:
        return books;
    }
  }, [activeCategory]);

  return (
    <UserLayout>
      <div className="max-w-5xl mx-auto p-6">
        <header className="mb-8">
          <h1 className="text-2xl font-semibold mb-6">
            Your <span className="text-orange-500">Shelf</span>
          </h1>
          <nav className="flex gap-8 border-b overflow-x-auto">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`pb-4 px-1 text-sm whitespace-nowrap ${activeCategory === category
                    ? 'border-b-2 border-orange-500 text-orange-500'
                    : 'text-gray-500 hover:text-gray-700'
                  }`}
              >
                {category}
              </button>
            ))}
          </nav>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredBooks.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </UserLayout>
  );
};

export default MyShelf;