"use client";
import { useEffect, useState } from "react";
import cardData from "@/src/layout-C49-L1-A1/dragData.json";
import Image from "next/image";

// ✅ Correct & CLEAN type (LOWERCASE only)
type CardType = {
  name: string;
  img: string;
  type: "need" | "want";
  flipped: boolean;
  locked: boolean;
};

const FlipCard = () => {
  const [cards, setCards] = useState<CardType[]>([]);
  const [selected, setSelected] = useState<number[]>([]);

  // 🔀 Prepare cards (shuffle + normalize + add flags)
  useEffect(() => {
    const preparedCards: CardType[] = [...cardData]
      .sort(() => Math.random() - 0.5)
      .map((item) => ({
        name: item.name,
        img: item.img,
        type: item.type.toLowerCase() as "need" | "want", // ✅ MAIN FIX
        flipped: false,
        locked: false,
      }));

    setCards(preparedCards);
  }, []);

  // 🖱️ Flip handler
  const handleFlip = (index: number) => {
    if (cards[index].flipped || cards[index].locked) return;
    if (selected.length === 2) return;

    const updated = [...cards];
    updated[index].flipped = true;
    setCards(updated);

    setSelected((prev) => [...prev, index]);
  };

  // ✅❌ Match logic
  useEffect(() => {
    if (selected.length !== 2) return;

    const [first, second] = selected;

    if (cards[first].type === cards[second].type) {
      // ✅ MATCH → lock cards
      const updated = [...cards];
      updated[first].locked = true;
      updated[second].locked = true;
      setCards(updated);
      setSelected([]);
    } else {
      // ❌ NOT MATCH → flip back
      setTimeout(() => {
        const updated = [...cards];
        updated[first].flipped = false;
        updated[second].flipped = false;
        setCards(updated);
        setSelected([]);
      }, 1000);
    }
  }, [selected]);

  return (
    <div className="min-h-screen bg-[#F8FCFA] flex justify-center items-center p-5">
      <div className="grid grid-cols-12 gap-4 ">
        {cards.map((item, index) => (
          <div
            key={index}
            onClick={() => handleFlip(index)}
            className="col-span-3 w-[200px] h-[200px] relative cursor-pointer [perspective:1000px]"
          >
            <div
              className={`w-full h-full transition-transform duration-700
                [transform-style:preserve-3d]
                ${item.flipped ? "[transform:rotateY(180deg)]" : ""}`}
            >
              {/* FRONT – IMAGE */}
              <div className="absolute w-full h-full bg-white border rounded-lg flex justify-center items-center [backface-visibility:hidden]">
                <div className="h-full w-full relative">
                  <Image
                  src={item.img}
                 fill
                  alt={item.name}
                  objectFit="cover"
                  objectPosition="top"
                />
                </div>
              </div>

              {/* BACK – NEED / WANT */}
              <div className="absolute w-full h-full bg-violet-900 text-white rounded-lg flex justify-center items-center text-2xl font-bold
                [transform:rotateY(180deg)] [backface-visibility:hidden]">
                {item.type.toUpperCase()}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlipCard;
