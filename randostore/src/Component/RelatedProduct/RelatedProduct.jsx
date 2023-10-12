import React from 'react'
import data_product from '../Assets/data'
import Items from '../Items/Items'

const RelatedProduct = () => {
  return (
    <div className="flex flex-col items-center h-[90vh] mt-10">

        <h1 className="text-[#1f1f1f] font-bold font-md text-3xl mb-5">Related Product</h1>
        <hr  className="border-t-2 border-gray-300 my-6 h-12 w-[50px]" />
        <div className="grid grid-cols-4 gap-2">
         {
            data_product.map((item, i)=>{

                return( <Items key={i} 
                    id={item.id}  
                    name={item.name}  
                    image={item.image} 
                     new_price={item.new_price}
                      old_price={item.old_price}/>)
                
                
            })
         }


        </div>
    </div>
  )
}

export default RelatedProduct