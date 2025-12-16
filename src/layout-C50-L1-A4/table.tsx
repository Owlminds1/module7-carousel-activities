import TableData from "@/src/layout-C50-L1-A4/tableData.json";
import Image from "next/image";
import { useState } from "react";

type DragDataType = {
  category: string;
  name: string;
  img: string;
  points: number;
};

const Table = () => {
  const [dropItems, setDropItems] = useState<DragDataType[]>([]);
  const [filter, setFilter] = useState(TableData);
const [show,setShow]=useState(false)
  // DRAG START
  const handleDragStart = (
    e: React.DragEvent,
    category: string,
    item: { name: string; img: string; points: number }
  ) => {
    const dragItem: DragDataType = {
      category,
      name: item.name,
      img: item.img,
      points: item.points,
    };

    e.dataTransfer.setData("drag", JSON.stringify(dragItem));
  };

  // DROP
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();

    const newItem: DragDataType = JSON.parse(e.dataTransfer.getData("drag"));

    // 🔍 check same category already exists
    const existingItem = dropItems.find((i) => i.category === newItem.category);

    // 1️⃣ REMOVE OLD FROM RHS
    setDropItems((prev) => {
      const filtered = prev.filter((i) => i.category !== newItem.category);
      return [...filtered, newItem];
    });

    // 2️⃣ UPDATE ML
    setFilter((prev) =>
      prev.map((cat) => {
        // same category
        if (cat.category === newItem.category) {
          let items = [...cat.items];

          // return old item back to ML
          if (existingItem) {
            items.push({
              name: existingItem.name,
              img: existingItem.img,
              points: existingItem.points,
            });
          }

          // remove newly dropped item from ML
          items = items.filter((i) => i.name !== newItem.name);

          return { ...cat, items };
        }

        return cat;
      })
    );
  };

  return (
    <div className="grid grid-cols-12 gap-5 p-2 ">
      {/* LEFT SIDE (ML) */}
      <div className="col-span-6 w-full">
        {filter.map((item, index) => (
          <div key={index} className="grid grid-cols-12 mb-2 shadow">
            <div className="col-span-12 bg-violet-900 text-white text-center font-bold p-1">
              {item.category}
            </div>

            {item.items.map((cat, catIndx) => (
              <div
                key={catIndx}
                draggable
                onDragStart={(e) => handleDragStart(e, item.category, cat)}
                className="col-span-3 border p-2 flex flex-col items-center cursor-grab"
              >
                <div className="relative w-16 h-16 rounded overflow-hidden">
                  <Image objectFit="cover" fill src={cat.img} alt={cat.name} />
                </div>
                <h4 className="text-sm text-black">{cat.name}</h4>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* RIGHT SIDE (BASKET) */}
      <div className="col-span-6 w-full">
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          className="min-h-[400px] border border-dashed border-violet-900 rounded-lg p-2 flex gap-3 flex-wrap justify-center items-center"
        >
          {dropItems.map((i, index) => (
            <div
              key={index}
              className="border w-40 rounded-lg flex flex-col items-center overflow-hidden"
            >
              <div className="relative w-full h-24 ">
                <Image objectFit="cover" fill src={i.img} alt={i.name} />
              </div>
              <h3 className="text-sm bg-violet-900  w-full  text-white text-center p-1">{i.name}</h3>
              <h3 className={`${show ? "block":"hidden"} text-sm bg-violet-900  w-full font-bold   text-white text-center p-1`}>{i.points} points</h3>
            </div>
          ))}
        </div>

        <div className="mt-2 text-center w-full">
            <button
            disabled={dropItems.length <5}
            onClick={()=>setShow(true)}
            className={`${dropItems.length <5 ? "bg-violet-500 cursor-not-allowed":"bg-violet-900 cursor-pointer"} text-white px-5 py-2 rounded-lg  `}>Check Points</button>
        </div>
      </div>
    </div>
  );
};

export default Table;
