import AddGroceryForm from "./Components/AddGrocery/AddGroceryForm";
import GroceryList from "./Components/GroceryList/GroceryList";
import Navbar from "./Components/Header/navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <AddGroceryForm />
      <GroceryList />
    </>
  );
}
