"use client";
import MyImage from "@/components/myImage";
import React, { useState } from "react";

/* ---------- HELPERS ---------- */

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

/* ---------- MAIN COMPONENT ---------- */

const TableSlide3 = () => {
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
    <div className="grid grid-cols-12 w-full place-items-center gap-5">

      {/* IMAGE */}
      <div className="col-span-6 flex justify-center">
        <MyImage path="/C53Images/Shoes2.jpg" />
      </div>

      {/* LEGEND */}
      <div className="col-span-6 flex flex-col gap-3">
        <h3 className="text-xl font-bold text-black">SHOES</h3>

        <h4 className="text-black font-medium">
          Here’s how the quality is listed:
        </h4>

        <ul className="list-disc pl-5 text-black">
          <li><b>Amazing</b>: Service, Quality, and Upgrades are all top notch</li>
          <li><b>Decent</b>: Service, Quality, and Upgrades are effective</li>
          <li><b>OK</b>: Fine but can be improved</li>
          <li><b>Not Worth It</b>: Not worth the purchase</li>
        </ul>

     
      </div>

      {/* TABLE */}
      <div className="col-span-12 w-[80%] grid grid-cols-12 border gap-1 mt-5">

        {/* HEADERS */}
        {["BRAND", "SERVICE", "QUALITY", "UPGRADE"].map((h) => (
          <div
            key={h}
            className="col-span-3 bg-violet-900 text-white text-center p-2"
          >
            {h}
          </div>
        ))}

        {/* ROWS */}
        {brands.map((brand, index) => (
          <React.Fragment key={brand}>
            <div className="col-span-3 text-lg font-normal text-black text-center  p-2">
              {brand}
            </div>

            {(["service", "quality", "upgrade"] as const).map((key) => (
              <div key={key} className="col-span-3 text-center flex  items-center justify-center gap-3 p-2">
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

      {/* DECISION QUESTION */}
      <div className="col-span-12 text-center mt-5">
        <h3 className="text-xl text-black">
          Which product would you choose?
        </h3>
      </div>
    </div>
  );
};

export default TableSlide3;
