"use client";

import { useEffect, useState } from "react";
import ThirdSlideData from "@/src/layout-C53-L2-A1/slideThree.json";

// ----------- TYPES -----------
type QuestionType = {
  question: string;
  opt: string[];
  val: string;
};

const SlideThree = () => {
    const [correctBg, setCorrectBg] = useState<HTMLAudioElement>();
  // Har question ke liye selected option ko store karenge
  const [selectedOptions, setSelectedOptions] = useState<(string | null)[]>(
    Array(ThirdSlideData.length).fill(null)
  );

  useEffect(()=>{setCorrectBg(new Audio("/sound/correct.mp3"))},[])
  const handleClick = (qIndex: number, opt: string) => {
    setSelectedOptions((prev) => {
      const updated = [...prev];
      updated[qIndex] = opt;

      return updated;
    });

    if(opt === ThirdSlideData[qIndex].val){
        correctBg?.play();}
  };

  return (
    <>
      {ThirdSlideData.map((i: QuestionType, index: number) => (
        <div className="w-full flex justify-center items-center" key={index}>
          <div className="grid grid-cols-12 shadow w-[80%] mt-2 p-8">
            <div className="col-span-12 w-full flex justify-center items-center flex-col gap-5">
              <h3 className="text-center text-black text-lg w-[80%]">
                {i.question}
              </h3>

              <div className="flex gap-2">
                {i.opt.map((item: string, optIndex: number) => {

                  // Default violet
                  let colorClass = "bg-violet-900 text-white";

                  // User selected?
                  if (selectedOptions[index] === item) {
                    // Correct answer?
                    if (item === i.val) {
                      colorClass = "bg-green-600 text-white";
                    } else {
                      colorClass = "bg-red-600 text-white";
                    }
                  }

                  return (
                    <button
                      key={optIndex}
                      onClick={() => handleClick(index, item)}
                      className={`px-5 py-2 rounded-lg cursor-pointer ${colorClass}`}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SlideThree;
