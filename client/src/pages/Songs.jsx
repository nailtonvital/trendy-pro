import React, { useEffect, useState } from 'react'
import api from '../services/api'

export default function Songs() {
    const [songs, setSongs] = useState([])

    document.title = 'KEIKO | Songs'

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
                            Weeks On Chart <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M13 7h-2v6h6v-2h-4z"></path></svg>
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
