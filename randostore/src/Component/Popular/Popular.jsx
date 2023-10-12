import React from 'react'
import data_product from "../Assets/data"
import Items from '../Items/Items'

const Popular = () => {
  return (
    <div className="flex items-center gap-10 flex-col h-[90vh]">
    <h1 className="text-50 font-semibold text-black text-3xl">Popular in women</h1>
    <hr className="w-[200px] h-[6px] rounded bg-green-950" />
<div className='flex  gap-10 '>
    {data_product.map((item ,i)=>{
        return(
       <Items key={i} 
       id={item.id}  
       name={item.name}  
       image={item.image} 
        new_price={item.new_price}
         old_price={item.old_price}/>
        )
    })}
</div>

    </div>
  )
}

export default Popular