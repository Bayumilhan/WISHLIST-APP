import React, { useState } from "react";

function AddItem() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [priority, setPriority] = useState(false);

  // handle add data
const handleSubmit = (e) => {
  e.preventDefault();
  const newItem = { name, category, price, priority };

  fetch("http://localhost:5000/wishlist", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newItem),
  })
    .then((res) => res.json())
    .then(() => {
      alert(`Item "${name}" berhasil ditambahkan!`);
      setName("");
      setCategory("");
      setPrice(0);
      setPriority(false);   
    });
};

  return (
    <div className="container mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6">Tambah Wishlist</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-2">Nama Wishlist:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-3 w-full rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-2">Kategori:</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border p-3 w-full rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-2">Harga:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="border p-3 w-full rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
            required
          />
        </div>
        <div>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={priority}
              onChange={(e) => setPriority(e.target.checked)}
              className="form-checkbox h-5 w-5 text-green-600"
            />
            <span className="ml-2">Prioritas</span>
          </label>
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition duration-200"
        >
          Tambah
        </button>
      </form>
    </div>
  );
}

export default AddItem;