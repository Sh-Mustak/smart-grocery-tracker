export default function GroceryItem() {
  return (
    <div className="flex justify-between items-center border border-gray-200 rounded-xl p-4 hover:shadow-md transition">
      <div>
        <h3 className="font-semibold text-gray-800">Milk</h3>
        <p className="text-sm text-gray-500">
          Qty: 2 | Category: Dairy | Exp: 2025-10-25
        </p>
      </div>

      <div className="flex gap-2">
        <button className="px-3 py-1 text-sm text-white bg-green-500 rounded-lg hover:bg-green-600">
          Edit
        </button>
        <button className="px-3 py-1 text-sm text-white bg-red-500 rounded-lg hover:bg-red-600">
          Delete
        </button>
      </div>
    </div>
  );
}
