"use client";

import Image from "next/image";
import TableDropdown from "./tableDropDown";

const RatingTable = () => {
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
        Water
        <div className="w-20 h-20 relative">
          <Image src="/C50Images/Water.jpg" fill alt="image" />
        </div>
      </div>
      <div className="border w-full min-h-[50px]  flex justify-center items-center text-black  text-lg font-bold col-span-4 border-black p-2 text-center">
        Easily Accessible
      </div>
      <div className="border w-full min-h-[50px]  flex justify-center items-center col-span-4 border-black p-2 text-center">
        <TableDropdown />
      </div>

      {/* ================== */}
      <div className="border w-full min-h-[50px]  flex justify-center items-center text-black  text-lg font-bold col-span-4 border-black p-2 text-center flex-col gap-1">
        Diamond
        <div className="w-20 h-20 relative">
          <Image src="/C50Images/Diamond2.jpg" fill alt="image" />
        </div>
      </div>
      <div className="border w-full min-h-[50px]  flex justify-center items-center text-black  text-lg font-bold col-span-4 border-black p-2 text-center">
        Rarely Accessible
      </div>
      <div className="border w-full min-h-[50px]  flex justify-center items-center col-span-4 border-black p-2 text-center">
        <TableDropdown />
      </div>

      {/* ================== */}
      <div className="border w-full min-h-[50px]  flex justify-center items-center text-black  text-lg font-bold col-span-4 border-black p-2 text-center flex-col gap-1">
        Pizza
        <div className="w-20 h-20 relative">
          <Image src="/C50Images/Pizza.jpg" fill alt="image" />
        </div>
      </div>
      <div className="border w-full min-h-[50px]  flex justify-center items-center text-black  text-lg font-bold col-span-4 border-black p-2 text-center">
        Easily Accessible
      </div>
      <div className="border w-full min-h-[50px]  flex justify-center items-center col-span-4 border-black p-2 text-center">
        <TableDropdown />
      </div>

      {/* ================== */}
      <div className="border w-full min-h-[50px]  flex justify-center items-center text-black  text-lg font-bold col-span-4 border-black p-2 text-center flex-col gap-1">
        Sushi
        <div className="w-20 h-20 relative">
          <Image src="/C50Images/PV_Sushi.jpg" fill alt="image" />
        </div>
      </div>
      <div className="border w-full min-h-[50px]  flex justify-center items-center text-black  text-lg font-bold col-span-4 border-black p-2 text-center">
        Sometimes Accessible
      </div>
      <div className="border w-full min-h-[50px]  flex justify-center items-center col-span-4 border-black p-2 text-center">
        <TableDropdown />
      </div>
    </div>
  );
};

export default RatingTable;
