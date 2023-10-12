import React from 'react'
import start_icon from "../Assets/star_icon.png"
import start_dull_icon from "../Assets/star_dull_icon.png"

const ProductDisplay = (props) => {
 
    const {product}  =props

    console.log("Product",product)
  return (
    <div className="mt-0 mr-170 flex">

        <div className="flex gap-10 border border-black">
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
        
        <div>
       

            <h1>{product.name}</h1>

            <div>
           <img src={start_icon} alt="" />
           <img src={start_icon} alt="" />
           <img src={start_icon}   alt="" />
           <img src={start_icon}   alt="" />
           <img src={start_dull_icon}    alt="" />
           <p>(122)</p>

           <div>
            <div>${product.old_price}</div>
            <div>${product.new_price}</div>
           </div>
           <div>
           A stylish blouse with flutter sleeves and a peplum hem. Perfect for casual or formal occasions.
           </div>

            </div>
               <div>
                <h1>Select Size</h1>
                <div>
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div> 
                    <div>XXL</div>
                </div>
               </div>
               <button>Add to cart</button>
               <p>
              <span> catagory :</span> women T-shirt crop Top

               </p>
               <p>
              <span> catagory :</span> Modern Latest

               </p>


        </div>



    </div>
  )
}

export default ProductDisplay