import TableData from "@/src/layout-C50-L2-A2/tableData.json";
import React from "react";
const ThirdSlide = () => {
  return (
    <div className="grid grid-cols-12 w-full p-5 ">
      <div className="col-span-6 w-full bg-violet-900 text-white p-2 text-center font-bold">
        INFORMATION
      </div>
      <div className="col-span-3 w-full bg-violet-900 text-white p-2 text-center font-bold">
        BILL
      </div>
      <div className="col-span-3 w-full bg-violet-900 text-white p-2 text-center font-bold">
        RECEIPT
      </div>
      {TableData.map((i, index) => (
        <React.Fragment key={index}>
          <div className="col-span-6 border  w-full text-black  p-5 text-left px-10 font-bold">
            {i.text}
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
        </React.Fragment>
      ))}
    </div>
  );
};

export default ThirdSlide;
