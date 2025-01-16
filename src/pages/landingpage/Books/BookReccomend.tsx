
interface Book {
  id: number;
  title: string;
  author: string;
  year: string;
  imageUrl: string;
}

const BookRecommendations = () => {
  const books: Book[] = [
    {
      id: 1,
      title: "Don't Make Me Think",
      author: "Steve Krug",
      year: "2000",
      imageUrl: "https://res.cloudinary.com/dmhvsyzch/image/upload/v1737042739/Rectangle_12_5_pqzfkd.png"
    },
    {
      id: 2,
      title: "The Design of Everyday Things",
      author: "Don Norman",
      year: "1988",
      imageUrl: "https://res.cloudinary.com/dmhvsyzch/image/upload/v1737042750/Rectangle_12_mu1wsx.png"
    },
    {
      id: 3,
      title: "Sprint: How to Solve Problems",
      author: "Jake Knapp",
      year: "2000",
      imageUrl: "https://res.cloudinary.com/dmhvsyzch/image/upload/v1737042748/Rectangle_12_1_xdz8oa.png"
    },
    {
      id: 4,
      title: "Lean UX: Design Great Products",
      author: "Jeff Gothelf",
      year: "2016",
      imageUrl: "https://res.cloudinary.com/dmhvsyzch/image/upload/v1737042746/Rectangle_12_2_lyroux.png"
    },
    {
      id: 5,
      title: "The Road to React",
      author: "Robin Wieruch",
      year: "2020",
      imageUrl: "https://res.cloudinary.com/dmhvsyzch/image/upload/v1737042740/Rectangle_12_4_valwav.png"
    },
    {
      id: 6,
      title: "Rich Dad Poor Dad",
      author: "Robert T. Kiyosaki",
      year: "1997",
      imageUrl: "https://res.cloudinary.com/dmhvsyzch/image/upload/v1737042742/Rectangle_12_3_nqfnts.png"
    },
    
  ];

  return (
    <div className="lg:max-w-4xl mx-auto px-4 py-8 bg-gray-100 ">
      <div className="flex justify-between items-center mb-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-gray-800">Good Morning</h1>
          <h2 className="text-lg text-gray-600">Recommended for You</h2>
        </div>
        <button className="text-gray-500 hover:text-gray-700">
          Show All
        </button>
      </div>

      <div className="overflow-x-auto pb-6">
        <div className="flex gap-6 min-w-max">
          {books.map((book) => (
            <div 
              key={book.id} 
              className="flex flex-col w-44 justify-center p-2 bg-white group  rounded-lg cursor-pointer "
            >
              <div className="mb-3 transition-transform duration-300 group-hover:-translate-y-2">
                <img
                  src={book.imageUrl}
                  alt={book.title}
                  className="w-[10rem] h-[14rem] object-cover rounded-lg shadow-md group-hover:shadow-xl transition-shadow duration-300"
                />
              </div>
              <h3 className="font-medium text-sm text-gray-900 line-clamp-2">
                {book.title}
              </h3>
              <div className="flex items-center text-xs text-gray-500 mt-1">
                <span>{book.author},</span>
                <span className="ml-1">{book.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookRecommendations;