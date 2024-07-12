import React, { useState, useEffect } from "react";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import Card from "./Card";

export default function TopRest() {
  const [data, setData] = useState([]);

  const fetchTopResturant = async () => {
    const response = await fetch("http://localhost:5000/top-restaurant-chains");
    const apiData = await response.json();
    setData(apiData);
  };

  useEffect(() => {
    fetchTopResturant();
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto ">
      <div className="flex items-center justify-between">
        <div className="text-[25px] font-bold">
          Top restaurant chains in Delhi
        </div>
        <div className="flex">
          <div
            className="cursor-pointer
            flex justify-center items-center w-[30px] h-[30px] bg-[#e8e8f1] rounded-full mx-2"
          >
            <IoMdArrowBack />
          </div>
          <div
            className="cursor-pointer
            flex justify-center items-center w-[30px] h-[30px] bg-[#e8e8f1] rounded-full mx-2"
          >
            <IoMdArrowForward />
          </div>
        </div>
      </div>
      <div className="flex gap-5 overflow-hidden">
        {data.map((d, i) => {
          return <Card {...d} key={i} />;
        })}
      </div>
      <hr className="my-4 border-[1px]" />
    </div>
  );
}
