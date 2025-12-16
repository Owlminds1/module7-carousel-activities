import TableData from "@/src/layout-C52-L2-A4/tableData.json";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const ThirdSlide = () => {
  // store selected option per row
  const [selected, setSelected] = useState<{ [key: number]: number }>({});
  const [correct,setCorrect]=useState<HTMLAudioElement>()
  useEffect(()=>{
setCorrect(()=>new Audio("/sound/correct.mp3"))
  },[])

  const handleCheck = (
    val: string,
    opt: string,
    rowIndex: number,
    optIndex: number
  ) => {
    setSelected((prev) => ({ ...prev, [rowIndex]: optIndex }));

    if (opt===val) correct?.play() 
  };

  return (
    <div className="grid grid-cols-9 w-full p-5">


      
      <div className="col-span-6 bg-violet-900 text-white p-2 text-center font-bold">
        STATEMENTS
      </div>

      <div className="col-span-3 bg-violet-900 text-white p-2 text-center font-bold">
        RESPONSE
      </div>

      {TableData.map((i, rowIndex) => (
        <React.Fragment key={rowIndex}>
          <div className="col-span-6  flex  justify-evenly items-center gap-1 border p-5 px-10 text-left font-bold text-black">
            <div className="w-35 h-30 relative">
<Image src={i.img} fill alt="images" objectFit="contain"/>
            </div>
            <h4 className=" text-center w-full">{i.text}</h4>
          </div>

          <div className="col-span-3 border flex gap-5 justify-center items-center p-2">
            {i.option.map((opt, optIndex) => {
              const isSelected = selected[rowIndex] === optIndex;
              const isCorrect = opt === i.val;

              return (
                <button
                  key={optIndex}
                  onClick={() =>
                    handleCheck(i.val, opt, rowIndex, optIndex)
                  }
                  className={`
                    min-w-1/3 text-center text-white px-5 py-2 rounded-lg 
                    active:scale-95 transition-all duration-200 cursor-pointer
                    ${
                      isSelected
                        ? isCorrect
                          ? "bg-green-600"
                          : "bg-red-500 shake"
                        : "bg-violet-900"
                    }
                  `}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default ThirdSlide;
