import Header from '@/component/layout/Header'
import React from 'react'

const layout = ({children}) => {
  return (
    <>
    <Header/>
    <h1>Teacher Layout</h1>
    {children}
      
    </>
  )
}

export default layout
