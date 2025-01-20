import React from 'react'
import Header from '@/components/layout/Header'
import Hero from './Hero'

const page = () => {
  return (
    <div>
        <Header 
        name='About Us'
        linkName='About'/>
        
        <Hero />
    </div>
  )
}

export default page