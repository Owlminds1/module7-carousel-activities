"use client";

import { useState } from "react";
import MyImage from "@/components/myImage";
import persnolDeeds from "@/src/layout-C49-L1-A3/presnol_deeds.json";
import socialGoods from "@/src/layout-C49-L1-A3/social_goods.json";
import Welldone from "./wellDone";

type ItemType = {
  text: string;
  type: "personal" | "social";
};

const CupSlide = () => {
  const [personal, setPersonal] = useState(persnolDeeds);
  const [social, setSocial] = useState(socialGoods);
  const [cupItems, setCupItems] = useState<ItemType[]>([]);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  // ---------------- DRAG ----------------
  const handleDragStart = (e: React.DragEvent, item: ItemType) => {
    e?.dataTransfer?.setData("item", JSON.stringify(item));
  };

  // ---------------- DROP ----------------
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();

    const data = JSON.parse(e.dataTransfer.getData("item")) as ItemType;

    setCupItems((prev) => {
      // ❌ Cup full
      if (prev.length >= 5) {
        setMessage("Cup is full");
        setOpen(true);
        return prev;
      }

      // ❌ Duplicate
      if (prev.some((i) => i.text === data.text)) {
        return prev;
      }

      // ✅ ADD TO CUP
      if (data.type === "personal") {
        setPersonal((p) => p.filter((x) => x.text !== data.text));
      } else {
        setSocial((s) => s.filter((x) => x.text !== data.text));
      }

      return [...prev, data];
    });
  };

  // ---------------- REMOVE ----------------
  const removeFromCup = (index: number) => {
    const removed = cupItems[index];

    setCupItems((prev) => prev.filter((_, i) => i !== index));

    if (removed.type === "personal") {
      setPersonal((prev) => {
        if (prev.some((p) => p.text === removed.text)) return prev;
        return [...prev, { text: removed.text }];
      });
    } else {
      setSocial((prev) => {
        if (prev.some((s) => s.text === removed.text)) return prev;
        return [...prev, { text: removed.text }];
      });
    }
  };

  return (
    <div className="grid grid-cols-12 w-full">
      {/* -------- Personal Deeds -------- */}
      <div className="col-span-3 w-full border">
        <h3 className="bg-violet-900 text-white w-full text-center font-bold p-2">
          Personal Deeds
        </h3>
        <ul className="list-disc space-y-2 p-5 px-8">
          {personal.map((p, i) => (
            <li
              key={i}
              draggable
              onDragStart={(e) =>
                handleDragStart(e, { text: p.text, type: "personal" })
              }
              className="text-black text-lg cursor-grab"
            >
              {p.text}
            </li>
          ))}
        </ul>
      </div>

      {/* -------- CUP -------- */}
      <div className="col-span-6 w-full flex justify-center items-center relative">
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          className="  bg-[url('/C49Images/Kindness2.jpg')] bg-cover bg-no-repeat bg-center  absolute top-[10%] left-[15%]  flex flex-col justify-center  rounded-lg border border-violet-900  border-dashed w-[400px] h-[300px] p-3"
        >
          <ul className="space-y-2">
            {cupItems.map((item, index) => (
              <li
                key={index}
                className="flex justify-between border items-center bg-white/30 backdrop-blur-sm px-2 py-1 rounded shadow"
              >
                <span className="text-black text-md font-bold">
                  {item.text}
                </span>
                <button
                  onClick={() => removeFromCup(index)}
                  className="text-red-600 font-bold cursor-pointer"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* -------- Social Good -------- */}
      <div className="col-span-3 w-full border">
        <h3 className="bg-violet-900 text-white w-full text-center font-bold p-2">
          Social Good
        </h3>
        <ul className="list-disc space-y-2 p-5 px-8">
          {social.map((s, i) => (
            <li
              key={i}
              draggable
              onDragStart={(e) =>
                handleDragStart(e, { text: s.text, type: "social" })
              }
              className="text-black text-lg cursor-grab"
            >
              {s.text}
            </li>
          ))}
        </ul>
      </div>

      <Welldone open={open} setOpen={setOpen} text={message} />
    </div>
  );
};

export default CupSlide;
