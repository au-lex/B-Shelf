



import React from 'react'
import UserHeader from './UserHeader'
import Sidebar from './UserSideBar'

interface UserLayoutProps {
  children: React.ReactNode;
}

const UserLayout: React.FC<UserLayoutProps> = ({children}) => {
  return (
    <>
       <div className="min-h-screen flex flex-col bg-[#F6FCEB]">
      
      <UserHeader />
       <div className="flex flex-1 relative">
        {/* Sidebar wrapper -  */}
         <div className="hiddn md:block">
           <Sidebar />
        </div>
                {/* Main content area - */}
        <main className="flex-1 w-full  pb-20 md:pb-8 md:px-8 md:ml-[20rem] mt-4 md:mt-8">
         {children}
       </main>
     </div>
    </div>
    </>
  )
}

export default UserLayout
