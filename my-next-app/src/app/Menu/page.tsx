import React from 'react'
import Header from '@/components/layout/Header'
import Starter from '@/components/Menu/Starter'
import MainCourse from '@/components/Menu/MainCourse'
import HeroSection5 from '@/components/HomePage/HeroSection5'
import Desert from '@/components/Menu/Desert'
import Drinks from '@/components/Menu/Drinks'
import Partners from '@/components/Menu/Partners'

const page = () => {
  return (
    <div>
        <Header
        name='Our Menu'
        linkName='Menu' />
        <Starter />
        <MainCourse />
        <HeroSection5 />
        <Desert />
        <Drinks />
        <Partners />


    </div>
  )
}

export default page