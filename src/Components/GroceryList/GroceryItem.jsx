export default function GroceryItem({ item, handleDeleteItem }) {
  return (
    <div className="flex justify-between items-center border border-gray-200 rounded-xl p-4 hover:shadow-md transition">
      <div>
        <h3 className="font-semibold text-gray-800">{item.itemName}</h3>
        <p className="text-sm text-gray-500">
          Qty : {item.quantity} | Catagory : {item.category} | Exp :
          {item.expiryDate}
        </p>
      </div>

      <div className="flex gap-2">
        <button className="px-3 py-1 text-sm text-white bg-green-500 rounded-lg hover:bg-green-600">
          Edit
        </button>
        <button
          onClick={() => handleDeleteItem(item.id)}
          className="px-3 py-1 text-sm text-white bg-red-500 rounded-lg hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
