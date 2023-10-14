import React, { useContext } from 'react'
import { ItemsContext } from '../Component/ItemsContext/ItemsContext'
import { useParams } from 'react-router-dom'
import BreadCrums from '../Component/BreadCrums/BreadCrums'
import ProductDisplay from '../Component/ProductDisplay/ProductDisplay'
import DescriptionBox from '../Component/DescriptionBox/DescriptionBox'
import RelatedProduct from '../Component/RelatedProduct/RelatedProduct'
import {useState,useEffect} from "react"
import axiosRequest from '../Utilis/axiosRequest';

const Products = () => {
    const [Newproduct, setNewProduct] = useState([]);

    useEffect(() => {
        const fetchProduct = async () => {
          try {
            const response = await axiosRequest.get("/items");
            console.log(response);
        
            setNewProduct(response.data ?? []);
          
          } catch (error) {
            console.log(error);
          }
        };
    
        fetchProduct();
      }, []);

   
    const { productId } = useParams()

    console.log("productId" ,productId)
    const product =  Newproduct.find((e) => e.id === Number(productId))
    console.log("Produts of Produts" ,product)

    return (
        <div>
            <BreadCrums product={product}  />
            <ProductDisplay  product={product} />
            <DescriptionBox/>
            <RelatedProduct/>
        </div>
    )
}

export default Products
