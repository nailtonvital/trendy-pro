import React from 'react'
import stars from '../assets/stars.png'

export default function Home() {
  document.title = 'TrendyPro | Home'
  return (
    <div>
      <div className="bg-gradient-to-r flex from-purple-800 to-pink-700 h-48 rounded-xl w-full text-white font-sans p-4">
        <div className="mt-9 ml-4">
          <p className="text-[#CBCBCB] font-bold">Good Evening</p>
          <h2 className="text-4xl font-bold">Nailton Vital</h2>
        </div>
        <img src={stars} className="h-28" alt="" srcset="" />
      </div>

      <div role="status" class="max-w-sm animate-pulse">
        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  );
}
