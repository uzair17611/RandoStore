import React from 'react'
import {Link} from "react-router-dom"


const Items = (props) => {

  return (
    <div className="w-[350px] hover:transform hover:scale-105 transition-transform duration-600">
   <Link to ={`/product/${props.id}`}>
    <img src={props.image} alt=""  onClick={window.scrollTo(0,0)}/></Link>  
     <p className="mt-6 mb-0">{props.id}</p>
    <div className="flex  gap-10">
    <div className="text-[#373737] text-base font-semibold">
        {props.name}
     </div>
     <div className="text-[#373737] text-base font-semibold ">
      $  {props.new_price}
     </div>
     
   

     <div className="line-through text-base font-semibold text-[#8c8c8c]">
    $ {props.old_price}

     </div>

    </div>

    </div>
  )
}

export default Items