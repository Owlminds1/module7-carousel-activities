"use client";
import { useState } from "react";
import { useCart } from "./globleContaxt";
import Image from "next/image";
type ItemType = {

  id: string;
  text: string;
  val: string;
  price: number;
  image: string;


};

const SecondSlide = () => {
  const { cartArry, setCartArry } = useCart();
  

  // dropped items state
  const [dropped, setDropped] = useState<ItemType[]>([]);

  const handleDragStart = (item: ItemType) => {
    localStorage.setItem("drag-item", JSON.stringify(item));
  };

  const handleDrop = () => {
    const item = JSON.parse(localStorage.getItem("drag-item") || "{}") as ItemType;

    setCartArry(prev => prev.filter(i => i.id !== item.id));
    setDropped(prev => [...prev, item]);
  };

  const handleRemoveFromDropped = (item: ItemType) => {
    setDropped(prev => prev.filter(i => i.id !== item.id));
    setCartArry(prev => [...prev, item]);
  };

  return (
    <div className="grid grid-cols-12 gap-1 w-full p-10">

      {/* LEFT SIDE - ML */}
      <div className="col-span-6 w-full border  rounded-lg shadow p-4 flex justify-center items-center gap-2 flex-wrap">
     

        {cartArry.map(item => (
         <div className="w-40 rounded-lg overflow-hidden">
            <div className="w-full h-20 relative bg-amber-200 ">
                <Image src={item.image} fill alt="image"/>

            </div>
             <h3
            key={item.id}
            draggable
            onDragStart={() => handleDragStart(item)}
            className="p-1.9 p-2 flex justify-center items-center min-h-15 text-sm text-white text-center border  cursor-pointer bg-violet-900"
          >
            {item.text}
          </h3>
         </div>
        ))}
      </div>

      {/* RIGHT SIDE - Drop Zone */}
      <div
        className="col-span-6  border border-dashed border-black  rounded-lg shadow w-full  p-4 min-h-[300px]"
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >


        {dropped.map(item => (
          <div className="w-40 rounded-lg overflow-hidden relative">
           <div className="w-full h-20 relative bg-amber-200 ">
                <Image src={item.image} fill alt="image"/>

            </div>
             <h3
            key={item.id}
            draggable
            onDragStart={() => handleDragStart(item)}
            className="p-1.9 py-2 text-md text-white text-center border  cursor-pointer bg-violet-900"
          >
            {item.text}
          </h3>
            <button
              onClick={() => handleRemoveFromDropped(item)}
              className="absolute top-0 right-1 bg-red-500 cursor-pointer text-xs text-white px-1 rounded"
            >
              X
            </button>
         </div>
        ))}
      </div>
    </div>
  );
};

export default SecondSlide;
