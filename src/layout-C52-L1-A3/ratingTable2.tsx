"use client";

import Image from "next/image";
import TableDropdown from "./tableDropDown";

const RatingTable2 = () => {
  return (
    <div className="grid grid-cols-12 w-full border border-black text-sm">
      {/* HEADERS */}
      <div className="border w-full col-span-4 border-black p-2 bg-violet-900 text-white text-center font-bold">
        Product
      </div>
      <div className="border w-full col-span-4 border-black p-2 bg-violet-900 text-white text-center font-bold">
        Supply
      </div>
      <div className="border w-full col-span-4 border-black p-2 bg-violet-900 text-white text-center font-bold">
        Value (Suggestive Response)
      </div>

      {/* ROWS */}
      {/* BRAND COLUMN */}
      <div className="border w-full min-h-[50px]  flex justify-center items-center text-black  text-lg font-bold col-span-4 border-black p-2 text-center flex-col gap-1">
      Lentils
      </div>
      <div className="border w-full min-h-[50px]  flex justify-center items-center text-black  text-lg font-bold col-span-4 border-black p-2 text-center">
      London
      </div>
      <div className="border w-full min-h-[50px]  flex justify-center items-center col-span-4 border-black p-2 text-center">
        <TableDropdown />
      </div>

      {/* ================== */}
      <div className="border w-full min-h-[50px]  flex justify-center items-center text-black  text-lg font-bold col-span-4 border-black p-2 text-center flex-col gap-1">
     Cheese
      </div>
      <div className="border w-full min-h-[50px]  flex justify-center items-center text-black  text-lg font-bold col-span-4 border-black p-2 text-center">
      India
      </div>
      <div className="border w-full min-h-[50px]  flex justify-center items-center col-span-4 border-black p-2 text-center">
        <TableDropdown />
      </div>

      {/* ================== */}
      <div className="border w-full min-h-[50px]  flex justify-center items-center text-black  text-lg font-bold col-span-4 border-black p-2 text-center flex-col gap-1">
       Shrimp
      </div>
      <div className="border w-full min-h-[50px]  flex justify-center items-center text-black  text-lg font-bold col-span-4 border-black p-2 text-center">
     Spain
      </div>
      <div className="border w-full min-h-[50px]  flex justify-center items-center col-span-4 border-black p-2 text-center">
        <TableDropdown />
      </div>

      {/* ================== */}
      <div className="border w-full min-h-[50px]  flex justify-center items-center text-black  text-lg font-bold col-span-4 border-black p-2 text-center flex-col gap-1">
     Beef
      </div>
      <div className="border w-full min-h-[50px]  flex justify-center items-center text-black  text-lg font-bold col-span-4 border-black p-2 text-center">
     Swaziland
      </div>
      <div className="border w-full min-h-[50px]  flex justify-center items-center col-span-4 border-black p-2 text-center">
        <TableDropdown />
      </div>
    </div>
  );
};

export default RatingTable2;
