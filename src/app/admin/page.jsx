'use client'
import LoadingPage from '@/component/loading'
import LogoutButton from '@/component/logout'
import { SignOutButton, UserButton, UserProfile } from '@clerk/clerk-react'
import { useUser } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  const {user}=useUser()
  
  if (!user) return <LoadingPage/>
  return (
    
    <div>
      <UserButton/>
      <LogoutButton/>
        <h2>Admin user {user?.fullName}</h2>
      
    </div>
  )
}

export default page
