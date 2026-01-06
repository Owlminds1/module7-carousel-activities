"use client";

import Image from "next/image";
import TableDropdown from "./tableDropDown";
import { useEffect, useState } from "react";


const RatingTable = () => {

const [values, setValues] = useState({
    Water: "",
    Diamond: "",
    Pizza: "",
    Sushi: "",
  });

  const [open, setOpen] = useState(false);

  // ✅ Correct answers (CLIENT GIVEN)
  const correctAnswers = {
    Water: "Low",   // Canada
    Diamond: "High",     // India
    Pizza: "Low",    // Germany
    Sushi: "High",        // Japan
  };

  const handleChange = (key: keyof typeof values, value: string) => {
    setValues((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // Decide color status
  const getStatus = (key: keyof typeof values) => {
    if (!values[key]) return "neutral";
    return values[key] === correctAnswers[key] ? "correct" : "wrong";
  };

  // 🎉 Celebration only when ALL correct
  useEffect(() => {
    const allCorrect = (Object.keys(correctAnswers) as Array<
      keyof typeof correctAnswers
    >).every((key) => values[key] === correctAnswers[key]);

    if (allCorrect) {
      setOpen(true);
    }
  }, [values]);
  
  return (
    <div className="grid grid-cols-12 w-full border border-black text-sm">
      {/* HEADERS */}
      <div className="border w-full col-span-4 border-black p-2 bg-violet-900 text-white text-center font-bold">
        Product
      </div>
      <div className="border w-full col-span-4 border-black p-2 bg-violet-900 text-white text-center font-bold">
        Supply
      </div>
      <div className="border w-full col-span-4 border-black p-2 bg-violet-900 text-white text-center font-bold">
        Value (Suggestive Response)
      </div>

      {/* ROWS */}
      {/* BRAND COLUMN */}
      <div className="border w-full min-h-[50px]  flex justify-center items-center text-black  text-lg font-bold col-span-4 border-black p-2 text-center flex-col gap-1">
        Water
        <div className="w-20 h-20 relative">
          <Image src="/C50Images/Water.jpg" fill alt="image" />
        </div>
      </div>
      <div className="border w-full min-h-[50px]  flex justify-center items-center text-black  text-lg font-bold col-span-4 border-black p-2 text-center">
        Easily Accessible
      </div>
      <div className="border w-full min-h-[50px]  flex justify-center items-center col-span-4 border-black p-2 text-center">
        <TableDropdown onChange={(val) => handleChange("Water", val)}
          status={getStatus("Water")} />
      </div>

      {/* ================== */}
      <div className="border w-full min-h-[50px]  flex justify-center items-center text-black  text-lg font-bold col-span-4 border-black p-2 text-center flex-col gap-1">
        Diamond
        <div className="w-20 h-20 relative">
          <Image src="/C50Images/Diamond2.jpg" fill alt="image" />
        </div>
      </div>
      <div className="border w-full min-h-[50px]  flex justify-center items-center text-black  text-lg font-bold col-span-4 border-black p-2 text-center">
        Rarely Accessible
      </div>
      <div className="border w-full min-h-[50px]  flex justify-center items-center col-span-4 border-black p-2 text-center">
        <TableDropdown onChange={(val) => handleChange("Diamond", val)}
          status={getStatus("Diamond")} />
      </div>

      {/* ================== */}
      <div className="border w-full min-h-[50px]  flex justify-center items-center text-black  text-lg font-bold col-span-4 border-black p-2 text-center flex-col gap-1">
        Pizza
        <div className="w-20 h-20 relative">
          <Image src="/C50Images/Pizza.jpg" fill alt="image" />
        </div>
      </div>
      <div className="border w-full min-h-[50px]  flex justify-center items-center text-black  text-lg font-bold col-span-4 border-black p-2 text-center">
        Easily Accessible
      </div>
      <div className="border w-full min-h-[50px]  flex justify-center items-center col-span-4 border-black p-2 text-center">
        <TableDropdown onChange={(val) => handleChange("Pizza", val)}
          status={getStatus("Pizza")} />
      </div>

      {/* ================== */}
      <div className="border w-full min-h-[50px]  flex justify-center items-center text-black  text-lg font-bold col-span-4 border-black p-2 text-center flex-col gap-1">
        Sushi
        <div className="w-20 h-20 relative">
          <Image src="/C50Images/PV_Sushi.jpg" fill alt="image" />
        </div>
      </div>
      <div className="border w-full min-h-[50px]  flex justify-center items-center text-black  text-lg font-bold col-span-4 border-black p-2 text-center">
        Sometimes Accessible
      </div>
      <div className="border w-full min-h-[50px]  flex justify-center items-center col-span-4 border-black p-2 text-center">
         <TableDropdown onChange={(val) => handleChange("Sushi", val)}
          status={getStatus("Sushi")} />
      </div>
    </div>
  );
};

export default RatingTable;
