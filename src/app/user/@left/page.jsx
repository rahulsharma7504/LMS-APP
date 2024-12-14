'use client'
import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import { Router } from 'next/router'
import React from 'react'

const left = () => {
  
  return (
    <>
     <div>
      <nav>
        <ul>
          <li><Link style={{color:'black', fontFamily:'revert-layer'}} href="/home">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/logout">Logout</Link></li>
        </ul>
      </nav>
    </div>
    </>
  )
}

export default left
