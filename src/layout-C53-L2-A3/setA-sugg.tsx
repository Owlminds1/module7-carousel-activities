"use client";
import MyImage from "@/components/myImage";


/* ---------- MAIN COMPONENT ---------- */

const SetA = () => {
 

  return (
    <div className="grid grid-cols-12 w-full place-items-center gap-5">
      {/* IMAGE */}
      <div className="col-span-6 flex justify-center">
        <MyImage path="/C53Images/Shoes2.jpg" />
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
          SYNERGY
        </div>

        <div className="col-span-3 text-xl  text-black text-center  p-2">
          Amazing
        </div>

        <div className="col-span-3 text-xl  text-black text-center  p-2">
          Decent
        </div>

        <div className="col-span-3 text-xl  text-black text-center  p-2">
          Decent
        </div>




        {/* =========================== */}
        <div className="col-span-3 text-xl  text-black text-center  p-2">
          SHINE
        </div>

        <div className="col-span-3 text-xl  text-black text-center  p-2">
          Decent
        </div>

        <div className="col-span-3 text-xl  text-black text-center  p-2">
          Amazing
        </div>

        <div className="col-span-3 text-xl  text-black text-center  p-2">
          OK
        </div>



          {/* =========================== */}
        <div className="col-span-3 text-xl  text-black text-center  p-2">
          ICEBERG
        </div>

        <div className="col-span-3 text-xl  text-black text-center  p-2">
          Amazing
        </div>

        <div className="col-span-3 text-xl  text-black text-center  p-2">
          OK
        </div>

        <div className="col-span-3 text-xl  text-black text-center  p-2">
          Decent
        </div>
      </div>
    </div>
  );
};

export default SetA;
