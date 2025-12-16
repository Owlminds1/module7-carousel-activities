"use client";
import MyImage from "@/components/myImage";
import React, { useState } from "react";

type StarProps = {
  value: number;
  onChange: (num: number) => void;
};

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

const brands = ["LEGOS", "TROY", "RADAR"];

const TableSlide1 = () => {
  // Each brand has 3 ratings → [service, quality, upgrade]
  const [ratings, setRatings] = useState(
    brands.map(() => ({
      service: 0,
      quality: 0,
      upgrade: 0,
    }))
  );

  const updateRating = (brandIndex: number, key: "service" | "quality" | "upgrade", value: number) => {
    const clone = [...ratings];
    clone[brandIndex][key] = value;
    setRatings(clone);
  };

  return (
    <div className="grid grid-cols-12 w-full place-items-center  gap-5">
<div className="col-span-6 w-full flex justify-center items-center flex-col gap-2 ">
  
    <MyImage path="/C53Images/Shoes2.jpg" />
</div>


<div className="col-span-6 w-full flex justify-center items-center flex-col gap-2 ">
    <h3 className="text-black text-xl text-center">SHOES</h3>
    <h3 className="text-black text-xl  w-full">Here’s how the quality is listed:</h3>
    <ul className="list-disc">
      <li className="text-black text-lg"><span className="font-bold">Amazing : </span>Service, Quality, and Upgrades are all top notch!</li>
      <li className="text-black text-lg"><span className="font-bold">Decent : </span>Service, Quality, and Upgrades are all effective!</li>
      <li className="text-black text-lg"><span className="font-bold">OK : </span>Service, Quality, and Upgrades are fine but can be improved!</li>
      <li className="text-black text-lg"><span className="font-bold">Not Worth It : </span>Service, Quality, and Upgrades are all not worth the purchase!</li>
    </ul>
</div>



<div className="col-span-12 w-[80%] grid grid-cols-12 gap-1 border  ">

   {/* Headings */}
      <div className="col-span-3 bg-violet-900 text-center text-white p-1">
        BRAND
      </div>
      <div className="col-span-3 bg-violet-900 text-center text-white p-1">
        SERVICE
      </div>
      <div className="col-span-3 bg-violet-900 text-center text-white p-1">
        QUALITY
      </div>
      <div className="col-span-3 bg-violet-900 text-center text-white p-1">
        UPGRADE
      </div>

      {/* Dynamic Rows */}
      {brands.map((brand, index) => (
        <React.Fragment key={index}>
          {/* BRAND NAME */}
          <div className="col-span-3 text-center font-bold p-1 text-black font-bold">{brand}</div>

          {/* SERVICE */}
          <div className="col-span-3 text-center p-1">
            <StarRating
              value={ratings[index].service}
              onChange={(val) => updateRating(index, "service", val)}
            />
          </div>

          {/* QUALITY */}
          <div className="col-span-3 text-center p-1">
            <StarRating
              value={ratings[index].quality}
              onChange={(val) => updateRating(index, "quality", val)}
            />
          </div>

          {/* UPGRADE */}
          <div className="col-span-3 text-center p-1">
            <StarRating
              value={ratings[index].upgrade}
              onChange={(val) => updateRating(index, "upgrade", val)}
            />
          </div>
        </React.Fragment>
      ))}
</div>

<div className="col-span-12 w-full flex justify-center items-center flex-col gap-2 ">
    <h3 className="text-black text-xl text-center">Which product would you choose?</h3>
 
</div>

   
    </div>
  );
};

export default TableSlide1;
