"use client";

import { useRef, useState } from "react";

type Item = {
  id: number;
  text: string;
  correct: "spend" | "save" | "invest" | "give";
};

type Columns = {
  spend: Item[];
  save: Item[];
  invest: Item[];
  give: Item[];
};

export default function DragSlide() {
  const initialItems: Item[] = [
    { id: 1, text: "If we spend less than what we have, we will always have money left over.", correct: "spend" },
    { id: 2, text: "Items to help buy things and budget: money, credit card, cheque book, coupon.", correct: "spend" },

    { id: 3, text: "The more money we save today, the more money we will have in the future.", correct: "save" },
    { id: 4, text: "Items to help to save: Bank, Mom&Dad, Piggy Bank, Wallet", correct: "save" },

    { id: 5, text: "We can invest in businesses by buying stocks, bonds, and mutual funds. We can also invest in land, buildings, and gold.", correct: "invest" },
    { id: 6, text: "Items to help to invest: Stocks, Buildings, Gold, Bonds.", correct: "invest" },

    { id: 7, text: "When we give money to others, they can help themselves and their family.", correct: "give" },
    { id: 8, text: "Places to give items as gifts: church, charity, family, school", correct: "give" },
  ];

  // Shuffle items on first load
  const shuffled = [...initialItems].sort(() => Math.random() - 0.5);

  const [available, setAvailable] = useState<Item[]>(shuffled);

  const [columns, setColumns] = useState<Columns>({
    spend: [],
    save: [],
    invest: [],
    give: [],
  });

  const draggedItem = useRef<Item | null>(null);

  const onDragStart = (item: Item) => {
    draggedItem.current = item;
  };

  const onDrop = (columnId: Item["correct"]) => {
    const item = draggedItem.current;

    if (!item) return;

    if (item.correct !== columnId) {
      draggedItem.current = null;
      return;
    }

    setColumns((prev) => ({
      ...prev,
      [columnId]: [...prev[columnId], item],
    }));

    setAvailable((prev) => prev.filter((i) => i.id !== item.id));

    draggedItem.current = null;
  };

  return (
    <div className="grid grid-cols-12 gap-6 p-6 w-full">

      {/* HIDE LEFT LIST WHEN EMPTY */}
      {available.length > 0 && (
        <div className="p-4 col-span-4 border rounded-lg bg-white shadow">
          {available.map((item) => (
            <div
              key={item.id}
              draggable
              onDragStart={() => onDragStart(item)}
              className="p-3 mb-2 bg-violet-900 text-center text-white rounded-lg cursor-grab active:cursor-grabbing shadow"
            >
              {item.text}
            </div>
          ))}
        </div>
      )}

      {/* RIGHT COLUMNS FULL WIDTH WHEN LEFT EMPTY */}
      <div className={`col-span-8 grid grid-cols-2 gap-4 ${available.length === 0 ? "col-span-12" : ""}`}>
        <DropColumn id="spend" title="Spend Cautiously" items={columns.spend} onDrop={onDrop} />
        <DropColumn id="save" title="Save Diligently" items={columns.save} onDrop={onDrop} />
        <DropColumn id="invest" title="Invest Wisely" items={columns.invest} onDrop={onDrop} />
        <DropColumn id="give" title="Give Generously" items={columns.give} onDrop={onDrop} />
      </div>
    </div>
  );
}

type DropColumnProps = {
  id: Item["correct"];
  title: string;
  items: Item[];
  onDrop: (id: Item["correct"]) => void;
};

function DropColumn({ id, title, items, onDrop }: DropColumnProps) {
  return (
    <div
      className="p-4 border border-dashed border-violet-900 min-h-[200px] rounded-xl"
      onDragOver={(e) => e.preventDefault()}
      onDrop={() => onDrop(id)}
    >
      <h3 className="text-black mb-3 text-center font-bold">{title}</h3>

      {items.map((item) => (
        <div
          key={item.id}
          className="p-2 bg-violet-900 text-white text-center rounded-lg mb-2"
        >
          {item.text}
        </div>
      ))}
    </div>
  );
}
