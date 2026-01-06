"use client";

import { useEffect, useState } from "react";
import TableDropdown from "./tableDropDown";
import Welldone from "@/components/wellDone";

const RatingTable2 = () => {
  // User selections
  const [values, setValues] = useState({
    woollens: "",
    cotton: "",
    gumboots: "",
    jute: "",
  });

  const [open, setOpen] = useState(false);

  // ✅ Correct answers (CLIENT GIVEN)
  const correctAnswers = {
    woollens: "High",   // Canada
    cotton: "High",     // India
    gumboots: "Low",    // Germany
    jute: "Low",        // Japan
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
      <div className="col-span-4 border p-2 bg-violet-900 text-white text-center font-bold">
        Product
      </div>
      <div className="col-span-4 border p-2 bg-violet-900 text-white text-center font-bold">
        Supply
      </div>
      <div className="col-span-4 border p-2 bg-violet-900 text-white text-center font-bold">
        Value
      </div>

      {/* Woollens */}
      <div className="col-span-4 border p-2 text-center text-black text-lg font-bold">Woollens</div>
      <div className="col-span-4 border p-2 text-center text-black text-lg">Canada</div>
      <div className="col-span-4 border p-2 text-center">
        <TableDropdown
          onChange={(val) => handleChange("woollens", val)}
          status={getStatus("woollens")}
        />
      </div>

      {/* Cotton */}
      <div className="col-span-4 border p-2 text-center text-lg text-black font-bold">Cotton</div>
      <div className="col-span-4 border p-2 text-center text-lg text-black">India</div>
      <div className="col-span-4 border p-2 text-center">
        <TableDropdown
          onChange={(val) => handleChange("cotton", val)}
          status={getStatus("cotton")}
        />
      </div>

      {/* Gumboots */}
      <div className="col-span-4 border p-2 text-center text-lg text-black font-bold">Gumboots</div>
      <div className="col-span-4 border p-2 text-center text-lg text-black">Germany</div>
      <div className="col-span-4 border p-2 text-center">
        <TableDropdown
          onChange={(val) => handleChange("gumboots", val)}
          status={getStatus("gumboots")}
        />
      </div>

      {/* Jute */}
      <div className="col-span-4 border p-2 text-center text-lg text-black font-bold">Jute</div>
      <div className="col-span-4 border p-2 text-center text-lg text-black">Japan</div>
      <div className="col-span-4 border p-2 text-center">
        <TableDropdown
          onChange={(val) => handleChange("jute", val)}
          status={getStatus("jute")}
        />
      </div>

      <Welldone open={open} setOpen={setOpen} />
    </div>
  );
};

export default RatingTable2;
