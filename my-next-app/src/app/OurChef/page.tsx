import React from 'react'
import Header from '@/components/layout/Header'
import OurChefCards from './OurChefCards'
import {client} from "@/sanity/lib/client"
import IChefs from '@/types/chefs'

const page = async () => {

  const chefs:IChefs[] = await client.fetch(
    `*[_type == "chef"]{
      name,
      position,
      "image": image.asset->url,
      "slug": slug.current,
    }`
  )
  return (
    <div>
        <Header
        name={"Our Chef"}
        linkName={'Chef'}
        />
        <div className='max-w-[1320px] mx-auto my-[120px] px-3'>
          <div className='grid xl:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-6'>
            {chefs.map((chef: IChefs, index) => {
              return(
                <OurChefCards 
                key={index}
                image={chef.image}
                name={chef.name}
                designation={chef.position}
                />
              )
            })}

          </div>
        </div>

    </div>
  )
}

export default page