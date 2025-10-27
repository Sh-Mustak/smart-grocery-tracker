import { useState } from "react";
export default function ItemEditModal({ setIsOpen, item, handleEditItem }) {
  const [formData, setFormData] = useState({
    id: item.id || "",
    itemName: item.itemName || "",
    quantity: item.quantity || "",
    category: item.category || "",
    expiryDate: item.expiryDate || "",
  });
  //   console.log(formData);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSave = () => {
    handleEditItem(formData);
    setIsOpen(false);
  };
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      role="dialog"
      aria-modal="true"
    >
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="px-6 py-4 border-b">
          <h2 className="text-lg font-medium text-gray-800">Edit Item</h2>
        </div>

        <div className="p-6 space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Name</label>
            <input
              name="itemName"
              value={formData.itemName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
              placeholder="e.g. Apples"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Quantity
              </label>
              <input
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
                type="number"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Category
              </label>
              <input
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
                placeholder="e.g. Fruit"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Expiry Date
            </label>
            <input
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
              type="date"
            />
          </div>
        </div>

        <div className="flex justify-end gap-3 px-6 py-4 border-t">
          <button
            onClick={() => setIsOpen(false)}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
          >
            Cancel
          </button>
          <button
            onClick={onSave}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
