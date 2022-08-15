import React,{createContext,useContext, useState, useEffect} from 'react'

import {toast} from 'react-hot-toast'

const Context =createContext();

export const StateContext=({children}) =>{
       const [showCart,setShowCart] =useState(false)
       const [cartItems, setCartItems] = useState()
       const [totalPrice, setTotalPRice] =useState()
       const [totalQuantities, setQuantities] = useState()
       const [qty, setQty] =useState(1)

       const incQty =()=>{
              setQty((prevQty)=>prevQty+1)
       }
       const desQty =()=>{
              setQty((prevQty)=>{
                     if(prevQty -1 <1) return 1

                   return prevQty-1
              })
       }

       return(
             <Context.Provider 
             value={{
              showCart,
              cartItems,
              totalPrice,
              totalQuantities,
              qty,
              incQty,
              desQty,
             }}
             >
              {children}
             </Context.Provider>

       )
}


export const useStateContext =()=>useContext(Context)