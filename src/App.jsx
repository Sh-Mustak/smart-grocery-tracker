import { useState } from "react";
import AddGroceryForm from "./Components/AddGrocery/AddGroceryForm";
import GroceryList from "./Components/GroceryList/GroceryList";
import Navbar from "./Components/Header/navbar";
export default function App() {
  const [items, setItems] = useState([]);
  const handleOnAddItem = (item) => {
    setItems([...items, item]);
  };
  const handleDeleteItem = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
  };
  const handleEditItem = (editedItem) => {
    const updatedItems = items.map((item) => {
      if (item.id === editedItem.id) {
        return editedItem;
      } else {
        return item;
      }
    });
    setItems(updatedItems);
  };

  return (
    <>
      <Navbar />
      <AddGroceryForm handleOnAddItem={handleOnAddItem} />
      <GroceryList
        items={items}
        handleDeleteItem={handleDeleteItem}
        handleEditItem={handleEditItem}
      />
    </>
  );
}
