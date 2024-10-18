// src/components/FoodService.js
import axios from 'axios';
const BASE_URL = 'http://localhost:5000/api/item';
 
export const fetchItems = async () => {
  const response = await axios.get(`${BASE_URL}`);
  return response.data;
};
 
export const addItem = async (item) => {
const response = await axios.post(`${BASE_URL}/addItem`, item);
  return response.data;
};
 
export const updateItem = async (id, item) => {
  const response = await axios.put(`${BASE_URL}/updateItem/${id}`, item);
  return response.data;
};
 
export const deleteItem = async (id) => {
  const response = await axios.delete(`${BASE_URL}/deleteItem/${id}`);
  return response.data;
};