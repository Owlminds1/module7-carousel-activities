import TableData from "@/src/layout-C52-L2-A3/tableData.json";
import React, { useState } from "react";

const ThirdSlide = () => {
  const [result, setResult] = useState<(boolean | null)[]>(
    Array(TableData.length).fill(null)
  );

  const handleCheck = (val: string, select: string, index: number) => {
    setResult((prev) => {
      const updated = [...prev];
      updated[index] = val === select; // true or false
      return updated;
    });
  };

  return (
    <div className="grid grid-cols-9 w-full p-5">
      <div className="col-span-6 bg-violet-900 text-white p-2 text-center font-bold">
        STATEMENTS
      </div>

      <div className="col-span-3 bg-violet-900 text-white p-2 text-center font-bold">
        RESPONSE
      </div>

      {TableData.map((i, index) => (
        <React.Fragment key={index}>
          <div className="col-span-6 border p-5 px-10 text-left font-bold text-black">
            {i.text}
          </div>

          <div
            className={`col-span-3 border flex gap-5 justify-center items-center p-2 font-bold text-black
              ${result[index] === true ? "bg-green-600" : ""}
              ${result[index] === false ? "bg-red-500" : ""}
            `}
          >
            {i.option.map((opt, idx) => (
              <label key={idx} className="flex items-center gap-2 text-2xl">
                <input
                  type="radio"
                  name={`bill-${index}`}
                  value={opt}
                  onChange={(e) => handleCheck(i.val, e.target.value, index)}
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
