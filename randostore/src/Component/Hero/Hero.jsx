import React from 'react'
import hand_icon from "../Assets/hand_icon.png"
import arrow_icon from "../Assets/arrow.png"
import hero_image from "../Assets/hero_image.png"

const Hero = () => {
  return (
    <div className="h-full bg-gradient-to-r from-[#fde1ff] via-[#e1ffea22] to-transparent p-10 flex">
     <div className="flex flex-1 flex-col pl-10 justify-center  line-height-1 gap-10">
       <h2 className="text-black  text-26 font-semibold">new arrival</h2>
       <div>
       <div className="flex items-center gap-10">
     <p className="text-7xl font-bold">new</p>
     <img src={hand_icon} alt="" className="w-[100px]" />
    
     </div>
   <p className="text-7xl font-bold">collections</p>
   <p className="text-7xl font-bold">For everyOne</p>

       </div>

       <div className="flex justify-center items-center bg-red-500 rounded-full mt-10 text-white w-[310px]  h-[70px]">
        <div>Latest Collection</div>
       <img src={arrow_icon} alt="" />
       </div>

     </div>

     <div className='flex flex-1 justify-center items-center'>
   <img src={hero_image} alt="" />


     </div>
     
  

    </div>
  )
}

export default Hero