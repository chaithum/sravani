// src/components/FoodItems.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
 
import config from '../config';
 
const FoodItems = () => {
   
  const [foodItems, setFoodItems] = useState([]);
  const [newItem, setNewItem] = useState({ foodname: '', price: '', description: '', category: '' , availability: '', imgURL: '' });
  const [editItem, setEditItem] = useState(null);
 
  // Fetch all items
  const fetchFoodItems = async () => {
    try {
      const response = await axios.get(`${config.BASE_URL}/api/item`)
      setFoodItems(response.data);
    } catch (error) {
      console.error('Error fetching food items:', error);
    }
  };

  useEffect(() => {
    fetchFoodItems();
  }, []);
 
  // Add a new item
  const handleAddItem = async () => {
    try {
await axios.post(`${config.BASE_URL}/api/item/addItem`, newItem);
      fetchFoodItems();
      setNewItem({ foodname: '', category: '', description: '',  availability: '' , price: '', imgURL: '' });
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };
 
 // Delete an item
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${config.BASE_URL}/api/item/deleteItem/${id}`);
      fetchFoodItems();
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };
 
  // Start editing an item
  const startEditing = (item) => {
    setEditItem(item);
   
  };
 
  //Update an item
  const handleUpdate = async () => {
    try {
      await axios.put(`${config.BASE_URL}/api/item/updateItem/${editItem._id}`, editItem);
      fetchFoodItems();
      setEditItem(null);
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };
 
  return (
    <div>
      <h1>Food Items</h1>
     
       {/* //Add New Item */}
      <div>
        <input
          type="text"
          placeholder="Food Name"
          value={newItem.foodname}
          onChange={(e) => setNewItem({ ...newItem, foodname: e.target.value })}
        />
        <input
          type="text"
          placeholder="Category"
          value={newItem.category}
          onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newItem.description}
          onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Availability"
          value={newItem.availability}
          onChange={(e) => setNewItem({ ...newItem, availability: e.target.value })}
        />
        <input
          type="Number"
          placeholder="Price"
          value={newItem.price}
          onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
        />
         <input
          type="String"
          placeholder="ImgURL"
          value={newItem.imgURL}
          onChange={(e) => setNewItem({ ...newItem, imgURL: e.target.value })}
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
 
      {/* Display All Items */}
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {foodItems.item && foodItems.item.map((item1) => (
          <div key={item1._id} style={{ border: '1px solid #ddd', margin: '10px', padding: '10px' }}>
            {editItem && editItem._id === item1._id ? (
              <div>
                <input
                  type="text"
                  value={editItem.foodname}
                  onChange={(e) => setEditItem({ ...editItem, foodname: e.target.value })}
                />
                <input
                  type="text"
                  value={editItem.category}
                  onChange={(e) => setEditItem({ ...editItem, category: e.target.value })}
                />
                <input
                  type="text"
                  value={editItem.description}
                  onChange={(e) => setEditItem({ ...editItem, description: e.target.value })}
                />
                <input
                  type="text"
                  value={editItem.availability}
                  onChange={(e) => setEditItem({ ...editItem, availability: e.target.value })}
                />
                <input
                  type="number"
                  value={editItem.price}
                  onChange={(e) => setEditItem({ ...editItem, price: e.target.value })}
                />
                <input
                  type="String"
                  value={editItem.imgURL}
                  onChange={(e) => setEditItem({ ...editItem, imgURL: e.target.value })}
                />
 
 
                <button onClick={handleUpdate}>Update</button>
                <button onClick={() => setEditItem(null)}>Cancel</button>
              </div>
            ) : (
              <div>
                <h2>{item1.foodname}</h2>
                <p>{item1.description}</p>
                <h3>₹{item1.price}</h3>
                <p>{item1.availability}</p>
                <p>{item1.category}</p>
                <img src="/dosa.jpg"></img>
                <button onClick={() => startEditing(item1)}>Edit</button>
                <button onClick={() => handleDelete(item1._id)}>Delete</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
 
export default FoodItems;
 