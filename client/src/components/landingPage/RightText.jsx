import React from "react";

export default function RightText({ text, subtext, img }) {
  return (
    <div className="flex mb-24 mt-80">
      <img className="w-1/2" src={img} />
      <div className="w-1/3  pt-28 text-end">
        <p className="text-5xl font-bold pb-4">{text}</p>
        <p className="text-xl font-light">{subtext}</p>
      </div>
    </div>
  );
}
