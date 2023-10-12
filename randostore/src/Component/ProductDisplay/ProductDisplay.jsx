import React, { useEffect, useState, useContext } from 'react';
import start_icon from '../Assets/star_icon.png';
import start_dull_icon from '../Assets/star_dull_icon.png';
import { ItemsContext } from '../ItemsContext/ItemsContext';
import axiosRequest from '../../Utilis/axiosRequest';
import { useParams } from 'react-router-dom';
import { backEndbaseURL } from '../../Utilis/baseUrl';

const ProductDisplay = (props) => {
  const { itemId } = useParams();
  const [newProduct, setNewProduct] = useState({});
  const { addToCART } = useContext(ItemsContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axiosRequest.get(`/items/${itemId}`);
        console.log(response);
        setNewProduct(response.data ?? {});
      } catch (error) {
        console.error('Error fetching product:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [itemId]);

  if (loading) {
    return <p>Loading...</p>; // You can replace this with a loading spinner or component
  }

  return (
    <div className="mt-0 mr-170 flex ml-10">
      <div className="flex gap-10 rounded-md">
        <div className="flex gap-10">
          <div className="flex flex-col gap-5">
            <img src={backEndbaseURL + '/' + (newProduct?.img || '')} alt="" className="h-28" />
            <img src={backEndbaseURL + '/' + (newProduct?.img || '')} alt="" className="h-28" />
            <img src={backEndbaseURL + '/' + (newProduct?.img || '')} alt="" className="h-28" />
            <img src={backEndbaseURL + '/' + (newProduct?.img || '')} alt="" className="h-28" />
          </div>
        </div>

        <div className="">
          <img src={backEndbaseURL + '/' + (newProduct?.img || '')} alt="" className="h-full" />
        </div>
      </div>

      <div className="flex flex-col ml-10">
        <h1 className="text-3xl font-bold text-[#3a3a3a]">{newProduct.name}</h1>

        <div className="flex items-center gap-2 mt-5">
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_dull_icon} alt="" />
          <p>(122)</p>
        </div>

        <div className="text-24 font-bold flex gap-10 mt-5">
          <div className="text-red-600">${newProduct.price}</div>
        </div>

        <div>
          A stylish bed that provides comfort and elegance. Perfect for a good night's sleep.
        </div>

        <div>
          <button
            className="border-none outline-none cursor-pointer bg-red-500 text-white font-bold rounded-md p-3 flex items-center justify-center"
            onClick={() => {
              addToCART(newProduct.id);
            }}
          >
            Add to cart
          </button>
        </div>

        <p className="mt-10">
          <span className="font-bold">Category:</span> Furniture
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
