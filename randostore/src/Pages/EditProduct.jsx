import React, { useState, useEffect } from 'react';
import axiosRequest from '../Utilis/axiosRequest';
import { useParams } from 'react-router-dom';



const EditProduct = () => {
    const { productId } = useParams();
  const [productData, setProductData] = useState({
    name: '',
    id: '',
    price: '',
    image: '',
  });

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axiosRequest.get(`/items/${productId}`);
        const product = response.data;

        // Prefill the form fields with the fetched data
        setProductData({
          name: product.name,
          id: product.id,
          price: product.price,
          image: product.img,
        });
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    // Fetch product data when the component mounts
    fetchProductData();
  }, [productId]);

  const handleChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      // Send a request to update the product
      await axiosRequest.put(`/items/${productId}`, productData);
      console.log('Product updated successfully!');
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md mb-5">
      <h2 className="text-2xl font-semibold mb-4">Edit Product</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={productData.name}
          onChange={handleChange}
          className="border rounded w-full py-2 px-3"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="id">
          ID:
        </label>
        <input
          type="text"
          id="id"
          name="id"
          value={productData.id}
          onChange={handleChange}
          className="border rounded w-full py-2 px-3"
          readOnly
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
          Price:
        </label>
        <input
          type="text"
          id="price"
          name="price"
          value={productData.price}
          onChange={handleChange}
          className="border rounded w-full py-2 px-3"
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
          Image URL:
        </label>
        <input
          type="text"
          id="image"
          name="image"
          value={productData.image}
          onChange={handleChange}
          className="border rounded w-full py-2 px-3"
        />
      </div>
      <div className="flex justify-between">
        <button
          onClick={handleSave}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          Save
        </button>
        <button
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default EditProduct