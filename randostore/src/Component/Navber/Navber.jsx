import React from 'react'
import logo from "../Assets/logo.png"
import cart_icon from "../Assets/cart_icon.png"





const Navber = () => {
  return (
    <div className='flex justify-around p-14  shadow-md'>
      <div className='flex items-center gap-10'>
        <img src={logo} alt="" />
        <p className='text-black text-3xl font-bold'>Shopper</p>

      </div>
      <ul className='text-lg font-medium  no-underline flex items-center text-[#626262] gap-10 font-md '>
      <li className='flex items-center justify-center gap-2 cursor-pointer'>shop
</li>

        
        <li className='flex items-center justify-center gap-2 cursor-pointer'>MEN</li>
        <li className='flex items-center justify-center gap-2 cursor-pointer'>Women</li>
        <li className='flex items-center justify-center gap-2 cursor-pointer'>Kids</li>
      </ul>

      <div className='flex items-center gap-10'>
  <button className='px-5 py-1 outline-none border border-slate-400 bg-white rounded-md text-black font-bold hover:bg-slate-400'>Login</button>
  
  <div className='relative'>
    
    <div className='absolute bottom-7 left-8 flex mt-0 text-white bg-red-600 rounded-full px-1 border border-black justify-center items-center'>0</div>
    <img src={cart_icon} alt="" />
  </div>
</div>

    </div>
  )
}

export default Navber
