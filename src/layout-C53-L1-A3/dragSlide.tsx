"use client";
import DragData from "@/src/layout-C53-L1-A3/dragList.json";
import DropZone from "@/src/layout-C53-L1-A3/drop.json";
import Image from "next/image";
import { useState } from "react";

type dragDataType = {
  item: string;
  val: string;
};

const DragSlide = () => {
  const [managDragData, setManageDragData] = useState<dragDataType[]>(DragData);

  const [dragItems, setDragItems] = useState<{
    [key: number]: string[];
  }>({});

  const handleDrag = (
    e: React.DragEvent<HTMLHeadingElement>,
    item: dragDataType
  ) => {
    e.dataTransfer.setData("text/plain", JSON.stringify(item));
  };

  const handleDrop = (
    e: React.DragEvent<HTMLDivElement>,
    val: string,
    index: number
  ) => {
    const dragItem = JSON.parse(e.dataTransfer.getData("text/plain"));

    if (dragItem.val === val) {
      setDragItems((prev) => ({
        ...prev,
        [index]: prev[index]
          ? [...prev[index], dragItem.item]
          : [dragItem.item],
      }));

      setManageDragData((prev) => prev.filter((i) => i.item !== dragItem.item));
    } else {
      e.currentTarget.classList.add("shake");
    }
  };


  return (
    <div className=" grid grid-cols-12 w-full p-2 gap-4">
      <div className="col-span-5  shadow w-full flex flex-col gap-5 justify-center items-center p-2">
        <Image src="/C53Images/Matching.jpg" width={300} height={100} alt="image" />
        <div className="flex justify-center  flex-wrap gap-2">
          {managDragData.map((item, index) => (
            <h3
              onDragStart={(e) => handleDrag(e, item)}
              draggable="true"
              className="bg-violet-900 px-5 py-2 rounded-lg  text-white hover:cursor-grab active:cursor-grabbing active:scale-95 transition-all duration-100"
              key={index}
            >
              {item.item}
            </h3>
          ))}
        </div>
      </div>

      <div className={`col-span-7 shadow  grid grid-cols-12 w-full gap-0.5 `}>
        {DropZone.map((drop, dropIndex) => (
          <div
            onDragOver={(e) => {
              e.preventDefault();
              e.currentTarget.classList.remove("shake");
            }}
            onDrop={(e) => handleDrop(e, drop, dropIndex)}
            className="col-span-4 w-full border text-center "
            key={dropIndex}
          >
            <h4 className="bg-violet-900 text-white p-2 "> {drop}</h4>

            <div className="  m-2 flex flex-wrap justify-center gap-1 ">
              {dragItems[dropIndex]?.map((dropItem, indx) => (
                <div
                  className="relative bg-violet-100 w-full inline justify-center p-2 items-center "
                  key={indx}
                >
                  <h3 className=" px-5 py-2 rounded-lg  text-black font-bold">
                    {dropItem}
                  </h3>
               
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
