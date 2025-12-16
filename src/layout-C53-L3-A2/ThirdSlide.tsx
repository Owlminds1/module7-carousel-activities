import TableData from "@/src/layout-C53-L3-A2/tableData.json";
import Image from "next/image";
import React from "react";
const ThirdSlide = () => {
  return (
    <div className="grid grid-cols-12 w-full p-5 ">
      <div className="col-span-3 w-full bg-violet-900 text-white p-2 text-center font-bold">
        ITEMS
      </div>
      <div className="col-span-3 w-full bg-violet-900 text-white p-2 text-center font-bold">
        WILL BUY
      </div>
      <div className="col-span-3 w-full bg-violet-900 text-white p-2 text-center font-bold">
       WILL NOT BUY
      </div> 
      
      
      <div className="col-span-3 w-full bg-violet-900 text-white p-2 text-center font-bold">
        REASON
      </div>
      {TableData.map((i, index) => (
        <React.Fragment key={index}>
          <div className="col-span-3 border  w-full   p-5 text-left">
           <h2 className="text-black font-bold"> {i.text}</h2>
           <div className="w-20 h-20 border relative ">
            <Image src={i.image} objectFit="cover" fill alt="image"/>
           </div>
          </div>
          <div className="col-span-3 border  flex gap-5 justify-center items-center  w-full text-black  p-2 text-center font-bold">
            {i.option.map((opt, idx) => (
              <label
                key={idx}
                className="flex items-center text-2xl justify-center gap-2"
              >
                <input
                  type="radio"
                  name={`bill-${index}`} // ek question ke group ke liye same name
                  value={opt}
                  title="select"
                  className="accent-violet-900 cursor-pointer"
                />
                {opt}
              </label>
            ))}
          </div>
          <div className="col-span-3 border  flex gap-5 justify-center items-center  w-full text-black  p-2 text-center font-bold">
            {i.option.map((opt, idx) => (
              <label
                key={idx}
                className="flex items-center text-2xl justify-center gap-2"
              >
                <input
                  type="radio"
                 name={`receipt-${index}`}  // ek question ke group ke liye same name
                  value={opt}
                  title="select"
                  className="accent-violet-900 cursor-pointer"
                />
                {opt}
              </label>
            ))}
          </div>

          <div className="col-span-3 border  flex gap-5 justify-center items-center  w-full text-black  p-2 text-center font-bold">
          <textarea 
          className="w-full px-2 border outline-0"
          rows={4}
          placeholder="Write Reason" />
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default ThirdSlide;
