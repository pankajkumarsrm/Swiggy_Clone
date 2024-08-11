import React, { useState, useEffect } from "react";
import Card from "./Card";
import { FaFilter } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

export default function OnlineDelivery() {
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
      <div className="">
        <div className="text-[25px] font-bold">
          Restaurants with online food delivery in Delhi
        </div>
        <div className="flex items-center my-6 ">
          <button className="rounded-[2rem] border-2 py-2 px-3 flex items-center mx-1 font-semibold text-sm">Fillter <FaFilter className="mx-1" /></button>
          <button className="rounded-[2rem] border-2 py-2 px-3 flex items-center mx-1 font-semibold text-sm">Sort By <IoIosArrowDown className="mx-1" /></button>
          <button className="rounded-[2rem] border-2 py-2 px-3 flex items-center mx-1 font-semibold text-sm">Fast Delivery</button>
          <button className="rounded-[2rem] border-2 py-2 px-3 flex items-center mx-1 font-semibold text-sm">New on Swiggy </button>
          <button className="rounded-[2rem] border-2 py-2 px-3 flex items-center mx-1 font-semibold text-sm">Rating 4.2+</button>
          <button className="rounded-[2rem] border-2 py-2 px-3 flex items-center mx-1 font-semibold text-sm">Pure Veg </button>
          <button className="rounded-[2rem] border-2 py-2 px-3 flex items-center mx-1 font-semibold text-sm">Offer </button>
          <button className="rounded-[2rem] border-2 py-2 px-3 flex items-center mx-1 font-semibold text-sm">Rs. 300-Rs. 600 </button>
          <button className="rounded-[2rem] border-2 py-2 px-3 flex items-center mx-1 font-semibold text-sm">Less than Rs.300 </button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {data.map((d, i) => {
          return <Card {...d} key={i} />;
        })}
      </div>
      <button className="btn btn-primary"></button>
    </div>
  );
}
