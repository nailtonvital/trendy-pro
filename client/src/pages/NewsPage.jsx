import React from 'react'
import { useParams, useLocation } from "react-router-dom";

export default function NewsPage() {
      const location = useLocation();
      console.log(location);
  return ( 
  <div className="bg-[#262631] h-screen">
    <div className='h-auto w-3/4 mx-auto bg-[#37383F] drop-shadow-2xl text-white rounded-2xl'>
     
      <h1 className="font-bold text-3xl text-center py-4 ">
        {location.state.title}
      </h1>
      <p className="font-light text-md text-center mt-2">
        Author: {location.state.author}
      </p>
      <div className="img mt-5 ">
        <img src={location.state.img} className="mx-auto rounded-2xl" alt="" />
      </div>
      <div
        className="mt-5 mx-3 text-justify py-5"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(location.state.content).replace(
            /\\r\\n/g,
            "<br />"
          ),
        }}
      ></div>
     </div>
    </div>
  );
}
