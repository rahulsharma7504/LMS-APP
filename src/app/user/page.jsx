'use client'

import LoadingPage from '@/component/loading'
import LogoutButton from '@/component/logout'
import { useUser } from '@clerk/nextjs'
import React from 'react'

const Page = () => {
  const { user, isSignedIn } = useUser()

  


  return (
    <>
      <LogoutButton/>
      <h2>Authenticated User Page</h2>
      <p>Welcome, {user?.fullName || 'User'}!</p>
    </>
  )
}

export default Page
