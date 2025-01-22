import React from 'react'
import Header from '@/components/layout/Header'
import Product from './product'
import IFoods from '@/types/foods'
import {client} from "@/sanity/lib/client"

const page = async ({ params }: { params:{ slug: string } }) => {

  const {slug} = await params
  const product:IFoods =
    await client.fetch(`*[_type == "food" && slug.current == $slug][0] {
      name,
      description,
      price,
      originalPrice,
      tags,
      "imageUrl": image.asset->url,
      "slug": slug.current,
   }`,{slug}
  );
  return (
    <div>
        <Header
        name='Shop Details'
        linkName='Shop Details'
        />

        <Product product ={product}/>

    </div>
  )
}

export default page