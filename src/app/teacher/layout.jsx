import DynamicNavbar from '@/component/DynamicNavbar'
import { UserButton } from '@clerk/nextjs'
import React from 'react'
import Footer from './_components/Footer'

const layout = ({children}) => {
  return (
    <>
    <header>
    <DynamicNavbar children={children}/>

    </header>
    <Footer/>
      
    </>
  )
}

export default layout
