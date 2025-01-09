import React, {useState, useEffect} from 'react'

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


<div className="spinner">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
       </div>
    </>
  )
}

export default Loader