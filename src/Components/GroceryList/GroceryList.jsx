import GroceryItem from "./GroceryItem";

export default function GroceryList() {
  return (
    <section className="bg-white shadow-sm rounded-2xl p-5">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        🧾 Grocery List
      </h2>

      <div className="grid gap-3">
        <GroceryItem />
        <GroceryItem />
        <GroceryItem />
      </div>
    </section>
  );
}
