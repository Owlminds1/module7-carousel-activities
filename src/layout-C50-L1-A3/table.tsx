"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { SwiperClass } from "swiper/react";

import MasterList from "@/src/layout-C50-L1-A3/master.json";
import Reasons from "@/src/layout-C50-L1-A3/reasons.json";
import Outcomes from "@/src/layout-C50-L1-A3/outcomes.json";

import { DropdownMenuDemo } from "./dropDown";
import Welldone from "@/components/wellDone";

type myProps = {
  swiperRef: React.RefObject<SwiperClass | null>;
};

type SelectedItem = {
  text: string;
  correct: boolean;
};

type SelectedState = {
  [key: string]: {
    reason?: SelectedItem;
    outcome?: SelectedItem;
  };
};

export default function TableSlide({ swiperRef }: myProps) {
  const [selected, setSelected] = useState<SelectedState>({});
  const [open,setOpen] =useState(false)

 const handleSelect = (
  rowVal: string,
  type: "reason" | "outcome",
  item: { text: string; val: string }
) => {
  const expectedVal =
    `${rowVal}-${type === "reason" ? "reasons" : "Outcomes"}`;

  const isCorrect = item.val === expectedVal;

  swiperRef.current?.updateAutoHeight();

  setSelected((prev) => ({
    ...prev,
    [rowVal]: {
      ...prev[rowVal],
      [type]: { text: item.text, correct: isCorrect },
    },
  }));
};


  // ✅ CHECK IF ALL ANSWERS ARE CORRECT
  const allCorrect = MasterList.every((row) => {
  const rowKey = row.val;

    return (
      selected[rowKey]?.reason?.correct === true &&
      selected[rowKey]?.outcome?.correct === true
    );
  });

 useEffect(() => {
  if (allCorrect) {
    setOpen(true);
  }
}, [allCorrect]);


  return (
    <div className="w-full grid grid-cols-12 gap-5">
      <div className="col-span-12 grid grid-cols-12">
        {/* HEADERS */}
        <div className="col-span-4 border p-2 font-bold text-center text-black">
          CHOICE
        </div>
        <div className="col-span-4 border p-2 font-bold text-center text-black">
          REASONS
        </div>
        <div className="col-span-4 border p-2 font-bold text-center text-black">
          OUTCOMES
        </div>

        {MasterList.map((row, index) => {
           const rowKey = row.val; // 👈 IMPORTANT

          return (
            <React.Fragment key={index}>
              {/* CHOICE */}
              <div className="col-span-4 flex flex-col items-center border p-2">
                <div className="w-20 h-20 relative">
                  <Image src={row.img} fill alt={row.name} />
                </div>
                <h4 className="text-black mt-1">{row.name}</h4>
              </div>

              {/* REASON */}
              <div className="col-span-4 border p-2 text-center">
                <DropdownMenuDemo
                  items={Reasons}
                  onSelect={(item) =>
                    handleSelect(rowKey, "reason", item)
                  }
                />

                {selected[rowKey]?.reason && (
                  <p
                    className={`font-bold mt-2 ${
                      selected[rowKey]!.reason!.correct
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {selected[rowKey]!.reason!.text}
                  </p>
                )}
              </div>

              {/* OUTCOME */}
              <div className="col-span-4 border p-2 text-center">
                <DropdownMenuDemo
                  items={Outcomes}
                  onSelect={(item) =>
                    handleSelect(rowKey, "outcome", item)
                  }
                />

                {selected[rowKey]?.outcome && (
                  <p
                    className={`font-bold mt-2 ${
                      selected[rowKey]!.outcome!.correct
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {selected[rowKey]!.outcome!.text}
                  </p>
                )}
              </div>
            </React.Fragment>
          );
        })}

        {/* 🎉 CELEBRATION */}
        {allCorrect && (
         <Welldone open={open} setOpen={setOpen}/>
        )}
      </div>
    </div>
  );
}
