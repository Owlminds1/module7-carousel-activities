"use client";

import Welldone from "@/components/wellDone";
import { useEffect, useRef, useState } from "react";

/* ================= TYPES ================= */

type MLItem = {
  id: number;
  text: string;
  row: "spend" | "save" | "invest" | "give";
  column: "why" | "how";
};

type RowState = {
  why?: MLItem;
  how?: MLItem;
};

type TableState = {
  spend: RowState;
  save: RowState;
  invest: RowState;
  give: RowState;
};

/* ================= DATA ================= */

const INITIAL_ITEMS: MLItem[] = [
  {
    id: 1,
    text: "If we spend less than what we have, we will always have money left over.",
    row: "spend",
    column: "why",
  },
  {
    id: 2,
    text: "Items to help buy things and budget: money, credit card, cheque book, coupon",
    row: "spend",
    column: "how",
  },
  {
    id: 3,
    text: "The more money we save today, the more money we will have in the future.",
    row: "save",
    column: "why",
  },
  {
    id: 4,
    text: "Items to help to save: Bank, Mom & Dad, Piggy Bank, Wallet",
    row: "save",
    column: "how",
  },
  {
    id: 5,
    text: "We can invest in businesses by buying stocks, bonds, and mutual funds.",
    row: "invest",
    column: "why",
  },
  {
    id: 6,
    text: "Items to help to invest: Stocks, Buildings, Gold, Bonds",
    row: "invest",
    column: "how",
  },
  {
    id: 7,
    text: "When we give money to others, they can help themselves and their family.",
    row: "give",
    column: "why",
  },
  {
    id: 8,
    text: "Places to give items as gifts: church, charity, family, school",
    row: "give",
    column: "how",
  },
];

const ROWS = [
  {
    id: "spend",
    label: "Spend Cautiously",
    img: "/C50Images/Spend_Cautiously.png",
  },
  {
    id: "save",
    label: "Save Diligently",
    img: "/C50Images/Save_Diligently.png",
  },
  { id: "invest", label: "Invest Wisely", img: "/C50Images/Invest_Wisely.png" },
  {
    id: "give",
    label: "Give Generously",
    img: "/C50Images/Give_Generously.png",
  },
] as const;

/* ================= COMPONENT ================= */

export default function DragSlide() {
  const [open,setOpen] =useState(false)
  // shuffle ML once
  const [available, setAvailable] = useState<MLItem[]>(
    [...INITIAL_ITEMS].sort(() => Math.random() - 0.5)
  );

  const [table, setTable] = useState<TableState>({
    spend: {},
    save: {},
    invest: {},
    give: {},
  });

  const draggedItem = useRef<MLItem | null>(null);

  /* ============ DRAG HANDLERS ============ */

  const onDragStart = (item: MLItem) => {
    draggedItem.current = item;
  };

  const onDrop = (row: MLItem["row"], column: MLItem["column"]) => {
    const item = draggedItem.current;
    if (!item) return;

    // ❌ wrong row OR wrong column
    if (item.row !== row || item.column !== column) {
      draggedItem.current = null;
      return;
    }

    // ❌ already filled
    if (table[row][column]) {
      draggedItem.current = null;
      return;
    }

    setTable((prev) => ({
      ...prev,
      [row]: {
        ...prev[row],
        [column]: item,
      },
    }));

    setAvailable((prev) => prev.filter((i) => i.id !== item.id));
    draggedItem.current = null;
  };


useEffect(()=>{
if(available.length === 0 ){
 setOpen(true)
}
},[available])

  /* ================= UI ================= */

  return (
    <div className="grid grid-cols-12 gap-6 p-6 w-full">
      {/* ========== LEFT : ML ========== */}
      {available.length > 0 && (
        <div className="col-span-4 bg-white border rounded-lg p-2">
          {available.map((item) => (
            <div
              key={item.id}
              draggable
              onDragStart={() => onDragStart(item)}
              className="p-3 mb-3 border  text-violet-900 font-bold text-center rounded cursor-grab active:cursor-grabbing shadow"
            >
              {item.text}
            </div>
          ))}
        </div>
      )}

      {/* ========== RIGHT : TABLE ========== */}
      <div
        className={`${
          available.length === 0 ? "col-span-12" : "col-span-8"
        } w-full`}
      >
        {/* HEADER */}
        <div className="grid grid-cols-3 bg-violet-900 font-bold text-center p-2">
          <div>WHAT</div>
          <div>WHY</div>
          <div>HOW</div>
        </div>

        {/* ROWS */}
        {ROWS.map((row) => (
          <div key={row.id} className="grid grid-cols-3 border-b min-h-[110px]">
            {/* WHAT (fixed) */}
            <div className="bg-gray-100 flex flex-col items-center justify-center p-3">
              <span className="font-semibold text-black text-center">
                {row.label}
              </span>
              <img src={row.img} alt={row.label} className="w-30 mb-2" />
            </div>

            {/* WHY (drop) */}
            <div
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => onDrop(row.id, "why")}
              className="border-l p-3 text-black flex items-center justify-center text-center"
            >
              {table[row.id].why ? (
                table[row.id].why!.text
              ) : (
                <span className="text-gray-400">Drop here</span>
              )}
            </div>

            {/* HOW (drop) */}
            <div
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => onDrop(row.id, "how")}
              className="border-l p-3 text-black flex items-center justify-center text-center"
            >
              {table[row.id].how ? (
                table[row.id].how!.text
              ) : (
                <span className="text-gray-400">Drop here</span>
              )}
            </div>
          </div>
        ))}
      </div>
      <Welldone open={open} setOpen={setOpen}/>
    </div>
  );
}
