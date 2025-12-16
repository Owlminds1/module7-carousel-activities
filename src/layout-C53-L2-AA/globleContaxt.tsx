"use client"

import { createContext, ReactNode, useContext, useState } from "react"
type contextType = {
      id:string;
  text: string;
  val: string;
  price: number;
  image:string
}


type CartContextType  ={
    cartArry:contextType[],
    setCartArry:React.Dispatch<React.SetStateAction<contextType[]>>
}

const cartContext  = createContext<CartContextType | null>(null) 
const GlobleContaxt = ({children}:{children:ReactNode}) => {
      const [cartArry, setCartArry] = useState<contextType[]>([]);
  return (
    <cartContext.Provider value={{cartArry,setCartArry}}>
      {children}
    </cartContext.Provider>
  )
}



export default GlobleContaxt


export const useCart = ()=>{
    const contaxt = useContext(cartContext)
    if(!contaxt){
        throw new Error("useCart must be used inside GlobalContext Provider");
    }
    return contaxt
}