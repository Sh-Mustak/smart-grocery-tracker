import GroceryItem from "./GroceryItem";

export default function GroceryList({
  searchItem,
  items,
  handleDeleteItem,
  handleEditItem,
}) {
  const filteredItems = items.filter((item) =>
    item.itemName.toLowerCase().includes(searchItem.toLowerCase())
  );
  return (
    <section className="bg-white shadow-sm rounded-2xl p-5">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        🧾 Grocery List
      </h2>

      <div className="grid gap-3">
        {items.length === 0 ? (
          // Case 1: No items in the list
          <p className="text-gray-500 text-center">
            No items added yet. Please add some groceries.
          </p>
        ) : filteredItems.length === 0 ? (
          // Case 2: Items exist, but none match the search
          <p className="text-gray-500 text-center">No items found.</p>
        ) : (
          // Case 3: Show matching items
          filteredItems.map((item) => (
            <GroceryItem
              key={item.id}
              item={item}
              items={items}
              handleDeleteItem={handleDeleteItem}
              handleEditItem={handleEditItem}
            />
          ))
        )}
      </div>
    </section>
  );
}
