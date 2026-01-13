"use client";
import React, { useEffect, useState } from "react";
import bingoData from "@/src/layout-C49-L2-A1/bingo2.json";
import BingoAlert from "./bingoAlert";
import Image from "next/image";

const Bingo2 = () => {
  const [permanentGreen, setPermanentGreen] = useState<number[]>([]);

  const [selectedIndex, setSelectedIndex] = useState<number[]>([]);
   const [completedCombos, setCompletedCombos] = useState<string[]>([]);
  const [open,setOpen]=useState(false)
const [timeLeft, setTimeLeft] = useState(120); // 2 minutes
const [timeUp, setTimeUp] = useState(false);
const [timerStarted, setTimerStarted] = useState(false);

useEffect(() => {
  // ❌ timer tab tak na chale jab tak start na ho
  if (!timerStarted) return;

  // ✅ agar dono bingo ho gaye → timer stop
  if (completedCombos.length === winningCombinations.length) {
    return;
  }

  if (timeLeft === 0) {
    setTimeUp(true);
    setOpen(true);
    return;
  }

  const timer = setInterval(() => {
    setTimeLeft((prev) => prev - 1);
  }, 1000);

  return () => clearInterval(timer);
}, [timerStarted, timeLeft, completedCombos]);


  const winningCombinations = [
    // Horizontal
    // [0, 1, 2],
    [3, 4, 5],
    // [6, 7, 8],
    // Vertical
    // [0, 3, 6],
    [1, 4, 7],
    // [2, 5, 8],


    // Diagonal
    // [0, 4, 8],
    // [2, 4, 6],
  ];



const checkBingo = (newSelection: number[]) => {
  const combined = [...new Set([...permanentGreen, ...newSelection])];

  for (const combo of winningCombinations) {
    const isMatched = combo.every((index) => combined.includes(index));
    const comboKey = combo.join("-");

    if (isMatched && !completedCombos.includes(comboKey)) {
      setCompletedCombos((prev) => [...prev, comboKey]);

      setPermanentGreen((prev) => [...new Set([...prev, ...combo])]);

      setTimeout(() => setOpen(true), 500);
      return true;
    }
  }
  return false;
};

const handleClick = (index: number) => {
  // ⛔ agar time up ya sab bingo complete → no click
  if (timeUp) return;
  if (completedCombos.length === winningCombinations.length) return;

  // ⏱ first click par timer start
  if (!timerStarted) {
    setTimerStarted(true);
  }

  if (selectedIndex.includes(index)) return;

  const updatedSelection = [...selectedIndex, index];
  setSelectedIndex(updatedSelection);

  if (updatedSelection.length === 3) {
    checkBingo(updatedSelection);

    setTimeout(() => {
      setSelectedIndex([]);
    }, 400);
  }
};






  return (
    <div className="bg-[#F8FCFA] flex  justify-start p-5 items-center gap-8 flex-col">
     
      <div className="w-[80%]  p-3 flex justify-center items-center flex-col gap-8">
      <div className="text-xl font-bold text-black">
  Time Left:{" "}
  <span className={timeLeft <= 10 ? "text-red-600" : "text-green-700"}>
    {Math.floor(timeLeft / 60)}:
    {String(timeLeft % 60).padStart(2, "0")}
  </span>
</div>


        <div className="grid grid-cols-9 gap-3  place-items-center border p-2 rounded-lg bg-[#a0a0a088]">
          {bingoData.map((i, index) => (
            <div
              onClick={() => handleClick(index)}
              key={index}
className={`${
  permanentGreen.includes(index)
    ? "bg-green-300 border border-black"   // ✅ bingo boxes
    : selectedIndex.includes(index)
    ? "bg-green-100 border border-black"   // 🟡 temp selection
    : "bg-white"
} col-span-3 shadow cursor-pointer flex justify-center items-center flex-col w-[200px] h-[150px] border rounded-lg text-black`}
            >
              <Image src={i.image} width={90} height={100} alt="image"/>
              <span className="font-medium text-center text-xl"> {i.text}</span>
            </div>
          ))}
        </div>
      </div>
      <BingoAlert open={open} setOpen={setOpen} message={"Well Done"}/>
      <BingoAlert
  open={open}
  setOpen={setOpen}
  message={timeUp ? "Time’s up!" : "Well Done 🎉"}
/>

    </div>
  );
};

export default Bingo2;
