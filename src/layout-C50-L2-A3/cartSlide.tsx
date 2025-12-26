import SlideData from "@/src/layout-C50-L2-A3/slide1.json";
import React, { useState } from "react";
import { FaCartPlus } from "react-icons/fa";


const CartSlide = () => {

    const [cartItms ,setCartItems] =useState<number[]>([])


    const handelInputChange = (index:number)=>{
setCartItems((prev)=> 
    prev.includes(index)
? prev.filter((idx) => index !== idx) : [...prev,index]


)


    }
  return (
    <div className="grid grid-cols-12 w-full">
        <div className="col-span-2 border w-full text-center text-black font-bold flex items-center justify-center">ITEM</div>
        <div className="col-span-2 border w-full text-center text-black font-bold flex items-center justify-center">COST</div>
        <div className="col-span-2 border w-full text-center text-black font-bold flex items-center justify-center">TAX</div>
        <div className="col-span-2 border w-full text-center text-black font-bold flex items-center justify-center">DISCOUNT</div>
        <div className="col-span-2 border w-full text-center text-black font-bold flex items-center justify-center">BRAND</div>
        <div className="col-span-2 uppercase border  w-full text-center flex items-center justify-center text-black font-bold">
             Cart 
            <div className="relative  p-4"><FaCartPlus className="text-2xl text-violet-900"/> <span className="absolute top-0 right-2 text-violet-900 font-bold">{cartItms.length}</span></div>
        </div>
{
    SlideData.map((i,index)=>(
        <React.Fragment key={index}>

        <div className="col-span-2  w-full text-center text-black border p-2 font-bold ">{i.col1}</div>
        <div className="col-span-2  w-full text-center text-black border p-2  ">{i.col2}</div>
        <div className="col-span-2  w-full text-center text-black border p-2  ">{i.col3}</div>
        <div className="col-span-2  w-full text-center text-black border p-2  ">{i.col4}</div>
        <div className="col-span-2  w-full text-center text-black border p-2  ">{i.col5}</div>
        <div className="col-span-2  w-full text-center text-black border p-2  ">
            <input type="checkbox" name="cart" title="add to cart"
            checked={cartItms.includes(index)}
            onChange={()=>handelInputChange(index)}
            className="cursor-pointer accent-violet-900 w-5 h-5"
            
            />
        </div>

        </React.Fragment>
    ))
}
      
    </div>
  )
}

export default CartSlide
