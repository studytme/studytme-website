import Link from "next/link";
import React from "react";

const Card = (title, value, logo, sub) => (
  <div className="flex">
    <div className="flex flex-col justify-between p-8 transition-shadow bg-white shadow-xl rounded-xl group hover:shadow-lg">
      <div className="grid justify-between grid-cols-2 pt-2 mt-4 border-b-2 border-indigo-100">
        <p className="text-sm font-medium tracking-widest text-gray-500 uppercase">title</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className=" bi bi-people-fill justify-self-end"
          viewBox="0 0 16 16"
        >
          <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          <path
            fillRule="evenodd"
            d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
          />
          <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
        </svg>
      </div>
      <h5 className="text-5xl font-bold text-[#612DFF]">77k+</h5>
    </div>
  </div>
);

export default Card;
