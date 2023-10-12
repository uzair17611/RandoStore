import React, { useContext } from 'react'
import start_icon from "../Assets/star_icon.png"
import start_dull_icon from "../Assets/star_dull_icon.png"
import { ItemsContext } from '../ItemsContext/ItemsContext'

const ProductDisplay = (props) => {
    const {addToCART} = useContext(ItemsContext)
    const {product}  =props

    console.log("Product",product)
  return (
    <div className="mt-0 mr-170 flex ml-10">

        <div className="flex gap-10 rounded-md">
            <div className="flex gap-10">
  <div className="flex flex-col gap-5">
    <img src={product.image} alt="" className="h-28" />
    <img src={product.image} alt="" className="h-28" />
    <img src={product.image} alt="" className="h-28" />
    <img src={product.image} alt="" className="h-28" />
  </div>
</div>


        <div className="">
            <img src={product.image} alt=""  className="h-full"/>
        </div>
        
        </div>
        
        <div className="flex flex-col ml-10">
       

            <h1 className="text-3xl font-bold text-[#3a3a3a]">{product.name}</h1>

            <div className="flex items-center gap-2 mt-5">
           <img src={start_icon} alt="" />
           <img src={start_icon} alt="" />
           <img src={start_icon}   alt="" />
           <img src={start_icon}   alt="" />
           <img src={start_dull_icon}    alt="" />
           <p>(122)</p>
           </div>
           <div className='text-24 font-bold flex gap-10 mt-5'>
            <div className="line-through text-[#1f1f1f]">${product.old_price}</div>
            <div className="text-red-600">${product.new_price}</div>
           </div>
           <div>
           A stylish blouse with flutter sleeves and a peplum hem. Perfect for casual or formal occasions.
           </div>

           
               <div >
                <h1 className="text-[#6f6f6f] font-bold">Select Size</h1>
                <div className="flex  my-20 mx-30 gap-4 justify-start">
                    <div className='border border-slate-300 rounded  cursor-pointer px-3 py-2'>S</div>
                    <div  className='border border-slate-300 rounded  cursor-pointer px-3 py-2'>M</div>
                    <div  className='border border-slate-300 rounded  cursor-pointer px-3 py-2'>L</div>
                    <div  className='border border-slate-300 rounded  cursor-pointer px-3 py-2'>XL</div> 
                    <div  className='border border-slate-300 rounded  cursor-pointer px-3 py-2'>XXL</div>
                </div>
               </div>
               <button className="border-none outline-none cursor-pointer bg-red-500 text-white font-bold rounded-md p-3 flex items-center justify-center" onClick={()=>{addToCART(product.id)}}>Add to cart</button>
               <p className="mt-10">
              <span className='font-bold'>  catagory :</span> women T-shirt crop Top

               </p>
               <p>
              <span className="font-bold"> catagory :</span> Modern Latest

               </p>


        </div>



    </div>
  )
}

export default ProductDisplay