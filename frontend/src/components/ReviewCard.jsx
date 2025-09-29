// import React from "react";
// import { FaStar } from "react-icons/fa6";
// import { FaRegStar } from "react-icons/fa";
// const ReviewCard = ({ text, name, image, rating, role }) => {
//   return (
//     <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 max-w-sm w-full">
//       {/* ⭐ Rating Stars */}
//       <div className="flex items-center mb-3 text-yellow-400 text-sm">
//         {Array(5)
//           .fill(0)
//           .map((_, i) => (
//             <span key={i}>
//               {i < rating ? <FaStar/> : <FaRegStar/>}
//             </span>
//           ))}
//       </div>

//       {/* 💬 Review Text */}
//       <p className="text-gray-700 text-sm mb-5">{text}</p>

//       {/* 👤 Reviewer Info */}
//       <div className="flex items-center gap-3">
//         <img
//           src={image}
//           alt={name}
//           className="w-10 h-10 rounded-full object-cover"
//         />
//         <div>
//           <h4 className="font-semibold text-gray-800 text-sm">{name}</h4>
//           <p className="text-xs text-gray-500">{role}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReviewCard;


import React from "react";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";

const ReviewCard = ({ text, name, image, rating, role }) => {
  return (
    <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-gray-100 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out max-w-sm w-full">
      
      {/* ⭐ Rating Stars */}
      <div className="flex items-center mb-4 text-yellow-400">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <span key={i} className="text-lg">
              {i < rating ? <FaStar /> : <FaRegStar />}
            </span>
          ))}
      </div>

      {/* 💬 Review Text */}
      <p className="text-gray-700 text-base leading-relaxed mb-6 italic">
        “{text}”
      </p>

      {/* 👤 Reviewer Info */}
      <div className="flex items-center gap-3">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover border border-gray-300"
        />
        <div>
          <h4 className="font-semibold text-gray-900 text-base">{name}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
