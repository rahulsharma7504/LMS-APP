'use client'
import { UserButton, useUser } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  const {user}=useUser()
  return (
    <>
    <h2>Main page</h2>
      
    </>
  )
}

export default page
