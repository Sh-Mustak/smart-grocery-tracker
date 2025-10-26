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

  return (
    <>
      <Navbar />
      <AddGroceryForm handleOnAddItem={handleOnAddItem} />
      <GroceryList items={items} handleDeleteItem={handleDeleteItem} />
    </>
  );
}
