import React from 'react'
import data from '../assets/dailytrends.json'

export default function DailyTrends() {
  return (
     <div className='text-white mt-5 bg-[#262631] h-screen'>
        <h3 className='font-bold text-4xl'>Google Daily Trends</h3>
        <p className='font-bold text-xl text-[#CBCBCB]'>Social Media</p>

        <div className="flex-wrap lg:flex gap-5 mt-7">
           {data.map(item=>{
            return item.title.query
           })}
        </div>  
    </div>
  )
}
