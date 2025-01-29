import React from 'react'
import { LuBookOpenCheck } from "react-icons/lu";
import { PiHandCoinsDuotone } from "react-icons/pi";
import EditForm from './EditForm';
const Profile: React.FC = () => {
  return (
    <>
<section className="profSec grid lg:grid-cols-2 lg:w-[60%] ">

    <figure className="p">

    <h5 className='text-[13px] font-medium text-slate-700 my-3'>Your profile pic</h5>
    <div className="profile">
            <img src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"  className='w-20 h-20 rounded-full object-cover'  alt="profile" />
          </div>
          <h5 className='text-[13px] font-medium text-slate-700 my-3  underline'>upload New pic</h5>
    </figure>

    <section className="stat flex  justify-between lg:space-x-5">

        <div className="readings bg-base w-36 h-28 flex justify-center items-center rounded">
            <section>

            
            <span className="flex space-x-5 mb-2">

            <span className="bg-white flex justify-center items-center h-8 w-8 mt-2  rounded-sm pp-2">

            <LuBookOpenCheck  size={20}/>
            </span>
            <p className='text-[20px] text-white pt-2'>120</p>
            </span>
            <h3 className='text-white text-[20px]'>Readings</h3>
            </section>
        </div>



        <div className="readings bg-purple-800 w-36 h-28 p-2 flex justify-center items-center rounded">
            <section>

            
            <span className="flex space-x-5 mb-2">

            <span className="bg-white flex justify-center items-center h-8 w-8 mt-2  rounded-sm pp-2">

            <PiHandCoinsDuotone  size={20}/>
            </span>
            <p className='text-[20px] text-white pt-2'>50</p>
            </span>
            <h3 className='text-white text-[20px]'>Contribution</h3>
            </section>
        </div>
    </section>

</section>

<EditForm />
    </>
  )
}

export default Profile