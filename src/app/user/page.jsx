'use client'

import LoadingPage from '@/component/loading'
import LogoutButton from '@/component/logout'
import { useUser } from '@clerk/nextjs'
import React from 'react'

const Page = () => {
  const { user, isSignedIn } = useUser()

  


  return (
    <div>
      <LogoutButton/>
      <h2>Authenticated User Page</h2>
      <p>Welcome, {user?.fullName || 'User'}!</p>
      {/* You can display more user information here */}
    </div>
  )
}

export default Page
