import React from 'react'
import Exclusive_image from "../Assets/exclusive_image.png"

const Offer = () => {
  return (
    <div className='flex  rounded-md m-auto h-[60vh] w-3/4 bg-gradient-to-r from-[#fde1ff] via-[#e1ffea22] to-transparent mt-[150px]  p-0 px-140 mb-20 ml-30 '>
     <div className='flex flex-col justify-center  ml-10'>
      <h1 className="text-5xl text-black font-semibold">Exclusive Offer</h1>
      <h1 className="text-5xl text-black font-semibold">offer for you</h1>
      <p className="text-xl font-semibold">online best Seller Product</p>
      <button className='px-4 border-none py-2 bg-red-500 text-xl text-white cursor-pointer mt-10'>Check now</button>

     </div>
     <div className='flex flex-1 items-center justify-end'>
    <img src={Exclusive_image} alt="" className='' />


     </div>

    </div>
  )
}

export default Offer