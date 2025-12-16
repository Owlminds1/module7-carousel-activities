import Table1 from "@/src/layout-C53-L1-A5/slide1.json";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SwiperClass } from "swiper/react";

type Props = {
  swiperRef: React.RefObject<SwiperClass | null>;
};
const Slide1 = ({ swiperRef }: Props) => {
  const [show, setShow] = useState(false);

  useEffect(()=>{
swiperRef.current?.updateAutoHeight();
  },[show])

  return (
    <div className="flex justify-center items-center ">
      <div className="col-span-12 w-[80%] flex justify-center items-center flex-col gap-5">
        <span className="font-bold text-3xl text-black">A</span>
        <h4 className="font-bold text-xl text-black text-center">
          You’ve to spend $25 on lunch. You can either eat at the school canteen
          or ask parents to buy items for a homemade lunch.
        </h4>

        <h3 className=" text-lg text-black">Here is the menu for each.</h3>
        <div className="grid grid-cols-12 gap-3 w-full">
          {Table1.map((i, index) => (
            <div
              key={index}
              className="col-span-6 border flex flex-col justify-center items-center gap-5 w-full"
            >
              <div className="w-30 h-30 border relative">
                <Image src={i.img} fill alt="images" />
              </div>
              <ul className="list-disc space-y-3 px-3 min-h-[250px] ">
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
          Choosing homemade lunch is a wise option because all the items are
          healthy and affordable. Homemade lunch is better than canteen lunch
          because it doesn’t have items that are fatty or oily.{" "}
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

export default Slide1;
