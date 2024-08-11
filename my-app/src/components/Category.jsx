import React, { useState, useEffect } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";

export default function Category() {
  const [slide, setSlide] = useState(0);
  const [categories, setCategory] = useState([]);

  const fetchCategory = async () => {
    const response = await fetch("http://localhost:5000/categories");
    const data = await response.json();
    setCategory(data);
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  const nextSlide = () => {
    console.log(categories.length);
    if (categories.length - 8 === slide) return false;
    setSlide(slide + 3);
  };

  const prevSlide = () => {
    if (slide === 0) return false;
    setSlide(slide - 3);
  };

  return (
    <>
      <div className="max-w-[1200px] mx-auto ">
        <div className="flex items-center justify-between">
          <div className="text-[25px] font-bold">What's on your mind</div>
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
        <div className="flex  overflow-hidden ">
          {categories.map((cat, index) => {
            return (
              <div
                style={{ transform: `translateX(-${slide * 100}%)` }}
                key={index}
                className="w-[150px] shrink-0 duration-500"
              >
                <img src={"http://localhost:5000/images/" + cat.image} alt="" />
              </div>
            );
          })}
        </div>
        <hr className="my-6 border-[1px]" />
      </div>
    </>
  );
}
