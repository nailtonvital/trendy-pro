import React from "react";

export default function LeftText({ text, subtext, img }) {
  return (
    <div className="flex mb-24 mt-80">
      <div className="mt-52 text-start w-1/3">
        <p className="text-5xl font-bold pb-6">{text}</p>
        <p className="text-xl font-light">{subtext}</p>
      </div>
      <img className="w-1/2" src={img} alt="imgUser" />
    </div>
  );
}
