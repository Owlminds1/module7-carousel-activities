"use client";

import Decorations from "@/src/layout-C53-L3-A4/Decorations.json";
import Foods from "@/src/layout-C53-L3-A4/food.json";
import React, { useState } from "react";
import Welldone from "./wellDone";

const SecondSlide = () => {
  // States
  const [open ,setOpen]=useState(false)
  const [text,setText]=useState("")
  const [decQty, setDecQty] = useState<number[]>(Array(Decorations.length).fill(0));
  const [decTotal, setDecTotal] = useState<number[]>(Array(Decorations.length).fill(0));
  const [decChecked, setDecChecked] = useState<boolean[]>(Array(Decorations.length).fill(false));

  const [foodQty, setFoodQty] = useState<number[]>(Array(Foods.length).fill(0));
  const [foodTotal, setFoodTotal] = useState<number[]>(Array(Foods.length).fill(0));
  const [foodChecked, setFoodChecked] = useState<boolean[]>(Array(Foods.length).fill(false));

  // Grand total function
  const getGrandTotal = () => {
    return decTotal.reduce((sum, val) => sum + val, 0) + foodTotal.reduce((sum, val) => sum + val, 0);
  };

  // Handle Decorations quantity change
  const handleDecChange = (index: number, value: number) => {
    const updatedQty = [...decQty];
    updatedQty[index] = value;

    const updatedTotal = [...decTotal];
    updatedTotal[index] = value * Decorations[index].price;

    const newGrandTotal = updatedTotal.reduce((sum, val) => sum + val, 0) + foodTotal.reduce((sum, val) => sum + val, 0);

    if (newGrandTotal <= 400) {
      setDecQty(updatedQty);
      setDecTotal(updatedTotal);
    } else {
        setOpen(true)
      setText("Budget exceeded $400!");
    }
  };

  // Handle Decorations checkbox
  const handleDecCheck = (index: number) => {
    const updatedCheck = [...decChecked];
    updatedCheck[index] = !updatedCheck[index];
    setDecChecked(updatedCheck);

    // Reset quantity if unchecked
    if (!updatedCheck[index]) {
      handleDecChange(index, 0);
    }
  };

  // Handle Food quantity change
  const handleFoodChange = (index: number, value: number) => {
    const updatedQty = [...foodQty];
    updatedQty[index] = value;

    const updatedTotal = [...foodTotal];
    updatedTotal[index] = value * Foods[index].price;

    const newGrandTotal = decTotal.reduce((sum, val) => sum + val, 0) + updatedTotal.reduce((sum, val) => sum + val, 0);

    if (newGrandTotal <= 400) {
      setFoodQty(updatedQty);
      setFoodTotal(updatedTotal);
    } else {
        setOpen(true)
      setText("Budget exceeded $400!");
    }
  };

  // Handle Food checkbox
  const handleFoodCheck = (index: number) => {
    const updatedCheck = [...foodChecked];
    updatedCheck[index] = !updatedCheck[index];
    setFoodChecked(updatedCheck);

    // Reset quantity if unchecked
    if (!updatedCheck[index]) {
      handleFoodChange(index, 0);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-5">

      {/* Decorations Table */}
      <div className="grid grid-cols-12 w-[80%] place-items-center">
        <div className="col-span-6 p-1 text-center text-white bg-violet-900 font-bold w-full">Decorations Items</div>
        <div className="col-span-2 p-1 text-center text-white bg-violet-900 font-bold w-full">Price ($)</div>
        <div className="col-span-2 p-1 text-center text-white bg-violet-900 font-bold w-full">Quantity</div>
        <div className="col-span-2 p-1 text-center text-white bg-violet-900 font-bold w-full">TOTAL</div>

        {Decorations.map((item, index) => (
          <React.Fragment key={index}>
            <div className="col-span-6 p-1 border w-full flex justify-between items-center px-3 text-black">
              {item.text}
              <input
                title="click"
              type="checkbox" className="w-4 h-4 accent-violet-900 cursor-pointer" checked={decChecked[index]} onChange={() => handleDecCheck(index)} />
            </div>
            <div className="col-span-2 border p-1 w-full text-center text-black">{item.price}</div>
            <div className="col-span-2 border p-1 w-full text-center">
              <input
                title="Quantity"
                type="number"
                min={0}
                max={50}
                value={decQty[index]}
                disabled={!decChecked[index]}
                onChange={(e) => handleDecChange(index, Number(e.target.value))}
                className="w-full text-black px-2 outline-0"
              />
            </div>
            <div className="col-span-2 border p-1 text-black w-full text-center">{decTotal[index]}</div>
          </React.Fragment>
        ))}
      </div>

      {/* Food Table */}
      <div className="grid grid-cols-12 w-[80%] place-items-center">
        <div className="col-span-6 p-1 text-center text-white bg-violet-900 font-bold w-full">Food Items</div>
        <div className="col-span-2 p-1 text-center text-white bg-violet-900 font-bold w-full">Price ($)</div>
        <div className="col-span-2 p-1 text-center text-white bg-violet-900 font-bold w-full">Quantity</div>
        <div className="col-span-2 p-1 text-center text-white bg-violet-900 font-bold w-full">TOTAL</div>

        {Foods.map((item, index) => (
          <React.Fragment key={index}>
            <div className="col-span-6 p-1 border w-full flex justify-between items-center px-3 text-black">
              {item.text}
              <input 
              title="click"
              type="checkbox" className="w-4 h-4 accent-violet-900 cursor-pointer" checked={foodChecked[index]} onChange={() => handleFoodCheck(index)} />
            </div>
            <div className="col-span-2 border text-black p-1 w-full text-center">{item.price}</div>
            <div className="col-span-2 border p-1 w-full text-center">
              <input
              title="Quantity"
                type="number"
                min={0}
                max={50}
                value={foodQty[index]}
                disabled={!foodChecked[index]}
                onChange={(e) => handleFoodChange(index, Number(e.target.value))}
                className="w-full px-2 text-black outline-0"
              />
            </div>
            <div className="col-span-2 border text-black p-1 w-full text-center">{foodTotal[index]}</div>
          </React.Fragment>
        ))}
      </div>

      {/* Grand Total */}
      <div className="text-lg text-black font-bold mt-4">
        Grand Total: ${getGrandTotal()}
      </div>

      <Welldone open={open} setOpen={setOpen} text={text}/>
    </div>
  );
};

export default SecondSlide;
