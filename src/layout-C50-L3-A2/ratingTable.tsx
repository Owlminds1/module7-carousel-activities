"use client";

import TableDropdown from "./tableDropDown";

type MyProps = {
  ratingTable: string[];
};

const RatingTable = ({ ratingTable }: MyProps) => {
  return (
    <div className="grid grid-cols-12 w-full border border-black w-fit text-sm">
      {/* HEADERS */}
      <div className="border w-full col-span-3 border-black p-2 bg-violet-900 text-white text-center font-bold">
        BRAND
      </div>
      <div className="border w-full col-span-3 border-black p-2 bg-violet-900 text-white text-center font-bold">
        SERVICE
      </div>
      <div className="border w-full col-span-3 border-black p-2 bg-violet-900 text-white text-center font-bold">
        QUALITY
      </div>
      <div className="border w-full col-span-3 border-black p-2 bg-violet-900 text-white text-center font-bold">
        UPGRADE
      </div>

      {/* ROWS */}
      {ratingTable.map((brand, i) => (
        <>
          {/* BRAND COLUMN */}
          <div className="border w-full min-h-[100px]  flex justify-center items-center text-black  text-lg font-bold col-span-3 border-black p-2 text-center">
            {brand}
          </div>
          <div className="border w-full min-h-[100px]  flex justify-center items-center col-span-3 border-black p-2 text-center">
            {" "}
            <TableDropdown />
          </div> <div className="border w-full min-h-[100px]  flex justify-center items-center col-span-3 border-black p-2 text-center">
            {" "}
            <TableDropdown />
          </div> <div className="border w-full min-h-[100px]  flex justify-center items-center col-span-3 border-black p-2 text-center">
            {" "}
            <TableDropdown />
          </div>
        </>
      ))}
    </div>
  );
};

export default RatingTable;
