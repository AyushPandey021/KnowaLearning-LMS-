import React from "react";
import { useNavigate } from "react-router-dom";
import { SiViaplay, SiGoogledataproc, SiOpenaigym } from "react-icons/si";
import { TbDeviceDesktopAnalytics, TbBrandOpenai } from "react-icons/tb";
import { LiaUikit } from "react-icons/lia";
import { MdAppShortcut } from "react-icons/md";
import { FaHackerrank } from "react-icons/fa";
import { BsClipboardDataFill } from "react-icons/bs";

function ExploreCourses() {
  const navigate = useNavigate();

  const courses = [
    { icon: <TbDeviceDesktopAnalytics />, title: "Web Development", bg: "from-pink-100 to-pink-200" },
    { icon: <LiaUikit />, title: "UI UX Designing", bg: "from-green-100 to-green-200" },
    { icon: <MdAppShortcut />, title: "App Development", bg: "from-red-100 to-red-200" },
    { icon: <FaHackerrank />, title: "Ethical Hacking", bg: "from-purple-100 to-purple-200" },
    { icon: <TbBrandOpenai />, title: "AI / ML", bg: "from-blue-100 to-blue-200" },
    { icon: <SiGoogledataproc />, title: "Data Science", bg: "from-yellow-100 to-yellow-200" },
    { icon: <BsClipboardDataFill />, title: "Data Analytics", bg: "from-indigo-100 to-indigo-200" },
    { icon: <SiOpenaigym />, title: "AI Tools", bg: "from-teal-100 to-teal-200" },
  ];

  return (
    <div className="w-full min-h-[60vh] flex flex-col lg:flex-row items-center justify-center gap-8 px-6 py-10">
      {/* Left Section */}
      <div className="w-full lg:w-[350px] flex flex-col items-start justify-center gap-2">
        <h2 className="text-4xl md:text-5xl font-semibold">Explore</h2>
        <h2 className="text-3xl md:text-4xl font-semibold">Our Courses</h2>
        <p className="text-[16px] text-gray-600">
          Learn the most in-demand skills with hands-on courses designed to
          advance your career.
        </p>
        <button
          className="px-5 py-3 mt-6 bg-black text-white rounded-lg text-lg font-medium flex items-center gap-2 hover:scale-105 transition"
          onClick={() => navigate("/allcourses")}
        >
          Explore Courses <SiViaplay className="w-6 h-6 text-[#38D2CA]" />
        </button>
      </div>

      {/* Right Section - 4x4 Grid of 3D Styled Icons */}
      <div className="w-full lg:w-[720px] grid grid-cols-2 md:grid-cols-4 gap-10 place-items-center">
        {courses.map((course, i) => (
          <div
            key={i}
            className="w-[110px] h-[140px] flex flex-col items-center gap-3 text-center cursor-pointer transform transition hover:scale-110 hover:-rotate-2"
          >
            <div
              className={`w-[100px] h-[100px] bg-gradient-to-br ${course.bg} rounded-2xl flex items-center justify-center shadow-lg hover:shadow-2xl transition`}
            >
              <div className="text-gray-700 text-[48px] drop-shadow-md">
                {course.icon}
              </div>
            </div>
            <span className="text-[14px] font-medium">{course.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExploreCourses;
