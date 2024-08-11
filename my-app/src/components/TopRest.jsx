import React, { useState, useEffect } from "react";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import Card from "./Card";

export default function TopRest() {
  // const [slide, setSlide] = useState(0);
  const [data, setData] = useState([]);

  const fetchTopResturant = async () => {
    const response = await fetch("http://localhost:5000/top-restaurant-chains");
    const apiData = await response.json();
    setData(apiData);
  };

  useEffect(() => {
    fetchTopResturant();
  }, []);

  const prevSlide = () => {
    // console.log(data.lenght);
    // if (slide === 0) return false;
    // setSlide(slide - 3);
  };
  const nextSlide = () => {
    // console.log(data.lenght);
    // if (data.length - 8 === slide) return false;
    // setSlide(slide + 3);
  };

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
            onClick={prevSlide}
          >
            <IoMdArrowBack />
          </div>
          <div
            className="cursor-pointer
            flex justify-center items-center w-[30px] h-[30px] bg-[#e8e8f1] rounded-full mx-2"
            onClick={nextSlide}
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
      <hr className="my-4 border-[5px]" />
    </div>
  );
}
