import React from 'react'
import footer_logo from "../Assets/logo_big.png"
import instagram from "../Assets/instagram_icon.png"
import Watsapp from "../Assets/whatsapp_icon.png"
import pinterest from "../Assets/pintester_icon.png"

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
   <div className="flex item-center gap-10">

    <img src={footer_logo} alt="" />
    <p className="text-20  font-semibold text-[#323232]">Shopper</p>
   </div>
       <ul className="flex style-none gap-10 text-[#252525]">
        <li className="cursor-pointer">Company</li>
        <li>Offices</li>
        <li>about</li>
        <li>Product</li>
        <li>Contact</li>
       </ul>
       <div className="flex gap-10">
     <div className="mt-2 p-2 border border-white">
        <img src={instagram} alt="" />
       </div>
       
       <div className="mt-2 p-2 border border-white">
        <img src={Watsapp} alt="" />
        </div>
        <div className="mt-2 p-2 border border-white">
        <img src={pinterest} alt="" />
       </div>
      
     
     </div>
    
     <div className="flex flex-col items-center gap-30 w-full text-[#1a1a1a]">
     <hr  className="w-80  h-12  border-none rounded-md bg-white"/>
        <p>copy right 2023 all right reserved</p>
   
     </div>
            

       </div>
  
   
  )
}

export default Footer