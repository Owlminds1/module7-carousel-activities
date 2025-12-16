"use client";
import masterList from "@/src/layout-C52-L3-A3/masterList.json";
import dropZone from "@/src/layout-C52-L3-A3/dropZone.json";
import React, { useEffect, useState } from "react";
import MyImage from "@/components/myImage";
import Image from "next/image";

type dragDataType = {
  text: string;
  val: string;
};

const FirstSlide = () => {
  const [dropItems, setDropItems] = useState<{ [key: number]: string[] }>({});
  const [correctBg, setCorrectBg] = useState<HTMLAudioElement>();
  const [shuffleMl, setShuffleMl] = useState(masterList);

  useEffect(() => {
    setShuffleMl((prev) => [...prev].sort(() => Math.random() - 0.5));
    setCorrectBg(() => new Audio("/sound/correct.mp3"));
  }, []);

  const hadleDrag = (e: React.DragEvent, item: dragDataType) => {
    e.dataTransfer.setData("text", JSON.stringify(item));
  };

  const handleDrop = (e: React.DragEvent, val: string, index: number) => {
    const dragItem = JSON.parse(e.dataTransfer.getData("text"));

    if (val === dragItem.val) {
      setDropItems((prev) => ({
        ...prev,

        [index]: prev[index]
          ? [...prev[index], dragItem.text]
          : [dragItem.text],
      }));

      correctBg?.play();

      setShuffleMl((prev) => prev.filter((item) => item.text != dragItem.text));
    }else{
        e.currentTarget.classList.add("shake")
    }
  };

  return (
    <div className="grid grid-cols-12 gap-3 w-full place-items-start ">
        
<div className="col-span-12 w-full flex justify-center items-center">
    <MyImage path="/C52Images/DP.jpeg"/>
</div>



      <div
        className={`${
          shuffleMl.length === 0
            ? " col-span-0"
            : "col-span-3 w-full shadow p-5 rounded-lg flex gap-1 justify-center items-center flex-wrap"
        }`}
      >
        {shuffleMl.map((item, index) => (
          <h3
            key={index}
            draggable
            onDragStart={(e) => hadleDrag(e, item)}
            className="border text-white bg-violet-900 p-2 active:scale-95 hover:cursor-grab active:cursor-grabbing transition-all duration-150 rounded-lg text-sm"
          >
            {item.text}
          </h3>
        ))}
      </div>
      <div
        onDragOver={(e) => e.preventDefault()}
        className={`${
          shuffleMl.length === 0 ? " col-span-12" : "col-span-9"
        }  w-full grid grid-cols-10 gap-0.5`}
      >
        <div className="col-span-2 bg-violet-900 p-2 text-sm  text-nowrap text-white text-center font-bold w-full ">
          METHOD
        </div>
        <div
         className="col-span-2 bg-violet-900 p-2 text-sm  text-nowrap text-white text-center font-bold w-full ">
          ABOUT
        </div>
        <div className="col-span-2 bg-violet-900 p-2 text-sm  text-nowrap text-white text-center font-bold w-full ">
          RECURRING PAYMENTS?
        </div>
        <div className="col-span-2 bg-violet-900 p-2 text-sm  text-nowrap text-white text-center font-bold w-full ">
          REFUDS?
        </div>
        <div className="col-span-2 bg-violet-900 p-2 text-sm  text-nowrap text-white text-center font-bold w-full ">
          CONFIRMATION
        </div>

        {dropZone.map((drop, dropIndex) => (
          <React.Fragment key={dropIndex}>
            <div className="col-span-2 border flex-col   flex justify-center items-center p-1 text-black text-center w-full ">
                         {drop.method}
                         <div className="w-15 h-15 relative">
                           <Image fill alt={drop.method} objectFit="cover" src={drop.img}/>
                         </div>
                       </div>
            <div
              onDrop={(e) => handleDrop(e, drop.method, dropIndex)}
              onDragOver={(e)=>e.currentTarget.classList.remove("shake") }
              className="col-span-2  min-h-20 flex justify-center items-center p-1 border border-violet-300 border-dashed text-black text-center w-full "
            >
              {dropItems[dropIndex]  ?  dropItems[dropIndex]?.map((i, idx) => (
                <h4 className="text-violet-900 text-sm " key={idx}>
                  {i}
                </h4> 
              )) : <span className="text-gray-600">Drop Here</span>}
            </div>

            <div className="col-span-2  border flex justify-center items-center text-black text-center w-full ">
              --
            </div>
            <div className="col-span-2  border flex justify-center items-center text-black text-center w-full ">
              --
            </div>
            <div className="col-span-2  border flex justify-center items-center text-black text-center w-full ">
              --
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default FirstSlide;
