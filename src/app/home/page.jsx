'use client'

import LoadingPage from '@/component/loading'
import LogoutButton from '@/component/logout'
import { useUser } from '@clerk/nextjs'
import React from 'react'

const Page = () => {



  return (
    <>
  <LogoutButton />

    <center><h2>Home page Data will appear here</h2></center>

    </>
  )
}

export default Page
