"use client";

import Image from "next/image";
import { RefObject, useEffect, useState } from "react";
import DragDataJson from "@/src/layout-C50-L3-A5/drag.json";
import Welldone from "./wellDone";
import { SwiperClass } from "swiper/react";

type myprops={
  swiperRef: RefObject<SwiperClass | null>;
}

interface DragItem {
  item: string;
  price: number;
  image: string;
  val: string;
  quantity:number
}

interface DroppedItem extends DragItem {
  qty: number;
  total: number;
  reason: string;
  maxQty:number
}

const DragDropTable = ({swiperRef}:myprops) => {
  const [open,setOpen]=useState(false)
  const [message,setMessage]=useState("")
  const DragData = DragDataJson as DragItem[];
  const [shuffleData,setShuffleData]=useState(DragData)
  const [droppedItems, setDroppedItems] = useState<DroppedItem[]>([]);

useEffect(()=>{
setShuffleData((prev)=>[...prev].sort(()=>Math.random()- 0.5))
},[])

useEffect(()=>{
   swiperRef.current?.updateAutoHeight()
},[droppedItems])
  const usableBudget = 80; // 100 - 20 savings

  // DRAG START
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, item: DragItem) => {
    e.dataTransfer.setData("item", JSON.stringify(item));
  };

  // ALLOW DROP
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  // DROP
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const raw = e.dataTransfer.getData("item");
    if (!raw) return;

    const item: DragItem = JSON.parse(raw);

    // 1️⃣ Block WANTS
    if (item.val !== "essentials") {
      setMessage("❌ Only NEEDS (essential items) can be dropped.");
      setOpen(true)
      return;
    }

    // 2️⃣ Budget Check
    const currentTotal = droppedItems.reduce((sum, it) => sum + it.total, 0);

    if (currentTotal + item.price > usableBudget) {
      setMessage("❌ Budget exceeded! You must keep $20 savings.");
      setOpen(true)
      return;
    }

    // ADD ITEM
    setDroppedItems((prev) => [
      ...prev,
      { ...item, qty: 1, total: item.price, maxQty: item.quantity, reason: "" }
    ]);

    const filterData = shuffleData.filter((i)=>i.item != item.item)
    setShuffleData(filterData)

   
  };

  // QUANTITY UPDATE
const handleQtyChange = (idx: number, value: number) => {
  let updated = [...droppedItems];

  // 1️⃣ Quantity limit check
  if (value < 1 || value > updated[idx].maxQty) {
    setMessage("❌ You cannot add more quantity than required.");
    setOpen(true);
    return;
  }

  // 2️⃣ Budget check
  const currentTotalWithoutThis = updated
    .filter((_, i) => i !== idx)
    .reduce((sum, it) => sum + it.total, 0);
  
  const newTotal = currentTotalWithoutThis + value * updated[idx].price;

  if (newTotal > usableBudget) {
    setMessage("❌ Budget exceeded! You must keep $20 savings.");
    setOpen(true);
    return;
  }

  // ✅ Update if everything ok
  updated[idx].qty = value;
  updated[idx].total = updated[idx].qty * updated[idx].price;
  setDroppedItems(updated);
};





  return (
    <div className="grid grid-cols-12 w-full gap-4 p-4">

      {/* LEFT GRID */}
      <div className="col-span-12 shadow bg-violet-100 p-4 flex justify-center items-center flex-wrap gap-3">
        {shuffleData.map((i, index) => (
          <div
            key={index}
            draggable
            onDragStart={(e) => handleDragStart(e, i)}
            className=" border p-3 bg-white rounded cursor-grab active:cursor-grabbing"
          >
            <h3 className="text-center font-bold text-black">{i.item}</h3>

           

            <p className="text-center font-semibold text-black">${i.price}</p>
          </div>
        ))}
      </div>

      {/* RIGHT TABLE */}
      <div
      className="col-span-12 grid grid-cols-12 auto-rows-min shadow border"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {/* HEADERS */}
        <div className="col-span-3 border bg-violet-900 text-white p-2 font-bold text-center">ITEM</div>
        <div className="col-span-3 border bg-violet-900 text-white p-2 font-bold text-center">QTY</div>
        <div className="col-span-3 border bg-violet-900 text-white p-2 font-bold text-center">TOTAL</div>
        <div className="col-span-3 border bg-violet-900 text-white p-2 font-bold text-center">REASON</div>

        {/* ROWS */}
        {droppedItems.map((item, idx) => (
          <div className="contents" key={idx}>
            {/* ITEM */}
            <div className="col-span-3 text-black border p-3 text-center font-bold">{item.item}</div>

            {/* QTY INPUT */}
            <div className="col-span-3 text-black border p-3 text-center">
              <input
              title="qty"
                type="number"
                value={item.qty}
                className="w-14 text-center border"
                onChange={(e) => handleQtyChange(idx, Number(e.target.value))}
              />
            </div>

            {/* TOTAL */}
            <div className="col-span-3 text-black border p-3 text-center font-bold">${item.total}</div>

            {/* REASON */}
            <div className="col-span-3 text-black border p-3 text-center">
              <textarea
              rows={2}
                placeholder="Enter reason..."
                className="w-full border p-1"
             
              />
            </div>
          </div>
        ))}



        <div className="col-span-12 p-5 text-black border  border-dashed border-violet-900 text-center">Drop items here…</div>
        <div className="col-span-12 p-5 text-black  text-center bg-violet-200 font-bold  text-xl "> Total Spend : ${droppedItems.reduce((sum,item)=> sum+item.total,0)}</div>
      </div>
      <Welldone open={open} setOpen={setOpen} text={message}/>
    </div>
  );
};

export default DragDropTable;
