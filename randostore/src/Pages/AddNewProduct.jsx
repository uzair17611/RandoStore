import React, { useState } from 'react';
import axios from 'axios';
import axiosRequest from '../Utilis/axiosRequest';
import { backEndbaseURL } from '../Utilis/baseUrl';

const AddNewProduct = () => {
  const [formData, setFormData] = useState({
    image: '',
    name: '',
    price: '',
    id: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const processedValue = name === 'image' ? backEndbaseURL + '/' + value : value;

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the API endpoint
      const response = await axiosRequest.post('/items', formData);
      
      // Log the server response
      console.log('Server Response:', response.data);

      // Reset the form after successful submission
      setFormData({
        image: '',
        name: '',
        price: '',
        id: '',
      });
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">
            Image URL
          </label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.img}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Product Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">
            Product Price
          </label>
          <input
            type="text"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="id" className="block text-sm font-medium text-gray-700">
            Product ID
          </label>
          <input
            type="text"
            id="id"
            name="id"
            value={formData.id}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md focus:ring focus:border-blue-300"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddNewProduct;
