import cycleData from "@/src/layout-C52-L1-A2/cycleData.json";
import React from "react";

const PurchaseCycle = () => {
  return (
    <div className=" w-full flex justify-center items-center">
      <div className="  h-[600px] w-[600px]  rounded-full flex justify-center items-center relative ">
        {cycleData.map((i, index) => (
          <div
            key={index}
            style={{
              top: `${i.top}`,
              left: `${i.left}`,
              bottom: `${i.bottom}`,
              right: `${i.right}`,
              backgroundColor: `${i.bg}`,
              border:`3px solid ${i.color}`

        
            }}
            className={`w-40 h-40 text-black text-md  rounded-full absolute flex justify-center items-center text-center p-1 after:rotate-[50px] ${i.className} `}
          >
            {i.val}
          </div>
        ))}
        <h2 className="text-black font-bold text-xl pl-10 text-center">PURCHASE <br /> CYCLE</h2>
      </div>
    </div>
  );
};

export default PurchaseCycle;
