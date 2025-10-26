import GroceryItem from "./GroceryItem";

export default function GroceryList({ items, handleDeleteItem }) {
  return (
    <section className="bg-white shadow-sm rounded-2xl p-5">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        🧾 Grocery List
      </h2>

      <div className="grid gap-3">
        {items.map((item) => (
          <GroceryItem
            key={item.id}
            item={item}
            items={items}
            handleDeleteItem={handleDeleteItem}
          />
        ))}
      </div>
    </section>
  );
}
