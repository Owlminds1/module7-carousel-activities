import Image from "next/image";
import FoodData from "@/src/layout-C53-L2-AA/food.json";
import CLOTHESData from "@/src/layout-C53-L2-AA/CLOTHES.json";
import SHOESSData from "@/src/layout-C53-L2-AA/SHOES.json";
import { FaRegCheckCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import { SwiperClass } from "swiper/react";
import { MdDeleteForever } from "react-icons/md";
import { BsCartDash } from "react-icons/bs";
import Welldone from "./wellDone";
import { useCart } from "./globleContaxt";

type dragDatatype = {
  id:string;
  text: string;
  val: string;
  price: number;
  image:string
};

type myProps = {
  swiperRef: React.RefObject<SwiperClass | null>;
};
const Table = ({ swiperRef }: myProps) => {
  const {cartArry,setCartArry} = useCart()
  const [activeIndex, setActiveIndex] = useState<string[]>([]);
  // const [cartArry, setCartArry] = useState<dragDatatype[]>([]);
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  

  const moneySpent = cartArry.reduce((total, item) => total + item.price, 0);
  const remainingMoney = 150 - moneySpent;

 const handleClick = (data: dragDatatype, id: string) => {
  const isItemInCart = cartArry.some((i) => i.id === data.id);

  if (!isItemInCart) {
    const newTotal = moneySpent + data.price;
    if (newTotal > 150) {
      setText("You cannot add more items !");
      setOpen(true);
      return;
    }
  }

  // Active UI toggle
  setActiveIndex((prev) =>
    prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
  );

  // Cart toggle
  setCartArry((prev) =>
    isItemInCart
      ? prev.filter((x) => x.id !== data.id)
      : [...prev, data]
  );

  // Count
  setCount((prev) => (isItemInCart ? prev - 1 : prev + 1));
};


  useEffect(() => {
    swiperRef.current?.updateAutoHeight();
  }, [cartArry]);

 const handleRemoveItem = (cartIndex: number) => {
  const item = cartArry[cartIndex];

  setCartArry((prev) => prev.filter((_, i) => i !== cartIndex));

  setActiveIndex((prev) => prev.filter((id) => id !== item.id));

  setCount((prev) => prev - 1);
};


  return (
    <div className="grid grid-cols-12 place-items-start w-full   gap-3">
      <div className="col-span-6  grid grid-cols-12 gap-y-10  w-full rounded-lg   shadow p-2">
        <div className="col-span-12 grid grid-cols-12 gap-3   w-full ">
          <div className="col-span-12  w-full border-b  border-black p-1 text-center font-bold text-xl text-black">
            Food
          </div>

          {FoodData.map((item, index) => (
            <div className="col-span-6 w-[80%] mx-auto " key={index}>
              <div
                onClick={() => handleClick(item, item.id)}
                className={` ${
                  activeIndex.includes(item.id)
                    ? "border-2 border-black shadow-lg w-full shadow-black"
                    : ""
                } shadow cursor-pointer  relative   overflow-hidden rounded-lg`}
              >
                <div className="w-full h-25 relative border  bg-amber-200">
                  <Image src={item.image} objectFit="cover" fill alt="image" />
                </div>

                  <div className="bg-violet-900 px-1 min-h-20 flex justify-center items-center flex-col">
                  <h3 className=" text-md  text-white text-center font-bold">
                    {" "}
                    {item.text}
                  </h3>
                  <h3 className=" text-xs font-normal text-white text-center">
                    {" "}
                    {item.val}
                  </h3>
                  <h3 className="text-white text-center font-bold  text-md">
                    {" "}
                    {item.price}$
                  </h3>
                </div>

                <span
                  className={` ${
                    activeIndex.includes(item.id) ? "block" : "hidden"
                  } absolute top-0 z-20  right-0.5`}
                >
                  <FaRegCheckCircle className="bg-black text-white rounded-full text-lg" />
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="col-span-12 grid grid-cols-12 gap-3   w-full ">
          <div className="col-span-12  w-full border-b border-black p-1 text-center font-bold text-xl text-black">
            CLOTHES
          </div>
          {CLOTHESData.map((item, index) => (
             <div className="col-span-6 w-[80%] mx-auto " key={index}>
              <div
                onClick={() => handleClick(item, item.id)}
                className={` ${
                  activeIndex.includes(item.id)
                    ? "border-2 border-black shadow-lg shadow-black"
                    : ""
                } shadow cursor-pointer  relative   overflow-hidden rounded-lg`}
              >
                <div className="w-full h-25 relative border  bg-amber-200">
                  <Image src={item.image} objectFit="cover" fill alt="image" />
                </div>

                <div className="bg-violet-900 px-1 min-h-20 flex justify-center items-center flex-col">
                  <h3 className=" text-md  text-white text-center font-bold">
                    {" "}
                    {item.text}
                  </h3>
                  <h3 className=" text-xs font-normal text-white text-center">
                    {" "}
                    {item.val}
                  </h3>
                  <h3 className="text-white text-center font-bold  text-lg">
                    {" "}
                    {item.price}$
                  </h3>
                </div>

                <span
                  className={` ${
                    activeIndex.includes(item.id) ? "block" : "hidden"
                  } absolute top-0 z-20  right-0.5`}
                >
                  <FaRegCheckCircle className="bg-black text-white rounded-full text-lg" />
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="col-span-12 grid grid-cols-12 gap-3   w-full ">

           <div className="col-span-12  w-full border-b border-black p-1 text-center font-bold text-xl text-black">
            SHOES
          </div>
          {SHOESSData.map((item, index) => (
             <div className="col-span-6 w-[80%] mx-auto " key={index}>
              <div
                onClick={() => handleClick(item, item.id)}
                className={` ${
                  activeIndex.includes(item.id)
                    ? "border-2 border-black shadow-lg shadow-black"
                    : ""
                } shadow cursor-pointer  relative   overflow-hidden rounded-lg`}
              >
                <div className="w-full h-25 relative border  bg-amber-200">
                  <Image src={item.image} objectFit="cover" fill alt="image" />
                </div>

                <div className="bg-violet-900 px-1 min-h-20 flex justify-center items-center flex-col">
                  <h3 className=" text-md  text-white text-center font-normal">
                    {" "}
                    {item.text}
                  </h3>
                  <h3 className=" text-xs font-normal text-white text-center">
                    {" "}
                    {item.val}
                  </h3>
                  <h3 className="text-white text-center font-bold  text-lg">
                    {" "}
                    {item.price}$
                  </h3>
                </div>

                <span
                  className={` ${
                    activeIndex.includes(item.id) ? "block" : "hidden"
                  } absolute top-0 z-20  right-0.5`}
                >
                  <FaRegCheckCircle className="bg-black text-white rounded-full text-lg" />
                </span>
              </div>
            </div>
          ))}
        </div> 
      </div>

      <div className="col-span-6 w-full flex flex-col gap-3 relative h-full ">
        <div className="border border-black p-3 sticky top-0  rounded-lg flex flex-col gap-3">
          <h4 className="text-xl font-medium text-black/90 ">
            Total Budget - <span>150$</span>
          </h4>
          <h4 className="text-xl font-medium text-black/90 ">
            Money Spend - <span>{moneySpent}$</span>
          </h4>
          <h4 className="text-xl font-medium text-black/90 ">
            Remaining Money - <span>{remainingMoney}$</span>
          </h4>
        </div>

        <div className=" w-full border p-5  border-black rounded-lg  flex justify-center flex-col gap-5 items-center">
          <div className="w-full px-2  flex justify-end items-center ">
            <h3 className="text-2xl font-bold text-black text-right w-full ">
              Total Items -
            </h3>
            <div className="relative">
              <span className="absolute -top-5 py-1 -right-2 text-xs  bg-violet-900 text-white rounded-full px-2">
                {" "}
                {count}
              </span>
              <BsCartDash className="text-violet-900 text-3xl" />
            </div>
            <div></div>
          </div>
          {cartArry.map((item, index) => (
            <div
              key={index}
              className="flex bg-violet-100 p-2 px-8 rounded-lg w-full justify-between items-center "
            >
              <div className="w-15 h-15 relative  ">
                <Image src={item.image} objectFit="cover" fill alt="image" />
              </div>
              <h3 className="text-black text-xl">{item.text}</h3>
              <MdDeleteForever
                onClick={() => handleRemoveItem(index)}
                className="text-red-600 text-2xl cursor-pointer active:scale-95 hover:-translate-y-0.5 transition-all duration-200"
              />
            </div>
          ))}
        </div>
      </div>
      <Welldone open={open} setOpen={setOpen} text={text} />
    </div>


  );
};

export default Table;
