export default function Navbar() {
  return (
    <header className="bg-white shadow-sm rounded-2xl p-5 flex flex-col sm:flex-row justify-between items-center gap-4">
      <h1 className="text-2xl font-bold text-green-600">
        🥦 Smart Grocery Tracker
      </h1>

      <div className="flex gap-2 w-full sm:w-auto">
        <input
          type="text"
          placeholder="Search groceries..."
          className="w-full sm:w-64 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-400">
          <option value="">All</option>
          <option value="Fruits">Fruits</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Snacks">Snacks</option>
          <option value="Drinks">Drinks</option>
          <option value="Others">Others</option>
        </select>
      </div>
    </header>
  );
}
