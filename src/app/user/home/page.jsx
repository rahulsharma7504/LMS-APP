'use client'
import LogoutButton from '@/component/logout'
import { useClerk, useUser } from '@clerk/nextjs'
import React from 'react'
const page = () => {
  const {openSignIn} = useClerk()
    const { user } = useUser()
   
  return (
    <div>
        <h1>Home Page</h1>
        <p>Welcome to the user <b>{user?.fullName}</b>!</p>
        <LogoutButton/>
  
      
    </div>
  )
}

export default page
