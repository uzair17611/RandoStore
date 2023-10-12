import React from 'react'
import {Link} from "react-router-dom"


const Items = (props) => {

  return (
    <div className="w-[350px] hover:transform hover:scale-105 transition-transform duration-600">
    <Link to={`/product/${props.id}`}>
        <img src={props.image} alt="" onClick={() => window.scrollTo(0, 0)} className="w-[300px] h-[300px] rounded-md" />
    </Link>
    <div className="flex gap-10 mt-4">
        <div className="flex flex-col p-4 bg-white rounded-md shadow-md transition duration-300 transform hover:scale-105">
            <div className="text-[#373737] text-xl font-semibold mb-2">
                {props.name}
            </div>
            <div className="text-red-500 text-2xl font-semibold">
                $ {props.new_price}
            </div>
        </div>
    </div>
</div>

  )
}

export default Items