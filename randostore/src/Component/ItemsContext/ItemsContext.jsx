import React, { createContext } from "react";
import all_Product from "../Assets/all_product.js"
import { useState } from "react";
import all_product from "../Assets/all_product.js";
import Cartitem from "../CartItem/Cartitem.jsx";



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

    SetCartItems((prev)=>(
        {...prev ,[ItemId]:prev[ItemId]+1}))

    console.log(cartItem)
}


const getTotalAmountCart = () => {
    let Total = 0;

    for (const item in cartItem) {
        if (cartItem[item] > 0) {
            let itemInfo = all_Product.find((product) => product.id === Number(item));

            console.log("iteminfo", itemInfo);

            // Check if itemInfo is not undefined before accessing its properties
            if (itemInfo) {
                Total += itemInfo.new_price * cartItem[item];
            }
        }
    }

    console.log("total", Total);
    // Move the log statement outside of the for...in loop

    return Total;
};

const getTotalCartItem =()=>{
    let totalItem=0;
    for (const item in cartItem)
    {
        if(cartItem[item]>0){
            totalItem += cartItem[item]
        }
    }
    return totalItem
}


const removeFromCART =(ItemId)=>{

    SetCartItems((prev)=>({...prev ,[ItemId]:prev[ItemId]-1}))
}
const  contextValue={all_Product ,getTotalAmountCart,cartItem,addToCART ,removeFromCART ,getTotalCartItem}
console.log("CARTITEM",cartItem )



return (
    <ItemsContext.Provider value={contextValue}>
        {props.children}
    </ItemsContext.Provider>
)

}

export default ItemContextProvider