import React from 'react'
import Header from '../../pages/landingpage/Header'
import Footer from '../../pages/landingpage/Footer'

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <>
    <Header />
      {children}
      <Footer/>
    </>
  )
}

export default Layout