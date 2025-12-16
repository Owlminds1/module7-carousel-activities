"use client";
import React, { useEffect, useState } from "react";
import cardData from "@/src/layout-C52-L3-A2/tableData.json";

const Slide4 = () => {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const [shuffle, setShuffle] = useState(cardData);
  const [activeBtntnIndex, setActiveBtnIndex] = useState<{
    [key: number]: number;
  }>({});
  const [correct, setCorrect] = useState<HTMLAudioElement>();

  // Shuffle cards on first render
  useEffect(() => {
    setShuffle((prev) => [...prev].sort(() => Math.random() - 0.5));
  }, []);

  useEffect(() => {
    setCorrect(() => new Audio("/sound/correct.mp3"));
  }, []);
  // 🔥 Card flip logic
  const handleFlip = (index: number) => {
    setFlippedIndex(index);
  };

  const handleClick = (
    e: any,
    select: string,
    val: string,
    cardIndex: number,
    index: number
  ) => {
    setActiveBtnIndex((prev) => ({ ...prev, [cardIndex]: index }));
    if (val === select) {
      correct?.play();
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FCFA] flex flex-col justify-start items-center p-5 gap-10">
      <div className="grid grid-cols-12 w-[80%] place-items-center gap-3">
        {shuffle.map((item, index) => (
          <div
            key={index}
            className="col-span-4 relative w-full h-[200px] [perspective:1000px] cursor-pointer"
            onClick={() => handleFlip(index)}
          >
            <div
              className={`transition-transform duration-700 w-full h-full 
                [transform-style:preserve-3d]
                ${flippedIndex === index ? "[transform:rotateY(180deg)]" : ""}`}
            >
              {/* FRONT SIDE */}
              <div
                className={`absolute w-full border-2 p-2 border-black h-full rounded-lg 
                flex justify-center items-center 
                [backface-visibility:hidden]
                bg-white
                ${
                  flippedIndex === index
                    ? "pointer-events-none"
                    : "pointer-events-auto"
                }`}
              >
                <h2 className="text-lg text-center text-black font-bold">
                  {item.name}
                </h2>
              </div>

              {/* BACK SIDE */}
              <div
                className="absolute w-full h-full border border-black rounded-lg 
                flex justify-center items-center flex-wrap gap-3
                [transform:rotateY(180deg)] [backface-visibility:hidden]
                p-3 bg-violet-100 z-20 pointer-events-auto"
              >
                {item.opt.map((btn: string, btnIndex: number) => (
                  <button
                    key={btnIndex}
                    className={`${
                      activeBtntnIndex[index] === btnIndex
                        ? item.val === btn
                          ? "bg-green-700"
                          : "bg-red-500"
                        : "bg-violet-900"
                    } text-white  text-sm px-5 py-1 rounded-lg 
                    cursor-pointer active:scale-95 z-30 w-[80%] text-center`}
                    onClick={(e) => {
                      handleClick(e, btn, item.val, index, btnIndex);
                    }}
                  >
                    {btn}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slide4;
