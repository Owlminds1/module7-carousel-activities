"use client";
import MyImage from "@/components/myImage";


/* ---------- MAIN COMPONENT ---------- */

const SetC = () => {


  return (
    <div className="grid grid-cols-12 w-full place-items-center gap-5">
      {/* IMAGE */}
      <div className="col-span-6 flex justify-center">
        <MyImage path="/C53Images/Trousers.jpg" />
      </div>

      {/* TABLE */}
      <div className="col-span-6 w-full grid grid-cols-12 border  mt-5">
        {/* HEADERS */}
        {["BRAND", "SERVICE", "QUALITY", "UPGRADE"].map((h) => (
          <div
            key={h}
            className="col-span-3 bg-violet-900 text-white text-center p-2"
          >
            {h}
          </div>
        ))}
{/* =========================== */}
        <div className="col-span-3 text-xl  text-black text-center  p-2">
          DOYCE
        </div>

        <div className="col-span-3 text-xl  text-black text-center  p-2">
          OK
        </div>

        <div className="col-span-3 text-xl  text-black text-center  p-2">
          Decent
        </div>

        <div className="col-span-3 text-xl  text-black text-center  p-2">
          Amazing
        </div>




        {/* =========================== */}
        <div className="col-span-3 text-xl  text-black text-center  p-2">
          KILO
        </div>

        <div className="col-span-3 text-xl  text-black text-center  p-2">
          OK
        </div>

        <div className="col-span-3 text-xl  text-black text-center  p-2">
          Not worth it
        </div>

        <div className="col-span-3 text-xl  text-black text-center  p-2">
          OK
        </div>



          {/* =========================== */}
        <div className="col-span-3 text-xl  text-black text-center  p-2">
          PLUME
        </div>

        <div className="col-span-3 text-xl  text-black text-center  p-2">
           Amazing
        </div>

        <div className="col-span-3 text-xl  text-black text-center  p-2">
           Amazing

        </div>

        <div className="col-span-3 text-xl  text-black text-center  p-2">
          Amazing
        </div>
      </div>
    </div>
  );
};

export default SetC;
