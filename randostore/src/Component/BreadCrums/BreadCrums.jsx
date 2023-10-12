import React from 'react'
import arrow_icon from "../Assets/breadcrum_arrow.png"

const BreadCrums = (props) => {
    const { product } = props
    console.log("Product of breadScrum" , product)

    

    return (
        <div className="flex items-center m-auto mt-10 mb-10 justify-center gap-10">
            home <img src={arrow_icon} alt="" />  shop <img src={arrow_icon} alt="" /> Mens <img src={arrow_icon} alt="" /> {product.name}
        </div>
    )
}

export default BreadCrums