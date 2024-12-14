import React from 'react'

const layout = ({children, sidebar, header}) => {
  return (
    <>
    {header}
    {sidebar}
    {children}
      
    </>
  )
}

export default layout
