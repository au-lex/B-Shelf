import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IoNotificationsOutline } from "react-icons/io5";
import { RiChatSmile3Line } from "react-icons/ri";
const UserHeader: React.FC = () => {


  const [currentTime, setCurrentTime] = useState('09:00 AM');
  const [currentDate, setCurrentDate] = useState('4-MAR-2023');


  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      
      // Format time as HH:00 AM/PM
      const hours = now.getHours();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const formattedHours = hours % 12 || 12;
      const timeString = `${formattedHours.toString().padStart(2, '0')}:00 ${ampm}`;
      
      // Format date as D-MMM-YYYY
      const day = now.getDate();
      const month = now.toLocaleString('en-US', { month: 'short' }).toUpperCase();
      const year = now.getFullYear();
      const dateString = `${day}-${month}-${year}`;
      
      setCurrentTime(timeString);
      setCurrentDate(dateString);
    }, 60000);

    return () => clearInterval(timer);
  }, []);


  return (
    <>
<section className="g px-4 bg-white/50 border flex justify-between h-[3rem] items-center">
       {/* Logo */}
       <div className="">
            <NavLink to="/" className="b block">
              <img src="https://res.cloudinary.com/dmhvsyzch/image/upload/v1736312874/image_prev_ui_2_d4zqol.png"
               alt="logo" className='w-[100px] h-[50px] object-cover' />
            </NavLink>
          </div>

          <div className=" rounded-lg border flex space-x-2 p-2">
        <div className="text-[12px] text-gray-700 text-center">{currentTime}</div>
        <div className="text-[12px] text-gray-500 text-center ">{currentDate}</div>
      </div>

          <div className="profile">
            <img src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"  className='w-8 h-8 rounded-full object-cover'  alt="profile" />
          </div>



    
    </section>  
    <section className="px-4 pt-4 space-x-4  flex">


    <input
        type="text"
        placeholder="Search..."
      
        className="px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full text-sm"
      />

      <section className="flex space-x-3 pt-2">
        <span className="block">

  <IoNotificationsOutline  className='text-[1.4rem] text-slate-600 '/>
        </span>

        <span className="blcok">

  <RiChatSmile3Line   className='text-[1.4rem] text-slate-600'/>
        </span>
      </section>
    </section>
    </>
  )
}

export default UserHeader