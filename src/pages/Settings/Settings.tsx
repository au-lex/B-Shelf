import React, { useState } from 'react'
import UserLayout from '../user/UserLayout'
import Profile from './Profile/Profile';

const Settings: React.FC = () => {

    interface tab {
        content: string;
    }

    const tabs: tab[] = [
        { content: "accounting setting" },
        { content: "Login & Security" },
        { content: "Notification" },
        { content: "Privacy" },
    ]

    const [activeTAb, SetactiveTab] = useState(0)

    const handleClickTab =(index: number) => {
        SetactiveTab(index)

    }

  return (
 
    <UserLayout>

<section className="bg-slate-50 max-w-5xl mx-auto p-4 ">
    <div className="bg-white rounded-xl p-4">


    <section className="flex space-x-12 mb-8 lg:overflow-hidden overflow-x-scroll whitespace-nowrap">
    {tabs.map((tab, index) => (
        <div className={ ` cursor-pointer ${activeTAb === index ? "text-base border-b-2 border-base font-bold": " border-b-2 text-slate-700"} capitalize `} key={index}  onClick={()=> handleClickTab(index)} >
            <span>{tab.content}</span>
        </div>
    ))}




  
      </section>
{activeTAb === 0 && <Profile />}
{activeTAb === 1 && <p >Login</p>}
{activeTAb === 2 && <p >Nortification</p>}
{activeTAb === 3 && <p >Privacy</p>}
</div>
</section>
    </UserLayout>

  )
}

export default Settings