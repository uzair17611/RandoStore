import React, { useEffect, useState, } from 'react';
import new_collection from '../Assets/new_collections';
import Items from '../Items/Items';
import axiosRequest from '../../Utilis/axiosRequest';
import { backEndbaseURL } from '../../Utilis/baseUrl';

const NewCollection = () => {
    const [product ,setProduct] =useState([])
    useEffect(() => {
        
    const fetchProduct =async()=>{

        try {
            const  response = await axiosRequest.get("/items");
            console.log(response);
            setProduct(response.data ?? [] )
             

        } catch (error) {
            console.log(error)
        }

    }

    fetchProduct()
        
        
      }, []);
   

  return (
    <div className="flex flex-col flex-wrap items-center h-auto ">
      <h1 className="text-3xl font-bold mb-4">New Collection</h1>
      <hr className="w-1/4 mb-4" />
      <div className="grid grid-cols-4 gap-4 ">
        {product?.map((item, i) => (
          <Items
            key={i}
            name={item?.name}
            image={backEndbaseURL + "/" + (item?.img || '')}
            new_price={item?.price}
          />
        ))}
      </div>
    </div>
  );
};

export default NewCollection