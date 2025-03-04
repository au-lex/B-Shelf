import React from 'react'

const Hero: React.FC = () => {
  return (
    <>
         <div className="p-4 pt-[6rem] lg:flex lg:px-[5rem] z-30 relative lg:pt-[14rem] ">
      <div className="max-w-4xl mx-auto">
        <p className="text-[#f56256] font-light text-[10px] tracking-[2px]">
        Where Every Book Finds a Friend....
        </p>
        <h1 className="text-4xl font-bold text-slate-700 mt-2">
          Transform Your Daily Life in Just{' '}
          <span className="text-[#f56256] bg-[#f56256]/10 px-3 mt-1  inline-block p-2 rounded">Moments.</span>
        </h1>
        <p className="text-gray-700 mt-4 text-balance">
        <span className="s">Bie-Shelf</span> ...community of book lovers. Buy new treasures, borrow from fellow readers, or share your favorite reads with others. Build your collection & connect with fellow book lovers - all in one place.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <button className="bg-[#f56256] text-white px-6 py-3 rounded-lg font-medium hover:bg-rose-600 transition-colors">
         Explore Now
        </button>
        <button className="border-2 border-[#f56256] text-rose-500 px-6 hidden py-3 rounded-lg font-medium hover:bg-rose-50 transition-colors">
          Browse Books
        </button>
      </div>
     
      </div>

      <figure className="img">
        <img src="https://bookpress.themeperch.net/html/assets/images/home/hero-1.png" alt="" />
    </figure>
    </div>


    <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, index) => (
          <div
            key={index}
            className="absolute z-20 rounded-full border border-base opacity-60 animate-flow-up"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>
  
    </>
  )
}

export default Hero


