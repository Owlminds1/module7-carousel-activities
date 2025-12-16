"use client";

import CardData from "@/src/layout-C53-L1-A2/cardData.json";
import DropZone from "@/src/layout-C53-L1-A2/drop.json"; // ["Appetizer", "Main Course", "Dessert"]
import { useMemo, useState } from "react";

// ----------------- Types -----------------
type DragDataType = {
  text: string;
  cost: string;
  val: string; // category
};

const MenuCardSLide: React.FC = () => {
  const [draging, setDragging] = useState<boolean>(false);
  const [dropItems, setDropItems] = useState<DragDataType[]>([]); // RHS box
  const [manageDragData, setManageDragData] =
    useState<DragDataType[]>(CardData);

  // ----------------- Total Cost -----------------
  const totalCost: number = useMemo(() => {
    return dropItems.reduce((sum: number, item: DragDataType) => {
      const cleanedCost = item.cost.replace(/[^0-9.]/g, "");
      return sum + Number(cleanedCost);
    }, 0);
  }, [dropItems]);

  // ----------------- Drag Handler -----------------
  const handleDrag = (
    e: React.DragEvent<HTMLDivElement>,
    dragItem: DragDataType
  ) => {
    e.dataTransfer.setData("application/json", JSON.stringify(dragItem));
  };

  // ----------------- Drop Handler -----------------
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const dragData: DragDataType = JSON.parse(
      e.dataTransfer.getData("application/json")
    );

    // add to RHS box
    setDropItems((prev) => [...prev, dragData]);
    setDragging(false);

    // remove from LHS
    setManageDragData((prev) => prev.filter((i) => i.text !== dragData.text));
  };

  const handleRemove = (itemToRemove: DragDataType, index: number) => {
    setDropItems((prev) => prev.filter((_, i) => i !== index));
    setManageDragData((prev) => [...prev, itemToRemove]);
  };

  return (
    <div className="grid grid-cols-12 gap-5 w-full">
      {/* ----------------- LHS: Category Tables 3-column grid ----------------- */}
      <div className={`${manageDragData.length === 0 ? "col-span-0 hidden":"col-span-6"}  w-full grid grid-cols-3 gap-1`}>
        {DropZone.map((category: string, index: number) => (
          <div key={index} className="border rounded pb-3 ">
            <h3 className="bg-violet-900 text-white w-full text-center p-2 mb-2">
              {category}
            </h3>
            <div className="grid grid-cols-1 gap-2 place-items-center">
              {manageDragData
                .filter((card) => card.val === category)
                .map((card) => (
                  <div
                    key={card.text}
                    draggable
                    onDragStart={(e) => handleDrag(e, card)}
                    className="w-[120px] h-[120px] cursor-grab perspective-[1000px]"
                  >
                    <div
                      className="relative w-full h-full transition-transform duration-700 hover:rotate-y-180"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      {/* Front */}
                      <div
                        className="absolute w-full h-full bg-violet-500 text-white font-bold flex justify-center items-center text-center p-2 rounded border"
                        style={{ backfaceVisibility: "hidden" }}
                      >
                        {card.text}
                      </div>
                      {/* Back */}
                      <div
                        className="absolute w-full h-full bg-red-400 text-white font-bold flex justify-center items-center text-center p-2 rounded border rotate-y-180"
                        style={{ backfaceVisibility: "hidden" }}
                      >
                        {card.cost}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>

      {/* ----------------- RHS: Single Drop Box ----------------- */}
      <div className={`${manageDragData.length === 0 ? "col-span-12":"col-span-6"}  bg-[url(/C53Images/Plate.jpg)] bg-cover bg-center border border-black flex flex-col justify-start items-center p-3`}>
        <div
          className={`${draging ?"border-dashed border-black":" "} min-h-[300px] bg-black/50  flex flex-wrap p-2 justify-center items-center gap-1 gap-y-0 w-full`}
          onDragOver={(e) =>{ e.preventDefault();setDragging(true);}}
          onDrop={handleDrop}
        >
          {/* <h3 className="bg-gray-800 text-white w-full text-center p-2 mb-3">Drop Here</h3> */}

          {dropItems.map((item, dropIndex) => (
            <div
              key={dropIndex}
              className="border relative  flex justify-center flex-col items-center p-5 shadow  bg-white/30 backdrop-blur-xs rounded"
            >
              <span className="font-bold text-black">{item.text}</span>
              <span className="text-yellow-800 font-bold">{item.cost}</span>
              <span
                className="absolute -top-1 right-1  text-black font-bold text-sm cursor-pointer"
                onClick={() => handleRemove(item, dropIndex)}
              >
                x
              </span>
            </div>
          ))}
        </div>

        <h3 className="text-black text-2xl  font-bold w-full text-center p-2 mt-4">
          Total: {totalCost}
        </h3>
      </div>
    </div>
  );
};

export default MenuCardSLide;
