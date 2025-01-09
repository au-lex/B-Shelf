import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'

const Loader: React.FC = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
            window.scrollTo(0, 0);
        }, 3000)
        return () => clearTimeout(timer)

    },[])
  return (
    <>
       <div className={`flex items-center  justify-center fixed inset-0 bg-white z-50 ${loading ? 'block' : 'hidden'}`}>

<section className="d">


<div className="spinner">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>

<div className="hidden">
            <NavLink to="/" className="b block">
              <img src="https://res.cloudinary.com/dmhvsyzch/image/upload/v1736312874/image_prev_ui_2_d4zqol.png"
               alt="logo" className='w-[u100px] h-[90px] object-cover' />
            </NavLink>
          </div>
  
      </section>
       </div>
    </>
  )
}

export default Loader