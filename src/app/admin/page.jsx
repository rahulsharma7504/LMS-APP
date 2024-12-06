'use client'
import React from 'react'
import { useUser } from '@clerk/nextjs'
import LogoutButton from '@/component/logout'

const page = () => {
    const {user}=useUser()
    console.log(user)
  return (
    <div>
        <h1>Home Page</h1>
        <p>Welcome Admin {user?.fullName}!</p>
        <LogoutButton/>
  
      
    </div>
  )
}

export default page
