"use client";

import React, { useState } from "react";
import TableDropdown from "./tableDropDown";

type MyProps = {
  ratingTable: string[];
};



const getLabel = (value: number) => {
  if (value === 5) return "Amazing";
  if (value === 4) return "Decent";
  if (value === 3) return "OK";
  if (value === 2) return "OK";
  if (value === 1) return "Not Worth It";
  return "";
};

type StarProps = {
  value: number;
  onChange: (num: number) => void;
};

/* ---------- STAR COMPONENT (CLICKABLE) ---------- */

const StarRating = ({ value, onChange }: StarProps) => {
  return (
    <div className="flex justify-center gap-1 cursor-pointer">
      {[1, 2, 3, 4, 5].map((num) => (
        <span
          key={num}
          onClick={() => onChange(num)}
          className={`text-2xl ${
            num <= value ? "text-yellow-500" : "text-gray-300"
          }`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

const brands = ["SYNERGY", "SHINE", "ICEBERG"];


const RatingTable = ({ ratingTable }: MyProps) => {

 const [ratings, setRatings] = useState(
    brands.map(() => ({
      service: 0,
      quality: 0,
      upgrade: 0,
    }))
  );

  const updateRating = (
    brandIndex: number,
    key: "service" | "quality" | "upgrade",
    value: number
  ) => {
    const clone = [...ratings];
    clone[brandIndex][key] = value;
    setRatings(clone);
  };


  return (
    <div className="grid grid-cols-12 w-full border border-black  text-sm">
      {/* HEADERS */}
      <div className="border w-full col-span-3 border-black p-4 bg-violet-900 text-white text-center font-bold">
        BRAND
      </div>
      <div className="border w-full col-span-3 border-black p-4 bg-violet-900 text-white text-center font-bold">
        SERVICE
      </div>
      <div className="border w-full col-span-3 border-black p-4 bg-violet-900 text-white text-center font-bold">
        QUALITY
      </div>
      <div className="border w-full col-span-3 border-black p-4 bg-violet-900 text-white text-center font-bold">
        UPGRADE
      </div>

      {/* ROWS */}
      {ratingTable.map((brand, index) => (
               <React.Fragment key={brand}>
                 <div className="col-span-3 border text-lg font-normal text-black text-center  p-4">
                   {brand}
                 </div>
     
                 {(["service", "quality", "upgrade"] as const).map((key) => (
                   <div key={key} className="col-span-3 border text-center flex flex-col  items-center justify-center ">
                     <StarRating
                       value={ratings[index][key]}
                       onChange={(val) => updateRating(index, key, val)}
                     />
                     {ratings[index][key] > 0 && (
                       <p className="text-sm mt-1 text-gray-700">
                         {getLabel(ratings[index][key])}
                       </p>
                     )}
                   </div>
                 ))}
               </React.Fragment>
             ))}
    </div>
  );
};

export default RatingTable;
