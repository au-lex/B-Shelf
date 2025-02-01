import React, { useState, useRef, useEffect } from 'react';
import UserLayout from '../user/UserLayout';
import Profile from './Profile/Profile';
import { LoginSecurity } from './LoginSetting/LoginSetting';
import { NotificationSettings } from './Notification/Notification';
import PrivacySettings from './Privacy/Privacy';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Settings: React.FC = () => {
    interface tab {
        content: string;
    }

    const tabs: tab[] = [
        { content: "accounting setting" },
        { content: "Login & Security" },
        { content: "Notification" },
        { content: "Privacy" },
    ];

    const [activeTAb, SetactiveTab] = useState(0);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(false);
    const tabsRef = useRef<HTMLDivElement>(null);

    const handleClickTab = (index: number) => {
        SetactiveTab(index);
    };

    const checkScroll = () => {
        const el = tabsRef.current;
        if (el) {
            const hasHorizontalScroll = el.scrollWidth > el.clientWidth;
            setShowLeftArrow(hasHorizontalScroll && el.scrollLeft > 0);
            setShowRightArrow(hasHorizontalScroll && el.scrollLeft < (el.scrollWidth - el.clientWidth));
        }
    };

    useEffect(() => {
        checkScroll();
        window.addEventListener('resize', checkScroll);
        return () => window.removeEventListener('resize', checkScroll);
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        const el = tabsRef.current;
        if (el) {
            const scrollAmount = 200;
            el.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const handleScroll = () => {
        checkScroll();
    };

    return (
        <UserLayout>
            <section className="bg-slate-50 max-w-5xl mx-auto p-4">
                <div className="bg-white rounded-xl p-4">
                    <div className="relative">
                        {showLeftArrow && (
                            <button 
                                onClick={() => scroll('left')}
                                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-1 lg:hidden z-10"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                        )}
                        
                        {showRightArrow && (
                            <button 
                                onClick={() => scroll('right')}
                                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-1 lg:hidden z-10"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        )}
                        
                        <section 
                            ref={tabsRef}
                            onScroll={handleScroll}
                            className="flex space-x-4 lg:space-x-12 mb-8 lg:overflow-hidden overflow-x-scroll whitespace-nowrap scrollbar-hide px-6 lg:px-0"
                        >
                            {tabs.map((tab, index) => (
                                <div
                                    className={`cursor-pointer ${
                                        activeTAb === index
                                            ? "text-base border-b-2 border-base font-bold"
                                            : "border-b-2 text-slate-700"
                                    } capitalize`}
                                    key={index}
                                    onClick={() => handleClickTab(index)}
                                >
                                    <span>{tab.content}</span>
                                </div>
                            ))}
                        </section>
                    </div>

                    {activeTAb === 0 && <Profile />}
                    {activeTAb === 1 && <LoginSecurity />}
                    {activeTAb === 2 && <NotificationSettings />}
                    {activeTAb === 3 && <PrivacySettings />}
                </div>
            </section>
        </UserLayout>
    );
};

export default Settings;