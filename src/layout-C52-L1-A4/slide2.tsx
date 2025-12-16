"use client";

import { useState } from "react";

// ---------------- TYPES ----------------

type BlanksType = {
  gift: string;
  noun: string;
  quality: string;
  brand: string;
  appreciate: string;
  memory: string;
};

// ---------------- DATA ----------------

const initialGifts: string[] = [
  "A drawing book",
  "A dress",
  "A set of color pencils",
  "A piece of chocolate",
];

const initialWords: string[] = [
  "art",
  "sweets",
  "clothes",
  "friendship",
  "awesome",
  "brand",
  "thank",
];

// ---------------- COMPONENT ----------------

export default function SlideB() {
  const [blanks, setBlanks] = useState<BlanksType>({
    gift: "",
    noun: "",
    quality: "",
    brand: "",
    appreciate: "",
    memory: "",
  });

  const [gifts, setGifts] = useState(initialGifts);
  const [words, setWords] = useState(initialWords);
  const [dragItem, setDragItem] = useState("");

  // ---------------- HELPERS ----------------

  const getCorrectField = (w: string): keyof BlanksType => {
    if (initialGifts.includes(w)) return "gift";

    if (["art", "sweets", "clothes"].includes(w)) return "noun";
    if (w === "awesome") return "quality";
    if (w === "brand") return "brand";
    if (w === "thank") return "appreciate";
    if (w === "friendship") return "memory";

    return "noun";
  };

  const handleCorrectDrop = (field: keyof BlanksType) => {
    if (!dragItem) return;

    const correctField = getCorrectField(dragItem);

    if (correctField !== field) {
      // ❌ Wrong drop → ignore
      console.log("Wrong drop – not allowed");
      return;
    }

    // 🟢 If previous value exists, return it back to list
    if (initialGifts.includes(dragItem)) {
      // Gift blank
      if (blanks.gift && !gifts.includes(blanks.gift)) {
        setGifts((prev) => [...prev, blanks.gift]);
      }
      setGifts((prev) => prev.filter((g) => g !== dragItem));
    } else {
      // Word blank
      const old = blanks[field];
      if (old && !words.includes(old)) {
        setWords((prev) => [...prev, old]);
      }
      setWords((prev) => prev.filter((w) => w !== dragItem));
    }

    // Set new value
    setBlanks((prev) => ({ ...prev, [field]: dragItem }));
    setDragItem("");
  };

  // ---------------- UI ----------------

  return (
    <div className="grid grid-cols-12 gap-5 place-items-start w-full">
      {/* LEFT LIST SECTION */}
      <div className="w-full col-span-4 shadow p-3">
        <h3 className="font-bold p-2 text-center text-white bg-violet-900">
          Gift Options
        </h3>

        <div className="flex flex-wrap gap-2 p-3">
          {gifts.map((g) => (
            <div
              key={g}
              draggable
              onDragStart={() => setDragItem(g)}
              className="py-2 px-5 text-black capitalize border cursor-move bg-white hover:bg-purple-100"
            >
              {g}
            </div>
          ))}
        </div>

        <h3 className="font-bold p-2 text-center text-white bg-violet-900">
          Word Options
        </h3>

        <div className="flex flex-wrap gap-2 p-3">
          {words.map((w) => (
            <div
              key={w}
              draggable
              onDragStart={() => setDragItem(w)}
              className="py-2 text-black capitalize px-5 border cursor-move bg-white hover:bg-purple-100"
            >
              {w}
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT TEXT AREA */}
      <div className="w-full col-span-8 flex flex-col justify-center items-center gap-6 p-3">
                <ul className="list-disc space-y-2 px-5 w-[40%] ">
                    <li className="text-black text-lg">Lasting impact</li>
                    <li className="text-black text-lg">Quality</li>
                    <li className="text-black text-lg">Appreciation</li>
                    <li className="text-black text-lg">Something memorable </li>
                </ul>
        <div className=" rounded-xl p-5  text-lg leading-10">
          <p className="text-black text-lg  leading-10">
            I’d choose{" "}
            <span
              className="bg-blue-50 px-2 text-violet-900 capitalize"
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleCorrectDrop("gift")}
            >
              {blanks.gift || "______"}
            </span>{" "}
            for Tiara because she loves{" "}
            <span
              className="bg-blue-50 px-2 text-violet-900 capitalize"
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleCorrectDrop("noun")}
            >
              {blanks.noun || "______"}
            </span>
            .
            This item will definitely be an{" "}
            <span
              className="bg-blue-50 px-2 text-violet-900 capitalize"
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleCorrectDrop("quality")}
            >
              {blanks.quality || "______"}
            </span>{" "}
            gift as it is of a good quality{" "}
            <span
              className="bg-blue-50 px-2 text-violet-900 capitalize"
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleCorrectDrop("brand")}
            >
              {blanks.brand || "______"}
            </span>
            .
            I am sure she will{" "}
            <span
              className="bg-blue-50 px-2 text-violet-900 capitalize"
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleCorrectDrop("appreciate")}
            >
              {blanks.appreciate || "______"}
            </span>{" "}
            me because it will remind her of our{" "}
            <span
              className="bg-blue-50 px-2 text-violet-900 capitalize"
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleCorrectDrop("memory")}
            >
              {blanks.memory || "______"}
            </span>{" "}
            whenever she uses it!
          </p>
        </div>
      </div>
    </div>
  );
}
