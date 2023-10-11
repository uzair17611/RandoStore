import React, { createContext } from "react";
import all_Product from "../Assets/all_product.js"







export const ItemsContext =createContext(null)



const   ItemContextProvider =()=>{
const  contextValue={all_Product}

return (
    <ItemsContext.Provider value={contextValue}>
        {props.children}
    </ItemsContext.Provider>
)

}