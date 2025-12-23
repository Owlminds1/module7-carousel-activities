"use client";

import Image from "next/image";

import masterList from "@/src/layout-C49-L1-A1/dragData.json";
import dropZone from "@/src/layout-C49-L1-A1/drop.json";
import { useEffect, useState } from "react";

type ItemType = {
  label: string;
  img: string;
  type: string;
};

const DragSlide = () => {
  const [shuffle, setShuffle] = useState<ItemType[]>(masterList);
  const [dropItems, setDropItems] = useState<{ [key: number]: ItemType[] }>({});

  useEffect(() => {
    setShuffle((prev) => [...prev].sort(() => Math.random() - 0.5));
  }, []);

  const handleDragStart = (e: React.DragEvent, item: ItemType) => {
    e.dataTransfer.setData("drag", JSON.stringify(item));
  };

  const handleDrop = (e: React.DragEvent, item: string, index: number) => {
    const dragItem = JSON.parse(e.dataTransfer.getData("drag"));

    if (dragItem.type === item) {
      setDropItems((prev) => ({
        ...prev,

        [index]: prev[index] ? [...prev[index], dragItem] : [dragItem],
      }));


setShuffle((prev)=>[...prev].filter((i)=>i.label !== dragItem.label))

    }
  };

  return (
    <div className="grid grid-cols-12  gap-3 w-full">
      <div className={`${shuffle.length === 0 ? "col-span-0" :"col-span-4 w-full shadow p-2 flex justify-center items-center gap-2 flex-wrap"} `}>
        {shuffle.map((item, index) => (
          <div
            draggable
            onDragStart={(e) => handleDragStart(e, item)}
            key={index}
            className="border hover:cursor-grab active:cursor-grabbing flex justify-center items-center flex-col active:scale-95 transition-all duration-150"
          >
            <div draggable className="w-30 h-20 relative ">
              <Image objectFit="cover" objectPosition="top center"  src={item.img} fill alt="images" />
            </div>
            <h4 className="text-sm capitalize p-1 text-center text-black">{item.label}</h4>
          </div>
        ))}
      </div>
      <div className={`${shuffle.length === 0 ? "col-span-12" :"col-span-8"}  w-full shadow gap-1  grid grid-cols-12 `}>
        {dropZone.map((drop, dIndex) => (
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDrop(e, drop, dIndex)}
            key={dIndex}
            className="col-span-6 w-full min-h-[300px] border "
          >
            <h3 className="w-full bg-violet-900 p-1 text-center">{drop}</h3>

            <div className="flex justify-center items-center flex-wrap p-3 gap-2">
              {dropItems[dIndex]?.map((i, idx) => (
               <div
         
            key={idx}
            className="border hover:cursor-grab active:cursor-grabbing flex justify-center items-center flex-col active:scale-95 transition-all duration-150"
          >
            <div className="w-30 h-20 relative bg-amber-400">
              <Image objectFit="cover" objectPosition="top center" src={i.img} fill alt="images" />
            </div>
            <h4 className="text-sm capitalize p-1 text-center text-black">{i.label}</h4>
          </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DragSlide;
