



import { LiaBookReaderSolid } from "react-icons/lia";


interface Book {
  id: number;
  title: string;
  author: string;
  year: string;
  imageUrl: string;
}

const RecentReadings = () => {
  const books: Book[] = [
    {
      id: 1,
      title: "Don't Make Me Think",
      author: "Steve Krug",
      year: "2000",
      imageUrl: "https://bookpress.themeperch.net/html/assets/images/index2/book-mockup1.png"
    },
    {
      id: 2,
      title: "The Design of Everyday Things",
      author: "Don Norman",
      year: "1988",
      imageUrl: "https://bookpress.themeperch.net/html/assets/images/index2/book-mockup3.png"
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
    <div className="lg:max-w-4xl mx-auto px-4 bg-slate-50 pt-2 bg-gray100 rounded-lg ">
      <div className="flex justify-between items-center mb-6">
        <div className="space-y-2">
         
          <h2 className="lg:text-lg text-md text-gray-600 ">Recent Readings</h2>
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
              className="flex flex-col w-44 justify-center p-2 bg-white group border rounded-lg cursor-pointer "
            >
              <div className="mb-3 transition-transform duration-300 group-hover:-translate-y-2">
                <img
                  src={book.imageUrl}
                  alt={book.title}
                  className="w-[10rem] h-[10rem] object-cover rounded-lg shadow-md group-hover:shadow-xl transition-shadow duration-300"
                />
              </div>
              <h3 className="font-medium text-[12px] text-gray-900 line-clamp-2">
                {book.title.substring(0,20)}...
              </h3>
              <div className="flex items-center text-xs text-gray-500 mt-1">
                <span>{book.author},</span>
                <span className="ml-1">{book.year}</span>
              </div>
              <span className="flex mt-2 ">
                <button className="bg-base w-full text-white rounded-md p-1 flex   justify-center">Resume
                  <LiaBookReaderSolid  className="text-[1.3rem] mx-1 pt-1"/></button>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentReadings;