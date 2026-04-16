"use client";

import TableDropdown from "./tableDropDown";
import TableDropdown2 from "./tableDropDown2";

const Table = () => {
  return (
    <div className="grid grid-cols-12 w-full border border-black text-sm">
      {/* HEADERS */}
      <div className="border w-full col-span-2 border-black p-2 bg-violet-900 text-white text-center font-bold">
        
      </div>
      <div className="border w-full col-span-2 border-black p-2 bg-violet-900 text-white text-center font-bold">
        Friends
      </div>
      <div className="border w-full col-span-2 border-black p-2 bg-violet-900 text-white text-center font-bold">
        Teachers
      </div>
      <div className="border w-full col-span-2 border-black p-2 bg-violet-900 text-white text-center font-bold">
        Peers
      </div>
      
       <div className="border w-full col-span-2 border-black p-2 bg-violet-900 text-white text-center font-bold">
        Siblings
      </div>
       <div className="border w-full col-span-2 border-black p-2 bg-violet-900 text-white text-center font-bold">
        Parents
      </div>

      {/* ROWS */}
     
          {/* BRAND COLUMN */}
          <div className="border w-full min-h-[100px]  flex justify-center items-center text-black  text-lg font-bold col-span-2 border-black p-2 text-center">
            Needs
          </div>
          <div className="border w-full min-h-[100px]  flex justify-center items-center col-span-2 border-black p-2 text-center">
            {" "}
            <TableDropdown />
          </div> <div className="border w-full min-h-[100px]  flex justify-center items-center col-span-2 border-black p-2 text-center">
            {" "}
            <TableDropdown />
          </div> 
          
          <div className="border w-full min-h-[100px]  flex justify-center items-center col-span-2 border-black p-2 text-center">
            {" "}
            <TableDropdown />
          </div> <div className="border w-full min-h-[100px]  flex justify-center items-center col-span-2 border-black p-2 text-center">
            {" "}
            <TableDropdown />
          </div> <div className="border w-full min-h-[100px]  flex justify-center items-center col-span-2 border-black p-2 text-center">
            {" "}
            <TableDropdown />
          </div>


             <div className="border w-full min-h-[100px]  flex justify-center items-center text-black  text-lg font-bold col-span-2 border-black p-2 text-center">
            Wants
          </div>
          <div className="border w-full min-h-[100px]  flex justify-center items-center col-span-2 border-black p-2 text-center">
            {" "}
            <TableDropdown2 />
          </div> <div className="border w-full min-h-[100px]  flex justify-center items-center col-span-2 border-black p-2 text-center">
            {" "}
            <TableDropdown2 />
          </div> <div className="border w-full min-h-[100px]  flex justify-center items-center col-span-2 border-black p-2 text-center">
            {" "}
            <TableDropdown2 />
          </div>

           <div className="border w-full min-h-[100px]  flex justify-center items-center col-span-2 border-black p-2 text-center">
            {" "}
            <TableDropdown2 />
          </div>

           <div className="border w-full min-h-[100px]  flex justify-center items-center col-span-2 border-black p-2 text-center">
            {" "}
            <TableDropdown2 />
          </div>
  
     </div>
  );
};

export default Table;
