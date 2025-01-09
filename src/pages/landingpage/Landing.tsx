import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Footer from './Footer'
import Grow from './Grow'
import Blog from './Blog/Blog'
import Books from './Books/Books'

const Landing: React.FC = () => {
  return (
    <div className='bg-[#f56256f]/5'>
      <Header />
      <Hero/>
      <Grow/>
      <Books/>
      <Blog/>
      <Footer />
    </div>
  )
}

export default Landing