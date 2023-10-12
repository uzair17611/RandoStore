import React, { createContext } from "react";
import all_Product from "../Assets/all_product.js"
import { useState } from "react";



export const ItemsContext =createContext(null)
const  GetDefaultCart =()=>{
    let cart ={}

    for (let index = 0; index < all_Product.length+1; index++) {
      cart[index] =0
     
    }
    return cart

}

const   ItemContextProvider =(props)=>{


const [cartItem ,SetCartItems] =useState(GetDefaultCart())  


const addToCART =(ItemId)=>{

    SetCartItems((prev)=>({...prev ,[ItemId]:prev[ItemId]+1}))

    console.log(cartItem)
}

const removeFromCART =(ItemId)=>{

    SetCartItems((prev)=>({...prev ,[ItemId]:prev[ItemId]-1}))
}
const  contextValue={all_Product ,cartItem,addToCART ,removeFromCART}
console.log("CARTITEM",cartItem )



return (
    <ItemsContext.Provider value={contextValue}>
        {props.children}
    </ItemsContext.Provider>
)

}

export default ItemContextProvider