"use client";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import  { useRef, useState } from "react";

import MyImage from "@/components/myImage";
import CartSlide from "./cartSlide";


const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);

  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveSlide(swiper.activeIndex);
  };






  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center items-center p-5 flex-col gap-5">
      <div>
        <h4 className="text-3xl font-bold text-center text-black">
          {activeSlide === 0
            ? "Are You An Informed Buyer?"
            : activeSlide === 1
            ? "First Brand"
            :activeSlide === 2 ? "Second Brand": activeSlide === 3 ? "Brand Analysis":activeSlide === 4 ? "What will you choose?": activeSlide === 6 ? "Are You An Informed Buyer?":""}
        </h4>


      </div>

      <div className="w-full flex justify-center items-center flex-col gap-3">
        <div className="w-full shadow-md p-5 ">
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
              <div className="grid grid-cols-12 w-full  gap-5 place-items-center p-2">
                <div className="col-span-6 w-full flex justify-center items-center ">
                  <MyImage path="/C50Images/Brand.jpg" />
                </div>

                 <div className="col-span-6 w-full ">
                 <p className="text-lg text-black font-medium ">We have two brands. Both are from the same place.  Each brand functions differently when it comes to the quality of products and integrity as well as work culture. Each brand has distinct regulations when it comes to goods and services taxes and pricing.</p>
                </div>

              
              </div>
            </SwiperSlide>
            
            
            <SwiperSlide>
              <div className="grid grid-cols-12 w-full  gap-5 place-items-center p-2">
                <div className="col-span-6 w-full flex justify-center items-center ">
                  <MyImage path="/C50Images/Fair_Labor.png" />
                </div>

                 <div className="col-span-6 w-full ">
                 <p className="text-lg text-black font-bold my-2 ">JoyCo. is known for great customer service, fair pay for its employees i.e.</p>

                 <ul className="list-disc space-y-3 px-2">
                  <li className="text-lg text-black">All of its employees are paid fairly based on work experience and qualifications.</li>
                  
                  <li className="text-lg text-black">The company rewards high performance in direct correlation with net profit and high quality products.</li>
                 </ul>
                </div>

              
              </div>
            </SwiperSlide>
            
            
             <SwiperSlide>
              <div className="grid grid-cols-12 w-full  gap-5 place-items-center p-2">
                <div className="col-span-6 w-full flex justify-center items-center ">
                  <MyImage path="/C50Images/Labor.jpg" />
                </div>

                 <div className="col-span-6 w-full ">
                 <p className="text-lg text-black font-bold my-2  ">High Co, on the other hand, has decently priced, discounted items, but their service is not up to mark. i.e.</p>

                 <ul className="list-disc space-y-3 px-2">
                  <li className="text-lg text-black">Employees are not compensated equally or fairly.</li>
                  
                  <li className="text-lg text-black">If the company makes profit, it doesn’t usually reward its employees by increasing  their salary.</li>
                 </ul>
                </div>

              
              </div>
            </SwiperSlide>
            
            
            
             <SwiperSlide>
              <div className="grid grid-cols-12 w-full  gap-5 place-items-center p-2">
                <div className="col-span-6 w-full flex justify-center items-center ">
                  <MyImage path="/C50Images/Abolish.jpg" />
                </div>

                 <div className="col-span-6 w-full ">
                 <p className="text-lg text-black font-bold my-2 ">Their products are also created using cheap labor of children. i.e.</p>

                 <ul className="list-disc space-y-3 px-2">
                  <li className="text-lg text-black">Labor is often exploited by either employing children who are paid less than minimum wage or making products in unimaginable working conditions.</li>
                  
                  <li className="text-lg text-black">Such companies sell products for a high amount but do not compensate employees accordingly.</li>
                 </ul>
                </div>

              
              </div>
            </SwiperSlide> 
            
            
            
            
             <SwiperSlide>
              <div className="grid grid-cols-12 w-full  gap-5 place-items-center p-2">
                <div className="col-span-6 w-full flex justify-center items-center ">
                  <MyImage path="/C50Images/Choice.jpg" />
                </div>

                 <div className="col-span-6 w-full ">
                 <p className="text-lg text-black font-bold my-2 ">This is how you choose!</p>

                 <ul className="list-disc space-y-3 px-2">
                  <li className="text-lg text-black">Here’s a list of items.</li>
                  
                  <li className="text-lg text-black">You will see some of the same items with different prices along with the percentage of tax levied on each item. A tax on goods  is imposed by the state to help run a society.</li>
                  
                  
                   <li className="text-lg text-black">You will also notice whether each item has a discount or not.</li>
                 </ul>
                </div>

              
              </div>
            </SwiperSlide>
            
            
            
             <SwiperSlide>
              <div className="grid grid-cols-12 w-full  gap-5 place-items-center p-2">
             <div className="col-span-12 w-[50%] text-xl font-bold text-black">Your task is to:</div> 
             
             
             <div className="col-span-12 w-[50%] ">

              <ul className="list-disc space-y-2 px-2">
                <li className="text-black font-medium text-lg ">Purchase as an informed buyer</li>


                 <li className="text-black font-medium text-lg ">Decide whether you can wait to buy a more reasonable item of high quality, decent price, taxes, and effective service to fit your budget.</li>


                 <li className="text-black font-medium text-lg ">Remember, a discounted item doesn’t indicate better quality!</li>


                 <li className="text-black font-medium text-lg ">All prices are listed in Bahamian Dollars</li>



                  <li className="text-black font-medium text-lg ">Drag and place your items in the shopping cart.</li>


                   <li className="text-black font-medium text-lg ">You will get a receipt for your items!</li>
              </ul>
             </div>

              
              </div>
            </SwiperSlide>
            
            
            <SwiperSlide>
           <CartSlide/>
            </SwiperSlide>

          </Swiper>
        </div>

        {/* Navigation */}
        <div className="flex justify-between w-full mt-8">
          <span
            onClick={handlePrev}
            className={`${
              activeSlide === 0 ? "invisible" : "visible"
            } cursor-pointer text-black text-4xl border border-black rounded-full p-3 bg-yellow-400`}
          >
            <FaArrowLeft />
          </span>

          <span
            onClick={handleNext}
            className={`${
              activeSlide < 6 ? "visible" : "invisible"
            } cursor-pointer text-black text-4xl border border-black rounded-full p-3 bg-yellow-400`}
          >
            <FaArrowRight />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Slide;
