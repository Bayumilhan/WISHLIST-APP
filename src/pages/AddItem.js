import React, { useState } from "react";

function AddItem() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [priority, setPriority] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Item "${name}" berhasil ditambahkan!`);
    // Tambahkan logika penyimpanan ke file JSON di sini.
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Tambah Wishlist</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label>Nama Barang:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 w-full"
            required
          />
        </div>
        <div>
          <label>Kategori:</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border p-2 w-full"
            required
          />
        </div>
        <div>
          <label>Harga:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="border p-2 w-full"
            required
          />
        </div>
        <div>
          <label>
            Prioritas:
            <input
              type="checkbox"
              checked={priority}
              onChange={(e) => setPriority(e.target.checked)}
              className="ml-2"
            />
          </label>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Tambah
        </button>
      </form>
    </div>
  );
}

export default AddItem;
