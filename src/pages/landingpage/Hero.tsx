import React from 'react'

const Hero: React.FC = () => {
  return (
    <>
         <div className="p-4 pt-[4rem]">
      <div className="max-w-4xl mx-auto">
        <p className="text-[#f56256] font-light text-[10px] tracking-[2px]">
        Where Every Book Finds a Friend....
        </p>
        <h1 className="text-4xl font-bold text-gray-900 mt-2">
          Transform Your Daily Life in Just{' '}
          <span className="text-[#f56256] bg-[#f56256]/10 px-3 mt-1  inline-block p-2 rounded">Moments.</span>
        </h1>
        <p className="text-gray-700 mt-4">
          Experience the ease of managing your daily tasks with our innovative solutions. 
          Simplify your routine and make time for what truly matters.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-[#f56256] text-white px-6 py-3 w-full rounded-lg font-medium hover:bg-blue-700 transition">
            Learn More
          </button>
    
        </div>
      </div>
    </div>

    <figure className="img">
        <img src="https://bookpress.themeperch.net/html/assets/images/home/hero-1.png" alt="" />
    </figure>
    </>
  )
}

export default Hero


