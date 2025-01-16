import React from 'react'
import UserLayout from './UserLayout'
import BookHero from '../landingpage/Books/BookHero'
import BookRecommendations from '../landingpage/Books/BookReccomend'
import RecentReadings from '../landingpage/Books/RecentReadings'

const UserDashboard: React.FC = () => {
  return (
    <>
      <UserLayout>
  <BookHero />
  <BookRecommendations />
  <RecentReadings />
      </UserLayout>
    </>
  )
}

export default UserDashboard