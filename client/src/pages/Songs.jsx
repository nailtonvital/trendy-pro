import React, { useEffect, useState } from 'react'
import api from '../services/api'

export default function Songs() {
    const [songs, setSongs] = useState([])

    document.title = 'TrendyPro | Songs'

    useEffect(()=>{
        api.get('billboard-top-100').then((response) => {setSongs(response.data), console.log(response.data)}).catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
    },[])

  return (
    <div className='text-white mt-5'>
        <h3 className='font-bold text-4xl'  data-bs-toggle='tooltip' title="Hi! I'm tooltip">Popular Songs</h3>
        <p className='font-bold text-xl text-[#CBCBCB]'>Trending Now</p>
        
        <div class='flex flex-col mt-8'>
            <div class='overflow-x-auto sm:-mx-6 lg:-mx-8'>
                <div class='py-2 inline-block min-w-full sm:px-6 lg:px-8'>
                <div class='overflow-hidden rounded-lg'>
                    <table class='min-w-full'>
                    <thead class='bg-[#1B1A20] border-b'>
                        <tr>
                        <th scope='col' class='text-sm font-medium text-slate-100 pl-6 py-4 text-left'>
                            #
                        </th>
                        <th scope='col' class='text-sm font-medium text-slate-100 pr-6 py-4 text-left'>
                            Title
                        </th>
                        <th scope='col' class='text-sm font-medium text-slate-100 px-6 py-4 text-left'>
                            Position Last Week
                        </th>
                        <th scope='col' class='text-sm flex gap-1 font-medium text-slate-100 px-6 py-4 text-left'>
                            Weeks On Chart <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" >
                            <path d="M11 10.175L13.25 12.425C13.4333 12.6083 13.525 12.8377 13.525 13.113C13.525 13.3877 13.4333 13.625 13.25 13.825C13.05 14.025 12.8127 14.125 12.538 14.125C12.2627 14.125 12.025 14.025 11.825 13.825L9.7 11.7C9.46667 11.4667 9.29167 11.2083 9.175 10.925C9.05833 10.6417 9 10.3333 9 10V7C9 6.71667 9.096 6.479 9.288 6.287C9.47933 6.09567 9.71667 6 10 6C10.2833 6 10.521 6.09567 10.713 6.287C10.9043 6.479 11 6.71667 11 7V10.175ZM10 20C8.61667 20 7.31667 19.7373 6.1 19.212C4.88333 18.6873 3.825 17.975 2.925 17.075C2.025 16.175 1.31267 15.1167 0.788 13.9C0.262667 12.6833 0 11.3833 0 10C0 8.61667 0.262667 7.31667 0.788 6.1C1.31267 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.31233 6.1 0.787C7.31667 0.262333 8.61667 0 10 0C11.3833 0 12.6833 0.262333 13.9 0.787C15.1167 1.31233 16.175 2.025 17.075 2.925C17.975 3.825 18.6873 4.88333 19.212 6.1C19.7373 7.31667 20 8.61667 20 10C20 11.3833 19.7373 12.6833 19.212 13.9C18.6873 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6873 13.9 19.212C12.6833 19.7373 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z" fill="white"/></svg>
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        {songs.map((item)=>{
                            return (<tr class='bg-[#1B1A20] border-b transition duration-300 ease-in-out hover:bg-[#26252B] '>
                            <td class='pl-6 py-4 whitespace-nowrap text-sm font-medium text-slate-100'>{item.rank}</td>
                            <td class='text-sm flex-col text-white font-light pr-6 py-4 whitespace-nowrap'>
                            <div className='flex'>
                                <img className='w-16 rounded-lg' src={item.cover} alt='' />
                                <div className='ml-3 m-auto'>
                                    <h4 className='font-extrabold text-base'>{item.title}</h4>
                                    <p className='text-[#A9A9A9] font-bold'>{item.artist}</p>
                                </div>
                            </div>
                            </td>
                            <td class='font-bold text-slate-100 px-6 py-4 whitespace-nowrap'>
                                {item.position.positionLastWeek}
                            </td>
                            <td class='font-bold text-slate-100 px-6 py-4 whitespace-nowrap'>
                                {item.position.weeksOnChart}
                            </td>
                        </tr>)
                        })}
                        
                        
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
        </div> 
    </div>
  )
}
