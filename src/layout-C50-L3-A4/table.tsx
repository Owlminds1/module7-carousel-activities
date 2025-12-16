import TableData from "@/src/layout-C50-L3-A4/tableData.json";
import Image from "next/image";
import React, { useState } from "react";

type RowType = {
  ideal: string | number;
  actual: string | number;
  diff?: number;
};

const Table = () => {
  const [rows, setRows] = useState<RowType[]>(
    TableData.map(() => ({
      ideal: "",
      actual: "",
      diff: 0,
    }))
  );

  const handleChange = (
    index: number,
    field: "ideal" | "actual",
    value: string
  ) => {
    const newRows = [...rows];
    const num = Number(value);

    newRows[index][field] = value === "" ? "" : num; // keep empty if user deletes

    const ideal =
      newRows[index].ideal === "" ? null : Number(newRows[index].ideal);
    const actual =
      newRows[index].actual === "" ? null : Number(newRows[index].actual);

    // Only calculate diff if both values are entered
    if (ideal !== null && actual !== null) {
      newRows[index].diff = ideal - actual;
    } else {
      newRows[index].diff = 0; // default when one of the fields is empty
    }

    setRows(newRows);
  };

  return (
    <div className="flex flex-col gap-1 justify-start items-start w-full ">
      <div className="grid grid-cols-12 w-full  ">
        <div className="col-span-6 w-full grid grid-cols-12 border border-violet-300 p-2  ">
          <label
            htmlFor="name"
            className="col-span-4 text-xl text-violet-900  "
          >
            Name :{" "}
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="col-span-8  placeholder:text-gray-600 px-2 text-black  min-h-[30px] outline-0"
          />
        </div>

        <div className="col-span-6 w-full grid grid-cols-12 border border-violet-300 p-2  ">
          <label
            htmlFor="date"
            className=" col-span-4 text-xl text-violet-900  "
          >
            Date :{" "}
          </label>
          <input
            type="date"
            id="date"
            placeholder="Enter your name"
            className=" col-span-8 w-[40%] placeholder:text-gray-600 px-2 text-black  min-h-[30px] outline-0"
          />
        </div>

        <div className="col-span-6 w-full grid grid-cols-12 border border-violet-300 p-2  ">
          <label
            htmlFor="ALLOWANCE"
            className="  col-span-4 text-xl text-violet-900   "
          >
            Allowance :{" "}
          </label>
          <input
            type="text"
            id="ALLOWANCE"
            placeholder="Write here..."
            className=" col-span-8  placeholder:text-gray-600 px-2 text-black  min-h-[30px] outline-0"
          />
        </div>

        <div className="col-span-6 w-full grid grid-cols-12 border border-violet-300 p-2  ">
          <label
            htmlFor="SAVINGS"
            className="  col-span-4 text-xl text-violet-900   "
          >
            Savings :{" "}
          </label>
          <input
            type="text"
            id="SAVINGS"
            placeholder="Write here..."
            className="col-span-8  placeholder:text-gray-600 px-2 text-black  min-h-[30px] outline-0"
          />
        </div>
      </div>

      <div className="grid grid-cols-12 w-full  border border-black">
        <div className="col-span-3 font-bold  border border-white text-center bg-violet-900 text-white w-full  p-2  ">
          ITEM
        </div>

        <div className="col-span-3 font-bold border border-white  text-center bg-violet-900 text-white w-full  p-2  ">
          IDEAL
        </div>

        <div className="col-span-3 font-bold border border-white  text-center bg-violet-900 text-white w-full  p-2  ">
          ACTUAL
        </div>

        <div className="col-span-3 font-bold border border-white  text-center bg-violet-900 text-white w-full  p-2  ">
          DIFFERENCE
        </div>
        {TableData.map((i, index) => (
          <React.Fragment key={index}>
            <div className="col-span-3 flex justify-evenly items-center   font-bold border text-center text-black w-full  p-3  ">
              {i.text}
              <div className="w-20 h-20 border relative">
                <Image src={i.img} fill objectFit="cover" alt="images"/>
              </div>
            </div>

            <div className="col-span-3 font-bold border text-center text-black w-full  p-3  ">
              <input
                type="number"
                id="IDEAL"
                value={rows[index].ideal}
                min={0}
                placeholder="0"
                onChange={(e) => handleChange(index, "ideal", e.target.value)}
                className="col-span-8 text-center  placeholder:text-gray-600 px-2 text-black  min-h-[30px] outline-0"
              />
            </div>

            <div className="col-span-3 font-bold border text-center text-black w-full  p-3  ">
              <input
                type="number"
                id="actual"
                value={rows[index].actual}
                min={0}
                placeholder="0"
                onChange={(e) => handleChange(index, "actual", e.target.value)}
                className="col-span-8 text-center  placeholder:text-gray-600 px-2 text-black  min-h-[30px] outline-0"
              />
            </div>

            <div
              className={`
    col-span-3 font-bold border text-center w-full p-3
    ${
      rows[index].ideal === "" || rows[index].actual === ""
        ? "text-black"
        : rows[index].diff! > 0
        ? "text-red-800"
        : rows[index].diff! < 0
        ? "text-green-800"
        : "text-black"
    }
  `}
            >
              {rows[index].diff}
            </div>
          </React.Fragment>
        ))}

        
      </div>


       <div className="grid grid-cols-12 w-full border border-black  ">
        <div className="col-span-12 w-full  border border-violet-300 p-2  ">
         
          <textarea
           rows={3}
            id="NOTES"
            placeholder="Enter notes"
            className=" w-full placeholder:text-gray-600 text-xl  text-center p-2 text-black  min-h-[30px] outline-0"
          />
        </div>

     

       

       
      </div>
    </div>
  );
};

export default Table;
