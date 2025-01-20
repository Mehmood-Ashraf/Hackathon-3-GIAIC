import React from 'react'
import Header from '@/components/layout/Header'

const page = () => {
  return (
    <div>
        <Header 
        name={"Shopping Cart"}
        linkName={"Shopping Cart"}
        />

        <div className='max-w-[1320px] mx-auto xl:my-[120px] my-20 flex flex-col gap-[56px] px-3'>
            <div className='grid grid-rows-6 grid-cols-5 gap-8'></div>
        </div>
    </div>
  )
}

export default page