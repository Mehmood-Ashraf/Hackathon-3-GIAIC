import React from 'react'
import FaqCards from './FaqCards'
import Header from '@/components/layout/Header'

const data = [
  {
    id: 1,
    question: "How we serve food?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?"
  },{
    id: 2,
    question: "How can we get in touch with you?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?"
  },{
    id: 3,
    question: "How is our food quality?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?"
  },{
    id: 4,
    question: "What will be delivered? And When?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?"
  },{
    id: 5,
    question: "How do we give home delivery?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?"
  },{
    id: 6,
    question: "Is this restaurant 24 hours open?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?"
  }
]

const page = () => {
  return (
    <div>
      <Header 
      name={"FAQ Page"}
      linkName={"faq"}
      />

      <div className='max-w-[1320px] mx-auto xl:my-[120px] my-20 flex flex-col gap-[56px] px-3'>
          <div className='flex flex-col gap-2 text-center'>
            <p className='text-[#333333] font-helvetica font-bold text-5xl leading-[56px]'>Questions Looks Here</p>
            <p className='font-inter text-[#4F4F4F] text-base font-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>
          </div>

          <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
            {data.map((elements) => {
              return (
                <FaqCards 
                key={elements.id}
                question={elements.question}
                answer={elements.answer}
                />
              )
            })}
          </div>
      </div>
    </div>
  )
}

export default page