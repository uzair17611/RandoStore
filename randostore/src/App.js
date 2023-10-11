import React from 'react';
import './App.css';
import Navber from './Component/Navber/Navber.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListItems from './Pages/ListItems';
import CatagoryPage from './Pages/CatagoryPage.jsx';
import Cart from './Pages/Cart.jsx';
import LoginSignup from './Pages/LoginSignup.jsx';
import Products from "./Pages/Products.jsx";

function App() {
  return (
    <div className="App">
     
        <Navber />
        <Routes>
          <Route path="/" element={<ListItems />} />
          <Route path="/mens" element={<CatagoryPage/>} />
          <Route path="/women" element={<CatagoryPage />} />
          <Route path="/kids" element={<CatagoryPage />} />
          <Route path="/product" element={<Products />}>
          <Route path=":productID" element={<Products />}/>
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup/>} />
        </Routes>
     
    </div>
  );
}

export default App;
