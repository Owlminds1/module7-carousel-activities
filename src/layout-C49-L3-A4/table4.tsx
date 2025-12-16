"use client";

import React, { useState, useEffect } from "react";
import tableData from "@/src/layout-C49-L3-A4/tableData4.json";
import Image from "next/image";
import { SwiperClass } from "swiper/react";

type myProps = {
  swiperRef:React.RefObject<SwiperClass | null>;
}

export default function Table4Slide({swiperRef}:myProps) {
  const [shuffle, setShuffle] = useState<{ text: string; val: string }[]>([]);
  const [dragItem, setDragItem] = useState<{ text: string; val: string } | null>(null);

  // Store dropped items by box id
  const [dropItems, setDropItems] = useState<{ [key: string]: string[] }>({});

  useEffect(() => {
    setShuffle([...tableData].sort(() => Math.random() - 0.5));
  }, []);

  // HANDLE DRAG
  const handleDragStart = (item: { text: string; val: string }) => {
    setDragItem(item);
  };

  // HANDLE DROP
  const handleDrop = (e: React.DragEvent, key: string) => {
    if (!dragItem) return;

    // Correct Match Check
    if (dragItem.val === key) {
      swiperRef.current?.updateAutoHeight()
      setDropItems((prev) => ({
        ...prev,
        [key]: prev[key] ? [...prev[key], dragItem.text] : [dragItem.text],
      }));
      // Remove from left
      setShuffle((prev) => prev.filter((i) => i.text !== dragItem.text));
    } else {
      e.currentTarget.classList.add("shake");
      setTimeout(() => e.currentTarget.classList.remove("shake"), 500);
    }

    setDragItem(null);
  };

  return (
    <div className="w-full grid grid-cols-12 gap-5">

      

      {/* LEFT SIDE MASTER LIST */}
      <div className="col-span-4 p-3 flex flex-col gap-2">
        {shuffle.map((item, index) => (
          <h4
            key={index}
            draggable
            onDragStart={() => handleDragStart(item)}
            className="border p-2 text-black  cursor-grab text-center"
          >
            {item.text}
          </h4>
        ))}
      </div>

      {/* RIGHT SIDE DROP ZONE GRID */}
      <div className={`${shuffle.length === 0 ? "col-span-12":"col-span-8"}  grid grid-cols-12`}>
<div className="col-span-12 w-full text-center font-bold py-3 text-black">Gratitude vs. Arrogance</div>
        {/* RAGI IMAGE */}
        <div className="col-span-4 border"></div>
        <div className="col-span-4 flex flex-col justify-center items-center border">
          <div className="w-20 h-20 relative">
            <Image src="/C49Images/Gratitude.jpg" fill alt="Gratitude" />
          </div>
            <h4 className="text-black ">Gratitude</h4>
        </div>

        {/* ALL-PURPOSE IMAGE */}
         <div className="col-span-4 flex flex-col justify-center items-center border">
          <div className="w-20 h-20 relative">
            <Image src="/C49Images/Arrogance.png" fill alt="Arrogance" />
          </div>
            <h4 className="text-black ">Arrogance</h4>
        </div>
        {/* OUTCOMES */}
        <div className="col-span-4 font-bold text-center text-black p-2 border">Outcomes</div>

        {/* RAGI OUTCOMES DROP */}
        <div
          className="col-span-4  border-dashed border p-2"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e, "Gratitude-Outcomes")}
        >
          {(dropItems["Gratitude-Outcomes"] || []).map((t, i) => (
            <p key={i} className="border text-black text-center  p-1">{t}</p>
          ))}
        </div>

        {/* ALL-PURPOSE OUTCOMES DROP */}
        <div
          className="col-span-4  border p-2"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e, "Arrogance-Outcomes")}
        >
          {(dropItems["Arrogance-Outcomes"] || []).map((t, i) => (
            <p key={i} className="border text-black text-center  p-1">{t}</p>
          ))}
        </div>

        {/* REASONS */}
        <div className="col-span-4 font-bold text-center text-black p-2 border">Reasons</div>

        {/* RAGI REASONS */}
        <div
          className="col-span-4  border p-2"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e, "Gratitude-Reasons")}
        >
          {(dropItems["Gratitude-Reasons"] || []).map((t, i) => (
            <p key={i} className="border text-black text-center  p-1">{t}</p>
          ))}
        </div>

        {/* ALL-PURPOSE REASONS */}
        <div
          className="col-span-4  border p-2"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e, "Arrogance-Reasons")}
        >
          {(dropItems["Arrogance-Reasons"] || []).map((t, i) => (
            <p key={i} className="border text-center text-black  p-1">{t}</p>
          ))}
        </div>

        {/* IMPACT */}
        <div className="col-span-4 font-bold text-center p-2 border text-black">Impact</div>

        {/* RAGI IMPACT */}
        <div
          className="col-span-4  border p-2"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e, "Gratitude-Impact")}
        >
          {(dropItems["Gratitude-Impact"] || []).map((t, i) => (
            <p key={i} className="border text-center text-black  p-1">{t}</p>
          ))}
        </div>

        {/* ALL-PURPOSE IMPACT */}
        <div
          className="col-span-4  border p-2"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e, "Arrogance-Impact")}
        >
          {(dropItems["Arrogance-Impact"] || []).map((t, i) => (
            <p key={i} className="border text-center text-black  p-1">{t}</p>
          ))}
        </div>

      </div>
    </div>
  );
}
