import { UserButton } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <>
    <h2 style={{textAlign:'right'}}>this is Header  for home page <UserButton/></h2>
      
    </>
  )
}

export default page
