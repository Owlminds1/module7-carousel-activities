import Table1 from "@/src/layout-C53-L1-A5/slide2.json";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SwiperClass } from "swiper/react";

type Props = {
  swiperRef: React.RefObject<SwiperClass | null>;
};
const Slide2 = ({ swiperRef }: Props) => {
  const [show, setShow] = useState(false);

  useEffect(()=>{
swiperRef.current?.updateAutoHeight();
  },[show])

  return (
    <div className="flex justify-center items-center ">
      <div className="col-span-12 w-[80%] flex justify-center items-center flex-col gap-5">
        <span className="font-bold text-3xl text-black">B</span>
        <h4 className="font-bold text-xl text-black text-center">
        You get an allowance of $30 per month. If you add the amount, you will have $360 a year. Your parents said they will round it off to $400 if you manage to do some savings.
        </h4>

        <h3 className=" text-lg text-black">Here’s what you can do:</h3>
        <div className="grid grid-cols-12 gap-3 w-full">
          {Table1.map((i, index) => (
            <div
              key={index}
              className="col-span-6 border flex flex-col justify-center items-center gap-2 w-full"
            >
              <div className="w-30 h-30 border relative">
                <Image src={i.img} fill alt="images" />
              </div>
              <ul className="list-disc space-y-3 px-3 min-h-[250px]">
                {i.points.map((point, idx) => (
                  <li className="text-black text-lg" key={idx}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
  <h3 className=" text-lg text-black">What would you choose?</h3>
      
      {
        show ?  <p className="text-lg text-black ">
          <span className="font-bold">REASON : </span>
          Using savings is a better option than spending on ice cream because eating ice-cream all the time will increase our sugar levels as well as weight. Plus the craving will keep returning and it gets over too quickly! With savings, buying any of the items would be lasting and useful. It will increase our ability to play, calculate, use wisely, and also develop thinking.
        </p>:   <button
          onClick={() => setShow(true)}
          className="text-white bg-violet-900 px-5 py-2 rounded-lg cursor-pointer "
        >
          Suggestive Responses
        </button>
      }
      
     

       
      </div>
    </div>
  );
};

export default Slide2;
