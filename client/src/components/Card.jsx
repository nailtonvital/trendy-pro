import React from 'react'

export default function Card(props) {
  return (
    <div className='bg-[#37383F] hover:scale-105 w-80 flex rounded-xl  p-5 '>
        <img src={props.img} className='rounded-full h-24  m-auto' />
        <div className="ml-4 m-auto">
            <h4 className='font-bold text-lg'>{props.name}</h4>
            <p className='text-md text-[#A7A8AB] font-bold'>{props.description}</p>
        </div>
    </div>
  )
}
