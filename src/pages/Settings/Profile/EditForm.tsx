import React from 'react'

const EditForm: React.FC = () => {
  return (
    <>
      <section className="form grid md:grid-cols-2 gap-6 pt-8">
        <div className="fullname">
            <label htmlFor="fullname" className='text-slate-700'>FullName</label>
          
            
            <input type="text" id="fullname" name="fullname"
             className='w-full border border-gray-200 p-2 rounded-md  outline-sky-500' />
        </div>


        <div className="fullname">
            <label htmlFor="fullname" className='text-slate-700'>Email</label>
          
            
            <input type="text" id="fullname" name="fullname"
             className='w-full border border-gray-200 p-2 rounded-md  outline-sky-500' />
        </div>


        <div className="fullname">
            <label htmlFor="fullname" className='text-slate-700'>Location</label>
          
            
            <input type="text" id="fullname" name="fullname"
             className='w-full border border-gray-200 p-2 rounded-md  outline-sky-500' />
        </div>


        <div className="fullname">
            <label htmlFor="fullname" className='text-slate-700'>Phone Number</label>
          
            
            <input type="text" id="fullname" name="fullname"
             className='w-full border border-gray-200 p-2 rounded-md  outline-sky-500' />
        </div>
        
      </section>


      <section className=" mt-6">
      <div className="Bio">
            <label htmlFor="Bio" className='text-slate-700'>My Bio</label>
          
          <textarea name="" id="" cols={5} rows={5}  className='w-full border border-gray-200 p-2 rounded-md  outline-sky-500'></textarea>
            
         
        </div>
 
        <section className="btn my-4 flex space-x-4">
            <button className='bg-base text-white p-3 rounded-lg'>Update Profile</button>
            <button>Reset</button>
        </section>
      </section>
    </>
  )
}

export default EditForm