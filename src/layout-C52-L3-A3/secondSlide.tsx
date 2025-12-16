import dropZone from "@/src/layout-C52-L3-A3/dropZone.json";
import Image from "next/image";
import React from "react";
const SecondSlide = () => {
  return (
    <div className="grid grid-cols-12 gap-3 w-full place-items-start ">
    
      <div
      
        className={`  col-span-12 w-full grid grid-cols-10 gap-0.5`}
      >
        <div className="col-span-2 bg-violet-900 p-2 text-sm  text-nowrap text-white text-center font-bold w-full ">
          METHOD
        </div>
        <div className="col-span-2 bg-violet-900 p-2 text-sm  text-nowrap text-white text-center font-bold w-full ">
          ABOUT
        </div>
        <div className="col-span-2 bg-violet-900 p-2 text-sm  text-nowrap text-white text-center font-bold w-full ">
          RECURRING PAYMENTS?
        </div>
        <div className="col-span-2 bg-violet-900 p-2 text-sm  text-nowrap text-white text-center font-bold w-full ">
          REFUDS?
        </div>
        <div className="col-span-2 bg-violet-900 p-2 text-sm  text-nowrap text-white text-center font-bold w-full ">
          CONFIRMATION
        </div>

        {dropZone.map((drop, dropIndex) => (
          <React.Fragment key={dropIndex}>
            <div className="col-span-2 border flex-col   flex justify-center items-center p-1 text-black text-center w-full ">
              {drop.method}
              <div className="w-15 h-15 relative">
                <Image fill alt={drop.method} objectFit="cover" src={drop.img}/>
              </div>
            </div>
            <div
             
            
              className="col-span-2  min-h-20 flex justify-center items-center p-1 border  text-black text-center w-full "
            >{drop.about}
             
            </div>

            <div className="col-span-2  border flex justify-center items-center text-black text-center w-full ">
             {drop.RECURRING_PAYMENTS}
            </div>
            <div className="col-span-2  border flex justify-center items-center text-black text-center w-full ">
             {drop.REFUDS}
            </div>
            <div className="col-span-2  border flex justify-center items-center text-black text-center w-full ">
             {drop.CONFIRMATION}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SecondSlide;
