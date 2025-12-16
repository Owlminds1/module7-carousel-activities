"use client";

import React, { useEffect, useRef, useState } from "react";

import DragData from "@/src/layout-C49-L1-A4/drag2Data.json";
import DropZone1 from "@/src/layout-C49-L1-A4/dropZone2.json";
import MyImage from "@/components/myImage";
import Image from "next/image";

type Item = {
  text: string;
  value: string;
};

export default function DragSlide2() {
  const [shuffle, setShuffle] = useState<Item[]>(DragData);
  const [dropItems, setDropItems] = useState<{ [key: number]: string[] }>({});

  // Shuffle items on first load

  useEffect(() => {
    const shuffled = [...shuffle].sort(() => Math.random() - 0.5);
    setShuffle(shuffled);
  }, []);

  const onDragStart = (e: React.DragEvent, item: Item) => {
    e.dataTransfer.setData("drag", JSON.stringify(item));
  };

  const onDrop = (e: React.DragEvent, val: string, dropIndex: number) => {
    const dragItem = JSON.parse(e.dataTransfer.getData("drag"));
    if (val === dragItem.value) {
      setDropItems((prev) => ({
        ...prev,
        [dropIndex]: prev[dropIndex]
          ? [...prev[dropIndex], dragItem.text]
          : [dragItem.text],
      }));

      setShuffle((prev) => prev.filter((i) => i.text !== dragItem.text));
    }
  };

  return (
    <div className="grid grid-cols-12 gap-6 p-6 w-full">
      {/* HIDE LEFT LIST WHEN EMPTY */}
      {shuffle.length > 0 && (
        <div className="p-4 col-span-4 border rounded-lg bg-white shadow">
          {shuffle.map((item, index) => (
            <div
              key={index}
              draggable
              onDragStart={(e) => onDragStart(e, item)}
              className="p-3 mb-2 bg-violet-900 text-center text-white rounded-lg cursor-grab active:cursor-grabbing shadow"
            >
              {item.text}
            </div>
          ))}
        </div>
      )}

      {/* RIGHT COLUMNS FULL WIDTH WHEN LEFT EMPTY */}
      <div
        className={`col-span-8 grid grid-cols-2 gap-4 ${
          shuffle.length === 0 ? "col-span-12" : ""
        }`}
      >
        {DropZone1.map((item, dropIndex) => (
          <div
            key={dropIndex}
            className={`${
              dropIndex === 2
                ? ""
                : "p-4 border border-dashed border-violet-900 min-h-[200px] rounded-xl"
            }`}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => onDrop(e, item.val, dropIndex)}
          >
            <div className="flex flex-col justify-center items-center gap-1 mb-3">
              <h3 className="text-black mb-3 text-center font-bold">
                {item.val}
              </h3>
              <div className="w-20 h-20 relative border">
                <Image src={item.img} alt="image" fill objectFit="cover" />
              </div>
            </div>

            {dropItems[dropIndex]?.map((i, idx) => (
              <div
                key={idx}
                className="p-2 bg-violet-900 text-white text-center rounded-lg mb-2"
              >
                {i}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
