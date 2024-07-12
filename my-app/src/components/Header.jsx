import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { CiDiscount1 } from "react-icons/ci";

export default function Header() {
  const [toggle, setToggle] = useState(false);

  const showSideMenu = () => {
    setToggle(true);
  };

  const hideSideMenu = () => {
    setToggle(false);
  };

  const links = [
    {
      icon: <IoIosSearch />,
      name: "Search",
    },
    {
      icon: <CiDiscount1 />,
      name: "offers",
      sup: "NEW",
    },
    {
      icon: "",
      name: "Help",
    },
    {
      icon: "",
      name: "Sign In",
    },
    {
      icon: "",
      name: "Cart",
      sup: "(2)",
    },
  ];

  return (
    <>
      <div
        className="black-overlay w-full h-full fixed duration-500 z-40"
        onClick={hideSideMenu}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="w-[500px] bg-white h-full absolute duration-[400ms] z-40"
          style={{ left: toggle ? "0%" : "-100%" }}
        ></div>
      </div>
      <header className="p-[15px] shadow-xl">
        <div className="max-w-[1200px] mx-auto  flex items-center">
          <div className="w-[100px]">
            <img src="images/logo3.png" className="w-full" alt="" />
          </div>

          <div className="">
            <span className="font-bold border-b-[3px] border-[black] mr-2">
              Ratanada
            </span>
            Ghaziabad, Utter pradesh, India
            <RxCaretDown
              onClick={showSideMenu}
              fontSize={25}
              className="inline text-[#fc8019] cursor-pointer"
            />
          </div>

          <nav className="flex list-none gap-10 cursor-pointer ml-auto ml-auto text-[18px] font-semibold">
            {links.map((link, index) => {
              return (
                <li
                  key={index}
                  className="flex hover:text-[#fc8019] items-center gap-2"
                >
                  {link.icon}
                  {link.name}
                  <sup className="text-[#fc8019] hover:text-black">
                    {" "}
                    {link.sup}
                  </sup>
                </li>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
}
