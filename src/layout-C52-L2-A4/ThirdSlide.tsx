import Welldone from "@/components/wellDone";
import TableData from "@/src/layout-C52-L2-A4/tableData.json";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const ThirdSlide = () => {
  // rowIndex -> optionIndex
  const [selected, setSelected] = useState<{ [key: number]: number }>({});
  const [correctSound, setCorrectSound] = useState<HTMLAudioElement>();
  const completedRef = useRef(false); // 🔒 alert repeat rokne ke liye
  const [open ,setOpen]  =useState(false)

  useEffect(() => {
    setCorrectSound(new Audio("/sound/correct.mp3"));
  }, []);

  const handleCheck = (
    correctVal: string,
    opt: string,
    rowIndex: number,
    optIndex: number
  ) => {
    setSelected((prev) => {
      const updated = { ...prev, [rowIndex]: optIndex };

      // ✅ check: sab rows answered?
      const allAnswered =
        Object.keys(updated).length === TableData.length;

      // ✅ check: sab answers correct?
      const allCorrect =
        allAnswered &&
        TableData.every((row, idx) => {
          const selectedIndex = updated[idx];
          if (selectedIndex === undefined) return false;
          return row.option[selectedIndex] === row.val;
        });

      // 🔔 alert sirf tab
      if (allCorrect && !completedRef.current) {
        completedRef.current = true;
        setOpen(true);
      }

      return updated;
    });

    // correct sound
    if (opt === correctVal) {
      correctSound?.play();
    }
  };

  return (
    <div className="grid grid-cols-9 w-full p-5">

      {/* Header */}
      <div className="col-span-6 bg-violet-900 text-white p-2 text-center font-bold">
        STATEMENTS
      </div>
      <div className="col-span-3 bg-violet-900 text-white p-2 text-center font-bold">
        RESPONSE
      </div>

      {TableData.map((row, rowIndex) => (
        <React.Fragment key={rowIndex}>
          {/* Statement */}
          <div className="col-span-6 flex justify-evenly items-center gap-3 border p-5 px-10 text-left font-bold text-black">
            <div className="w-35 h-30 relative">
              <Image
                src={row.img}
                fill
                alt="image"
                style={{ objectFit: "contain" }}
              />
            </div>
            <h4 className="text-center w-full">{row.text}</h4>
          </div>

          {/* Options */}
          <div className="col-span-3 border flex gap-5 justify-center items-center p-2">
            {row.option.map((opt, optIndex) => {
              const isSelected = selected[rowIndex] === optIndex;
              const isCorrect = opt === row.val;

              return (
                <button
                  key={optIndex}
                  onClick={() =>
                    handleCheck(row.val, opt, rowIndex, optIndex)
                  }
                  className={`
                    min-w-1/3 px-5 py-2 rounded-lg text-white font-bold
                    transition-all duration-200 active:scale-95
                    ${
                      isSelected
                        ? isCorrect
                          ? "bg-green-600"
                          : "bg-red-500 shake"
                        : "bg-violet-900"
                    }
                  `}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        </React.Fragment>
      ))}
      <Welldone open={open} setOpen={setOpen} />
    </div>
  );
};

export default ThirdSlide;
