"use client";

import React, { useState, useEffect } from "react";
import tableData from "@/src/layout-C50-L1-A3/tableData.json";
import Image from "next/image";
import { SwiperClass } from "swiper/react";

type myProps = {
  swiperRef: React.RefObject<SwiperClass | null>;
};

export default function TableSlide({ swiperRef }: myProps) {
  const [shuffle, setShuffle] = useState<{ text: string; val: string }[]>([]);
  const [dragItem, setDragItem] = useState<{
    text: string;
    val: string;
  } | null>(null);

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
      swiperRef.current?.updateAutoHeight();
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
      <div className="col-span-4 px-3 flex flex-col gap-2">
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
      <div
        className={`${
          shuffle.length === 0 ? "col-span-12" : "col-span-8"
        }  grid grid-cols-12`}
      >
        

        <div className="col-span-4 font-bold text-center text-black p-2 border">
          CHOICE
        </div>
        <div className="col-span-4 font-bold text-center text-black p-2 border">
          REASONS
        </div>
        <div className="col-span-4 font-bold text-center text-black p-2 border">
          Outcomes
        </div>

        {/* ======================== */}
        {/* Water IMAGE */}
        <div className="col-span-4 flex flex-col justify-center items-center border">
          <div className="w-20 h-20 relative">
            <Image src="/C49Images/Water.jpg" fill alt="ragi" />
          </div>
          <h4 className="text-black ">Water</h4>
        </div>

        {/*  REASONS */}
        <div
          className="col-span-4  border p-2"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e, "Water-Reasons")}
        >
          {(dropItems["Water-Reasons"] || []).map((t, i) => (
            <p key={i} className="border text-black text-center  p-1">
              {t}
            </p>
          ))}
        </div>

        <div
          className="col-span-4  border-dashed border p-2"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e, "Water-Outcomes")}
        >
          {(dropItems["Water-Outcomes"] || []).map((t, i) => (
            <p key={i} className="border text-black text-center  p-1">
              {t}
            </p>
          ))}
        </div>

        {/* =========================== */}

        {/* ======================== */}
        {/* Water IMAGE */}
        <div className="col-span-4 flex flex-col justify-center items-center border">
          <div className="w-20 h-20 relative">
            <Image src="/C50Images/HW.jpg" fill alt="ragi" />
          </div>
          <h4 className="text-black ">Homework</h4>
        </div>

        {/*  REASONS */}

        <div
          className="col-span-4  border-dashed border p-2"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e, "Homework-REASONS")}
        >
          {(dropItems["Homework-REASONS"] || []).map((t, i) => (
            <p key={i} className="border text-black text-center  p-1">
              {t}
            </p>
          ))}
        </div>

        <div
          className="col-span-4  border p-2"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e, "Homework-Outcomes")}
        >
          {(dropItems["Homework-Outcomes"] || []).map((t, i) => (
            <p key={i} className="border text-black text-center  p-1">
              {t}
            </p>
          ))}
        </div>

        {/* =========================== */}

        {/* ======================== */}
        {/* Water IMAGE */}
        <div className="col-span-4 flex flex-col justify-center items-center border">
          <div className="w-20 h-20 relative">
            <Image src="/C50Images/prep.jpg" fill alt="ragi" />
          </div>
          <h4 className="text-black ">Preparing for Exams</h4>
        </div>

        {/*  REASONS */}

        <div
          className="col-span-4  border-dashed border p-2"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e, "Preparing-REASONS")}
        >
          {(dropItems["Preparing-REASONS"] || []).map((t, i) => (
            <p key={i} className="border text-black text-center  p-1">
              {t}
            </p>
          ))}
        </div>

        <div
          className="col-span-4  border p-2"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e, "Preparing-Outcomes")}
        >
          {(dropItems["Preparing-Outcomes"] || []).map((t, i) => (
            <p key={i} className="border text-black text-center  p-1">
              {t}
            </p>
          ))}
        </div>

        {/* =========================== */}

        {/* ======================== */}
        {/* Water IMAGE */}
        <div className="col-span-4 flex flex-col justify-center items-center border">
          <div className="w-20 h-20 relative">
            <Image src="/C50Images/Sleep.jpg" fill alt="ragi" />
          </div>
          <h4 className="text-black ">Sleeping on Time</h4>
        </div>

        {/*  REASONS */}

        <div
          className="col-span-4  border-dashed border p-2"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e, "Sleeping-REASONS")}
        >
          {(dropItems["Sleeping-REASONS"] || []).map((t, i) => (
            <p key={i} className="border text-black text-center  p-1">
              {t}
            </p>
          ))}
        </div>

        <div
          className="col-span-4  border p-2"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e, "Sleeping-Outcomes")}
        >
          {(dropItems["Sleeping-Outcomes"] || []).map((t, i) => (
            <p key={i} className="border text-black text-center  p-1">
              {t}
            </p>
          ))}
        </div>

        {/* =========================== */}



         {/* ======================== */}
        {/* Water IMAGE */}
        <div className="col-span-4 flex flex-col justify-center items-center border">
          <div className="w-20 h-20 relative">
            <Image src="/C50Images/Kind.jpg" fill alt="ragi" />
          </div>
          <h4 className="text-black ">Being Kind</h4>
        </div>

        {/*  REASONS */}

        <div
          className="col-span-4  border-dashed border p-2"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e, "Being-Kind-REASONS")}
        >
          {(dropItems["Being-Kind-REASONS"] || []).map((t, i) => (
            <p key={i} className="border text-black text-center  p-1">
              {t}
            </p>
          ))}
        </div>

        <div
          className="col-span-4  border p-2"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e, "Being-Kind-Outcomes")}
        >
          {(dropItems["Being-Kind-Outcomes"] || []).map((t, i) => (
            <p key={i} className="border text-black text-center  p-1">
              {t}
            </p>
          ))}
        </div>

        {/* =========================== */}
        
        
         {/* ======================== */}
        {/* Water IMAGE */}
        <div className="col-span-4 flex flex-col justify-center items-center border">
          <div className="w-20 h-20 relative">
            <Image src="/C50Images/planning.jpg" fill alt="ragi" />
          </div>
          <h4 className="text-black ">Planning Schedule</h4>
        </div>

        {/*  REASONS */}

        <div
          className="col-span-4  border-dashed border p-2"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e, "Planning-Schedule-REASONS")}
        >
          {(dropItems["Planning-Schedule-REASONS"] || []).map((t, i) => (
            <p key={i} className="border text-black text-center  p-1">
              {t}
            </p>
          ))}
        </div>

        <div
          className="col-span-4  border p-2"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e, "Planning-Schedule-Outcomes")}
        >
          {(dropItems["Planning-Schedule-Outcomes"] || []).map((t, i) => (
            <p key={i} className="border text-black text-center  p-1">
              {t}
            </p>
          ))}
        </div>

        {/* =========================== */}


          {/* ======================== */}
        {/* Water IMAGE */}
        <div className="col-span-4 flex flex-col justify-center items-center border">
          <div className="w-20 h-20 relative">
            <Image src="/C50Images/Reading.jpg" fill alt="ragi" />
          </div>
          <h4 className="text-black ">Reading</h4>
        </div>

        {/*  REASONS */}

        <div
          className="col-span-4  border-dashed border p-2"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e, "Reading-REASONS")}
        >
          {(dropItems["Reading-REASONS"] || []).map((t, i) => (
            <p key={i} className="border text-black text-center  p-1">
              {t}
            </p>
          ))}
        </div>

        <div
          className="col-span-4  border p-2"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e, "Reading-Outcomes")}
        >
          {(dropItems["Reading-Outcomes"] || []).map((t, i) => (
            <p key={i} className="border text-black text-center  p-1">
              {t}
            </p>
          ))}
        </div>

        {/* =========================== */}
      </div>
    </div>
  );
}
