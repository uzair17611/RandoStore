import React from 'react'
import arrow_icon from "../Assets/breadcrum_arrow.png"

const BreadCrums = (props) => {
    const { product } = props
    console.log("Product of breadScrum" , product)

    

    return (
        <div className="flex">
            home <img src={arrow_icon} alt="" />  shop <img src={arrow_icon} alt="" /> {} <img src={arrow_icon} alt="" /> {product && product.name}
        </div>
    )
}

export default BreadCrums