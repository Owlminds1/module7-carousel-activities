"use client";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import React, { useEffect, useRef, useState } from "react";
import MyImage from "@/components/myImage";

import SlideData from "@/src/layout-C50-L3-A2/pointers.json";
import Slide2Data from "@/src/layout-C50-L3-A2/pointers2.json";
import Slide3Data from "@/src/layout-C50-L3-A2/pointers3.json";
import Slide4Data from "@/src/layout-C50-L3-A2/pointers4.json";
import Slide5Data from "@/src/layout-C50-L3-A2/pointers5.json";
import Slide6Data from "@/src/layout-C50-L3-A2/pointers6.json";
import Slide7Data from "@/src/layout-C50-L3-A2/slide7Data.json";
import Slide9Data from "@/src/layout-C50-L3-A2/slide9Data.json";
import Image from "next/image";
import RatingTable from "./ratingTable";

const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [visibleCount, setVisibleCount] = useState(0);
  const [visibleCount2, setVisibleCount2] = useState(0);
  const [visibleCount3, setVisibleCount3] = useState(0);
  const [visibleCount4, setVisibleCount4] = useState(0);
  const [visibleCount5, setVisibleCount5] = useState(0);
  const [visibleCount6, setVisibleCount6] = useState(0);

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };
  const handleNext = () => {
    swiperRef.current?.slideNext();
  };
  const handleSlideChange = (swiper: SwiperClass) => {
    const idx = swiper.activeIndex;
    setActiveSlide(idx);
  };

  useEffect(
    () => {
      // single keydown listener that always checks the current swiper index
      const handleKeyPress = (e: KeyboardEvent) => {
        if (e.key !== "Enter" && e.code !== "Enter") return;

        const current = swiperRef.current?.activeIndex ?? activeSlide;

        if (current === 0) {
          setVisibleCount((prev) =>
            prev < SlideData.length ? prev + 1 : prev
          );
        }

        if (current === 1) {
          setVisibleCount2((prev) =>
            prev < Slide2Data.length ? prev + 1 : prev
          );
        }

        if (current === 2) {
          setVisibleCount3((prev) =>
            prev < Slide3Data.length ? prev + 1 : prev
          );
        }

        if (current === 3) {
          setVisibleCount4((prev) =>
            prev < Slide4Data.length ? prev + 1 : prev
          );
        }

        if (current === 4) {
          setVisibleCount5((prev) =>
            prev < Slide5Data.length ? prev + 1 : prev
          );
        }

        if (current === 5) {
          setVisibleCount6((prev) =>
            prev < Slide6Data.length ? prev + 1 : prev
          );
        }
      };

      window.addEventListener("keydown", handleKeyPress);
      return () => window.removeEventListener("keydown", handleKeyPress);
      // note: no activeSlide dependency needed because we read from swiperRef.current
    },
    [
      /* intentionally empty: we read current index from swiperRef */
    ]
  );

  useEffect(() => {
    swiperRef.current?.updateAutoHeight();
  }, [
    visibleCount,
    visibleCount2,
    visibleCount3,
    visibleCount4,
    visibleCount5,
    visibleCount6,
  ]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center items-center p-5 flex-col gap-5">
      <div>
        <h4 className="text-3xl font-bold text-center text-black">
          {activeSlide === 0
            ? "ASSESSING VALUE (MONEY) "
            : activeSlide === 1
            ? "ASSESSING VALUE (QUALITY)"
            : activeSlide === 2
            ? "ASSESSING VALUE (LOYALTY)"
            : activeSlide === 3
            ? "THINKING ABOUT VALUE"
            : activeSlide === 4
            ? "THINKING ABOUT VALUE"
            : activeSlide === 5
            ? "THINKING ABOUT VALUE"
            : activeSlide === 6
            ? "PRODUCT REVIEW"
            : activeSlide === 7
            ? "PRODUCT REVIEW EXAMPLE"
            : activeSlide >= 8 ? "PRODUCT REVIEW": ""}
        </h4>

        <p className="text-black text-lg ">
          {activeSlide === 3
            ? " Here are some things to look out for when buying products:"
            : activeSlide === 6
            ? "Here is a list of products. The same product is sold by multiple brands. You will see the following against each brand"
            : activeSlide === 7
            ? "For example: If this is what you know about a phone brand:"
            : activeSlide > 7 ? "Now let’s select based on preferences. You will have to justify each choice. There’s no right answer, just a reasonable response would suffice.": ""}
        </p>
      </div>

      <div className=" w-[90%] flex justify-center items-center flex-col gap-3  ">
        <div className="w-full shadow-md p-3 min-h-[200px]  ">
          <Swiper
            loop={false}
            autoHeight
            allowTouchMove={false}
            autoplay={false}
            modules={[Navigation]}
            slidesPerView={1}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={handleSlideChange}
          >
            <SwiperSlide>
              <div className="grid grid-cols-12 w-full place-items-center p-2">
                <div className="col-span-6 w-full">
                  <MyImage path="/C50Images/Monetary_Value.jpg" />
                </div>
                <div className=" w-full col-span-6 bg flex justify-center items-start flex-col gap-5 ">
                  <h4 className="text-black font-bold text-xl ">
                    What do you think value means?
                  </h4>
                  <p className="text-black">
                    Warren Buffet, an investor and a philanthropist says, “Price
                    is what you pay; value is what you get”
                  </p>
                  {SlideData.slice(0, visibleCount).map((i, index) => (
                    <ul key={index} className=" list-disc w-full">
                      <li
                        key={index}
                        className="text-lg text-left font-medium text-black"
                      >
                        {i}
                      </li>
                    </ul>
                  ))}

                  {SlideData.length > visibleCount && (
                    <p className="text-gray-800 italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 w-full place-items-center p-2">
                <div className="col-span-6 w-full">
                  <MyImage path="/C50Images/Product_Value.jpg" />
                </div>
                <div className=" w-full col-span-6 bg flex justify-center items-start flex-col gap-5 ">
                  {Slide2Data.slice(0, visibleCount2).map((i, index) => (
                    <ul key={index} className="list-disc w-full">
                      <li
                        key={index}
                        className="text-lg text-left font-medium text-black"
                      >
                        {i}
                      </li>
                    </ul>
                  ))}

                  {Slide2Data.length > visibleCount2 && (
                    <p className="text-gray-800 italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 w-full place-items-center p-2">
                <div className="col-span-6 w-full">
                  <MyImage path="/C50Images/Brand_Loyalty.jpg" />
                </div>
                <div className=" w-full col-span-6 bg flex justify-center items-start flex-col gap-5 ">
                  {Slide3Data.slice(0, visibleCount3).map((i, index) => (
                    <ul key={index} className="list-disc w-full">
                      <li
                        key={index}
                        className="text-lg text-left font-medium text-black"
                      >
                        {i}
                      </li>
                    </ul>
                  ))}

                  {Slide3Data.length > visibleCount3 && (
                    <p className="text-gray-800 italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 w-full place-items-center p-2">
                <div className="col-span-6 w-full">
                  <MyImage path="/C50Images/Luxury.jpg" />
                </div>
                <div className=" w-full col-span-6 bg flex justify-center items-start flex-col gap-5 ">
                  <h4 className="font-bold text-black text-xl">
                    {" "}
                    <span>a.{`)`}</span> Things are not what they seem.
                  </h4>
                  <p className="text-black">
                    It is the job of advertising and marketing to make a product
                    look better than it really is. Very few brands rely on
                    authenticity to market products.
                  </p>
                  <h4 className="font-bold text-black text-xl">
                    Can you please share what kind of feelings & emotions are
                    evoked by this image?
                  </h4>
                  {Slide4Data.slice(0, visibleCount4).map((i, index) => (
                    <ul key={index} className="list-disc w-full">
                      <li
                        key={index}
                        className="text-lg text-left font-medium text-black"
                      >
                        {i}
                      </li>
                    </ul>
                  ))}

                  {Slide4Data.length - 1 < visibleCount4 && (
                    <h4 className="font-bold text-black text-xl">
                      Would you buy it?{" "}
                    </h4>
                  )}

                  {Slide4Data.length > visibleCount4 && (
                    <p className="text-gray-800 italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 w-full place-items-center p-2">
                <div className="col-span-6 w-full">
                  <MyImage path="/C50Images/Shoes_sports.jpg" />
                </div>
                <div className=" w-full col-span-6 bg flex justify-center items-start flex-col gap-5 ">
                  <h4 className="font-bold text-black text-xl">
                    {" "}
                    <span>b.{`)`}</span>The value of the product varies
                    according to the profiles of the buyers.
                  </h4>
                  <p className="text-black">
                    Different buyers have different needs. The same product can
                    have varieties to suit the requirements of diverse buyers.
                  </p>
                  <h4 className="font-bold text-black text-xl">
                    Who do you think this person is? What do you think they are
                    advertising? Who is the audience?
                  </h4>
                  {Slide5Data.slice(0, visibleCount5).map((i, index) => (
                    <ul key={index} className="list-disc w-full">
                      <li
                        key={index}
                        className="text-lg text-left font-medium text-black"
                      >
                        {i}
                      </li>
                    </ul>
                  ))}

                  {Slide5Data.length - 1 < visibleCount5 && (
                    <h4 className="font-bold text-black text-xl">
                      Would you buy it?{" "}
                    </h4>
                  )}

                  {Slide5Data.length > visibleCount5 && (
                    <p className="text-gray-800 italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 w-full place-items-center p-2">
                <div className="col-span-6 flex justify-center items-center gap-2  w-full">
                  <div className="w-[200px] h-[200px] relative">
                    <Image fill alt="image" src="/C50Images/Water.jpg" />
                  </div>

                  <div className="w-[200px] h-[200px] relative">
                    <Image fill alt="image" src="/C50Images/Diamond.jpg" />
                  </div>
                </div>
                <div className=" w-full col-span-6 bg flex justify-center items-start flex-col gap-5 ">
                  <h4 className="font-bold text-black text-xl">
                    {" "}
                    <span>c.{`)`}</span> Accessibility of a product affects its
                    value
                  </h4>
                  <p className="text-black">
                    The cost of the product doesn’t define its value. Some
                    products are expensive but not useful, whereas other
                    products are affordable but very useful and valuable.
                  </p>
                  <h4 className="font-bold text-black text-xl">
                    What can you say about these two products?
                  </h4>
                  {Slide6Data.slice(0, visibleCount6).map((i, index) => (
                    <ul key={index} className="list-disc w-full">
                      <li
                        key={index}
                        className="text-lg text-left font-medium text-black"
                      >
                        {i}
                      </li>
                    </ul>
                  ))}

                  {Slide6Data.length > visibleCount6 && (
                    <p className="text-gray-800 italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-8 w-full place-items-center p-2">
                {Slide7Data.map((i, index) => (
                  <React.Fragment key={index}>
                    <div className="col-span-6 flex justify-center items-center gap-2  w-full">
                      <div className="w-[200px] h-[200px] relative">
                        <Image fill alt="image" src={i.img} objectFit="cover" />
                      </div>
                    </div>
                    <div className=" w-full col-span-6 bg flex justify-center items-start flex-col gap-5 ">
                      <h4 className="font-bold text-black text-xl">
                        <span>{i.title}</span>
                        {i.text}
                      </h4>
                    </div>
                  </React.Fragment>
                ))}

                <div className="col-span-6  flex gap-5 items-center justify-center  w-full">
                  <Image
                    width={200}
                    height={100}
                    src="/C50Images/Stars.jpg"
                    alt="images"
                  />
                </div>

                <div className="col-span-6  flex flex-col gap-5 items-start justify-center  w-full">
                  <h4 className=" text-black text-lg">
                    Your task is to review the comments for each item listed as:
                  </h4>

                  <ul className="list-disc space-y-4 px-5 w-full">
                    <li className="text-black text-lg ">Amazing</li>
                    <li className="text-black text-lg ">Decent</li>
                    <li className="text-black text-lg ">OK</li>
                    <li className="text-black text-lg ">Poor</li>
                    <li className="text-black text-lg ">Not worth it</li>
                  </ul>

                  <p className="text-black">
                    Then to give a star rating from 1 to 5, 5 stars being the
                    best and 1 star being the lowest.{" "}
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-8 w-full place-items-center p-2">
                <div className="col-span-12  flex gap-5 items-center justify-center  w-full">
                  <MyImage path="/C50Images/Phones.jpg" />
                </div>

                <div className="col-span-12     w-[70%]">
                 
                 <div className="grid grid-cols-12">
                   <div className="col-span-3 w-full bg-violet-900 text-white text-center border">
                    BRAND
                  </div>

                   <div className="col-span-3 w-full bg-violet-900 text-white text-center border">
                    Service
                  </div>

                   <div className="col-span-3 w-full bg-violet-900 text-white text-center border">
                    Quality
                  </div>

                   <div className="col-span-3 w-full bg-violet-900 text-white text-center border">
                    Upgrades 
                  </div>

                   <div className="col-span-3 w-full text-black text-center border p-2">
                    XYZ 
                  </div>

                   <div className="col-span-3 w-full text-black text-center border p-2">
                    Amazing  
                  </div>
                  
                  
                    <div className="col-span-3 w-full text-black text-center border p-2">
                    Amazing  
                  </div> 
                  
                   <div className="col-span-3 w-full text-black text-center border p-2">
                    every 3 years or so  
                  </div>


                   <div className="col-span-3 w-full text-black text-center border p-2">
                  EFG
                  </div>
                  
                    <div className="col-span-3 w-full text-black text-center border p-2">
                  Poor 
                  </div>
                  
                  <div className="col-span-3 w-full text-black text-center border p-2">
                 Decent  
                  </div>
                  
                   <div className="col-span-3 w-full text-black text-center border p-2">
                 Every 2 years or so  
                  </div>


                   <div className="col-span-3 w-full text-black text-center border p-2">
               LMN
                  </div>
                  
                  <div className="col-span-3 w-full text-black text-center border p-2">
             Decent 
                  </div>
                  
                   <div className="col-span-3 w-full text-black text-center border p-2">
             Amazing  
                  </div> 
                  
                  
                  <div className="col-span-3 w-full text-black text-center border p-2">
             Every 2 years or so  
                  </div>
                  
                  
                   <div className="col-span-12 w-full text-black text-center  p-2">
            This is the rating you’d give to each brand based on service, quality, and upgrades
                  </div>
  <div className="col-span-12 w-full text-black flex flex-col gap-2  p-2">
           <h4 className="font-bold text-black text-lg">Here’s the final question:</h4>
           <h4 className="font-bold text-black text-xl">Which product would you choose?</h4>
           <p className="text-black" >
            In this example, while all the categories should have the highest stars, the reality isn’t that. So here you have to prioritise what’s most important to you: service, quality, or upgrades.
           </p>


           <ul className="list-disc space-y-3 px-5 w-full">
            <li className="text-black">If you are service oriented, you’d choose XYZ</li> 
            
            <li className="text-black">If you’re quality oriented, you’d choose the best of two: XYZ OR LMN</li>
            
            
            <li className="text-black">If you’re upgrade oriented, you’d choose either EFG or LMN</li>
           </ul>
                  </div>
                 </div>


                
                                 </div>



                


              </div>
            </SwiperSlide>
{
  Slide9Data.map((i,index)=>(

            <SwiperSlide key={index}>
<div className="grid grid-cols-12 w-full">
  <div className="col-span-6 w-full flex justify-center items-center ">
    <MyImage path={i.image}/>
  </div>

  <div className="col-span-6 w-full flex flex-col gap-5 justify-start items-center">
    <h4 className="text-xl font-bold text-black">Set {i.set} : {i.name}</h4>
<RatingTable ratingTable={i.ratingTable}/>
    <h4 className="text-lg font-bold text-black">Which product would you choose?</h4>
  </div>
</div>

            </SwiperSlide>
  ))

}
          </Swiper>
        </div>

        {/* slide buttons  */}
        <div className="flex justify-between items-center gap-5 w-full mt-8  ">
          <span
            onClick={handlePrev}
            className={`${
              activeSlide === 0 ? "invisible" : "visible"
            }  cursor-pointer text-black text-4xl border border-black rounded-full p-3  bg-yellow-400`}
          >
            <FaArrowLeft />
          </span>
          <span
            onClick={handleNext}
            className={` ${
              activeSlide < 10 ? "visible" : "invisible"
            }  cursor-pointer text-black text-4xl border border-black rounded-full p-3  bg-yellow-400`}
          >
            <FaArrowRight />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Slide;
