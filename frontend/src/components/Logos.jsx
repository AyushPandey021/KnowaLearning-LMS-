import React from "react";
import { MdCastForEducation } from "react-icons/md";
import { SiOpenaccess } from "react-icons/si";
import { FaSackDollar } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";

function Logos() {
  const items = [
    { icon: <MdCastForEducation />, text: "20k+ Online Courses", bg: "from-blue-200 to-blue-200" },
    { icon: <SiOpenaccess />, text: "Lifetime Access", bg: "from-green-100 to-green-200"  },
    { icon: <FaSackDollar />, text: "Value For Money", bg: "from-yellow-100 to-yellow-200" },
    { icon: <BiSupport />, text: "Lifetime Support", bg: "from-purple-100 to-purple-200" },
    { icon: <FaUsers />, text: "Community Support", bg: "from-pink-100 to-pink-200" },
  ];

  return (
    <div className="w-full flex flex-wrap items-center justify-center gap-6 py-10 perspective-[1200px]">
      {items.map((item, index) => (
        <div
          key={index}
          className={`flex items-center gap-3 px-6 py-4 rounded-3xl bg-gradient-to-br ${item.bg} shadow-lg transform transition-transform duration-500 hover:scale-105 hover:-translate-y-2 hover:rotate-1 cursor-pointer`}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="text-black text-3xl drop-shadow-md">{item.icon}</div>
          <span className="text-black font-semibold text-sm">{item.text}</span>
        </div>
      ))}
    </div>
  );
}

export default Logos;
