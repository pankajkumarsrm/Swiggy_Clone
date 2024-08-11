import React from "react";
// import {
//   FaFacebook,
//   FaYoutube,
//   FaInstagram,
//   FaTwitter,
//   FaTwitch,
// } from "react-icons/fa";
// import { FaFacebook } from "react-icons/fa";

const sections = [
  {
    title: "Company",
    items: [
      "About",
      "Careers",
      "Team",
      "Swiggy One",
      "Swiggy Instamart",
      "Swiggy Genie",
    ],
  },

  {
    title: "Contact us",
    items: ["Help & Support", "Patner with us", "Ride with us"],
  },
  {
    title: "Legal",
    items: [
      "Terms & Condition",
      "Cookie prolicy",
      "privacy Policy",
      "Investor Relations",
    ],
  },
  {
    title: "Well deliver to:",
    items: [
      "Bangalore",
      "Gurgaon",
      "Hyderabad",
      "Delhi",
      "Mumbai",
      "Pune",
      "Bihar",
    ],
  },
];

const items = [
  {
    name: "Facebook",
    icon: "FaFacebook",
    link: "https://facebook.com/",
  },
  {
    name: "YouTube",
    icon: "FaYoutube",
    link: "https://youtube.com/",
  },
  {
    name: "Instagram",
    icon: "FaInstagram",
    link: "https://instagram.com/",
  },
  {
    name: "Instagram",
    icon: "FaInstagram",
    link: "https://instagram.com/",
  },
  {
    name: "Twitter",
    icon: "FaTwitter",
    link: "https://twitter.com/",
  },
  {
    name: "Twitch",
    icon: "FaTwitch",
    link: "https://twitch.com/",
  },
];

const Footer = () => {
  return (
    <>
      <div className="w-full mt-24 bg-black text-white py-2 px-2">
        <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
          {sections.map((section, index) => (
            <div key={index}>
              <h6 className="font-bold uppercase pt-2">{section.title}</h6>
              <ul>
                {section.items.map((item, i) => (
                  <li
                    key={i}
                    className="py-1 text-gray-200 hover:text-white cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="col-span-2 pt-2 md:pt-2">
            <p className="font-bold uppercase">Subscribe to our newsletter</p>
            <p className="py-4 text-gray-500 hover:text-white cursor-pointer">
              the latest update.articles and resources.send to your inbox
              weekly.
            </p>
            <form className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Enter email address"
                className="w-full p-2 mr-4 rounded-md mb-4"
              />
              <button className="p-2 mb-4">Subscribe</button>
            </form>
          </div>
        </div>
        {/* Social Icons */}
        <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
          <p className="py-4">2024 Bryt Tech Tips, LLC, All rights reserved.</p>

          {/* <div className="flex justify-between sm-w-[300px] pt-4 text-2xl">
            {items.map((x, index) => {
              return
              <x.icon
              key={index}
                className="hover:text-white cursor-pointer" 
              />;
            })}
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Footer;
