import React from 'react'
import logo from "../Assets/logo.png"
import cart_icon from "../Assets/cart_icon.png"





const Navber = () => {
  return (
    <div>
      <div>
        <img src={logo} alt="" />
        <p>Shopper</p>

      </div>
      <ul>
        <li>shop</li>
        <li>MEN</li>
        <li>Women</li>
        <li>Kids</li>
      </ul>
    </div>
  )
}

export default Navber
