import React from 'react'
import Header from '@/components/layout/Header'
import Product from './product'

const page = () => {
  return (
    <div>
        <Header
        name='Shop Details'
        linkName='Shop Details'
        />

        <Product />

    </div>
  )
}

export default page