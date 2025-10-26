export default function AddGroceryForm() {
  return (
    <form className="bg-white shadow-sm rounded-2xl p-5 flex flex-col sm:flex-row gap-3 sm:items-end">
      <div className="flex flex-col flex-1">
        <label className="text-sm font-semibold">Item Name</label>
        <input
          type="text"
          placeholder="e.g. Milk"
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-400"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-semibold">Quantity</label>
        <input
          type="number"
          placeholder="1"
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-400"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-semibold">Category</label>
        <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-400">
          <option value="">Select</option>
          <option>Fruits</option>
          <option>Vegetables</option>
          <option>Snacks</option>
          <option>Drinks</option>
          <option>Others</option>
        </select>
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-semibold">Expiry Date</label>
        <input
          type="date"
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-400"
        />
      </div>

      <button
        type="submit"
        className="bg-green-500 text-white font-semibold rounded-lg px-4 py-2 hover:bg-green-600 transition"
      >
        Add
      </button>
    </form>
  );
}
