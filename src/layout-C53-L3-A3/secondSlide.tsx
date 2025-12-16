import MyImage from "@/components/myImage";
import { useState } from "react";

const SecondSlide = () => {
  const [questionArry] = useState<string[]>(Array(8).fill(""));
  return (
    <div className="grid grid-cols-12 w-full p-3">
      <div className="col-span-6 w-full flex justify-center items-center">
        <MyImage path="/C53Images" />
      </div>

      <div className="col-span-6 w-full flex flex-col gap-2">
        <h3 className="font-bold text-lg text-black">
          List questions you can ask sales to ensure that you’re buying what you
          need.
        </h3>
        {questionArry.map((_, index) => (
          <textarea
          className="ring ring-violet-900 focus:ring-2 outline-0 rounded-lg text-black placeholder:text-black/30 placeholder:font-bold p-2"
          key={index}
              placeholder={`Write question ${index + 1} `}/>
        ))}
      </div>
    </div>
  );
};

export default SecondSlide;
