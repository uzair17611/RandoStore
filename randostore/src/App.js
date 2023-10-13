import React from 'react';
import './App.css';
import Navber from './Component/Navber/Navber.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListItems from './Pages/ListItems';
import CatagoryPage from './Pages/CatagoryPage.jsx';
import Cart from './Pages/Cart.jsx';
import LoginSignup from './Pages/LoginSignup.jsx';
import Products from "./Pages/Products.jsx";
import Footer from './Component/Footer/Footer';
import women_banner from "./Component/Assets/banner_women.png"
import kid_banner from "./Component/Assets/banner_kids.png"
import men_banner from "./Component/Assets/banner_mens.png"
import SignUp from './Pages/SignUp';
import AddNewProduct from './Pages/AddNewProduct';
import EditProduct from './Pages/EditProduct';
import ProductDisplay from "./Component/ProductDisplay/ProductDisplay"



function App() {
  return (
    <div className="App">
     
        <Navber />
        <Routes>
          <Route path="/" element={<ListItems />} />
          <Route path="/men" element={<CatagoryPage  banner={men_banner} catagory="men"/>} />
          <Route path="/women" element={<CatagoryPage  banner={women_banner}  catagory="women"/>} />
          <Route path="/kids" element={<CatagoryPage  banner={kid_banner} catagory="kid"/>} />
          <Route path="/product" element={<Products/>}>
        
          </Route>
          <Route path="/product/:productId" element={<ProductDisplay />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup/>} />
          <Route  path="/signup" element={<SignUp/>}></Route>
          <Route path="/AddnewPrduct" element={<AddNewProduct/>}/>
           <Route path="/edit/:productId"  element={<EditProduct/>}/>
        </Routes>
     <Footer/>
    </div>
  );
}

export default App;
