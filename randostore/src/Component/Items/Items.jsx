import React from 'react'

const Items = (props) => {
  return (
    <div className="w-[350px] hover:transform hover:scale-105 transition-transform duration-600">
     <img src={props.image} alt="" />
     <p className="mt-6 mb-0">{props.price}</p>
    <div className="flex  gap-10">
     <div className="text-[#373737] text-base font-semibold">
        {props.new_price}
     </div>

     <div className="line-through text-base font-semibold text-[#8c8c8c]">
     {props.old_price}

     </div>

    </div>

    </div>
  )
}

export default Items