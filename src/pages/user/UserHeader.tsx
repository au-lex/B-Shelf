import React from 'react'
import { NavLink } from 'react-router-dom'

const UserHeader: React.FC = () => {
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

          <div className="profile">
            <img src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"  className='w-8 h-8 rounded-full object-cover'  alt="profile" />
          </div>
    
    </section>  
    </>
  )
}

export default UserHeader