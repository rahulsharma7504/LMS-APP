'use client'
import { UserButton, useUser } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  const {user}=useUser()
  return (
    <>

      <UserButton/>
    </>
  )
}

export default page
