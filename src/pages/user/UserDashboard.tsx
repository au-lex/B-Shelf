import React from 'react'
import UserLayout from './UserLayout'
import BookHero from '../landingpage/Books/BookHero'
import BookRecommendations from '../landingpage/Books/BookReccomend'

const UserDashboard: React.FC = () => {
  return (
    <>
      <UserLayout>
  <BookHero />
  <BookRecommendations />
      </UserLayout>
    </>
  )
}

export default UserDashboard