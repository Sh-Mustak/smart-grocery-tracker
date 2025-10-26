import { useState } from "react";
export default function AddGroceryForm({ handleOnAddItem }) {
  const [formData, setFormData] = useState({
    itemName: "",
    quantity: 1,
    category: "",
    expiryDate: "",
  });
  const handleChange = (e) => {
    // const { name, value } = e.target;
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let itemWithId = { ...formData, id: crypto.randomUUID() };
    handleOnAddItem(itemWithId);

    setFormData({
      itemName: "",
      quantity: 1,
      category: "",
      expiryDate: "",
    });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-sm rounded-2xl p-5 flex flex-col sm:flex-row gap-3 sm:items-end"
    >
      <div className="flex flex-col flex-1">
        <label className="text-sm font-semibold">Item Name</label>
        <input
          name="itemName"
          value={formData.itemName}
          onChange={handleChange}
          required
          type="text"
          placeholder="e.g. Milk"
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-400"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-semibold">Quantity</label>
        <input
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          required
          type="number"
          placeholder="1"
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-400"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-semibold">Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-400"
        >
          <option value="">Select</option>
          <option value="Fruits">Fruits</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Snacks">Snacks</option>
          <option value="Drinks">Drinks</option>
          <option value="Others">Others</option>
        </select>
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-semibold">Expiry Date</label>
        <input
          name="expiryDate"
          value={formData.expiryDate}
          onChange={handleChange}
          required
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
