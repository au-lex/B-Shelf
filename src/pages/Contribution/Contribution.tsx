import React from 'react'
import UserLayout from '../user/UserLayout'
import { LuCloudUpload } from "react-icons/lu";
const Contribution: React.FC = () => {
  return (
    <>
<UserLayout>

    <section className="bg-slate-50 max-w-5xl mx-auto p-1">

        <section className="flex space-x-6">


        <div className="right    w-[80%] rounded-lg p-2 ">


            <section className="form bg-white p-6 rounded-lg">
                
                <span className="flex justify-between">

            <h2 className='text-[20px] font-semibold text-slate-800 mb-6'>Fill up Book Details</h2>
            <span className="upload block">
                <label htmlFor="file" className=' cursor-pointer flex space-x-3'>
                    uplaod
                    <LuCloudUpload size={30} className='text-slate-800' /></label>
                <input type="file" className="hidden" id="file" />
            </span>
                </span>

                <div className="flex space-x-4">

              
                <form className=' space-y-4' >

                <input type="text" id="fullname" name="fullname" placeholder='Book Name'
             className='w-full border border-gray-200 p-2 rounded-md  outline-sky-500' />

                <input type="text" id="fullname" name="fullname" placeholder='Author Name'
             className='w-full border border-gray-200 p-2 rounded-md  outline-sky-500' />

<section className=" mt-6">
   
          
          <textarea name="" id="" cols={5} rows={5} placeholder='Reason For Your Contribution'  className='w-full border border-gray-200 p-2 rounded-md  outline-sky-500'></textarea>
            
         
 
        <section className="btn my-4 flex space-x-4">
            <button className='bg-base text-white p-3 w-full rounded-lg'>Submit</button>
         
        </section>
      </section>

                </form>

                <section className="seclect  space-y-6">
                
                <span className='block '>
                    <select name="" id="" className='bg-white p-2 rounded-[20px]  border border-gray-100 outline-sky-500'>
                        <option value="">Select Category</option>
                        <option value="">Select Category</option>
                        <option value="">Select Category</option>
                        <option value="">Select Category</option>
                        <option value="">Select Category</option>
                    </select>
                </span>



                <span className='block '>
                    <select name="" id="" className='bg-white p-2 rounded-[20px]  border border-gray-100 outline-sky-500'>
                        <option value="">Select Lang </option>
                        <option value="">Select Category</option>
                        <option value="">Select Category</option>
                        <option value="">Select Category</option>
                        <option value="">Select Category</option>
                    </select>
                </span>
                
            </section>
            </div>
            </section>

       

       
        </div>


        <div className="right bg-green-500 w-[50%] h-[10rem]">


            <section className="drop">

            </section>
        </div>
        </section>
    </section>
</UserLayout>
    </>
  )
}

export default Contribution