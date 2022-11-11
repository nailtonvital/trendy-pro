import React from 'react'
import Card from '../components/Card'
import reddit from '../assets/reddit.png'
import twitter from '../assets/twitter.webp'
import google from '../assets/google.webp'
import youtube from '../assets/youtube.png'
import { Link } from 'react-router-dom'

export default function SocialMedia() {
    
    document.title = 'Social Media'

    const socialFeatures = [
        {img: google, name:"Google", description: "Access the Google Daily Trends", link: 'google'},
        {img: twitter, name:"Twitter", description: "Access the Twitter Trending Topics", link: 'twitter'},
        {img: reddit, name:"Reddit", description: "Access the most popular posts of Reddit", link: 'reddit'},
        {img: youtube, name:"Youtube", description: "Access the Trending Youtube Videos", link: 'youtube'},
    ]
  return (
    <div className='text-white mt-5'>
        <h3 className='font-bold text-4xl'>Social Media</h3>
        <p className='font-bold text-xl text-[#CBCBCB]'>Trending Now</p>

        <div className="flex-wrap lg:flex gap-5 mt-7">
            {socialFeatures.map(item=>{
                return <Link to={item.link}> <Card img={item.img} name={item.name} description={item.description} /></Link>
            })}
        </div>  
    </div>
  )
}
