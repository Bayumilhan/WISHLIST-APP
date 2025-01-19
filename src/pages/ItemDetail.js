import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ItemDetail() {
  const { id } = useParams(); // Mengambil ID dari URL
  const [item, setItem] = useState(null); // Data item
  const [isEditing, setIsEditing] = useState(false); // Status editing
  const [editedItem, setEditedItem] = useState({}); // Data yang diedit

  useEffect(() => {
    // Fetch data item berdasarkan ID
    fetch(`http://localhost:5000/wishlist/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
        setEditedItem(data); // Menyalin data awal untuk editing
      });
  }, [id]);

  if (!item) return <p>Loading...</p>;

  // Handle update item
  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/wishlist/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedItem),
      });

      if (response.ok) {
        alert("Item berhasil diperbarui!");
        setItem(editedItem);
        setIsEditing(false);
      } else {
        alert("Gagal mengedit item. Coba lagi.");
      }
    } catch (error) {
      console.error("Error editing item:", error);
    }
  };

  // Handle tandai sebagai dibeli
  const handleMarkAsBought = async () => {
    try {
      const response = await fetch(`http://localhost:5000/wishlist/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ bought: true }),
      });

      if (response.ok) {
        alert("Item berhasil ditandai sebagai dibeli!");
        setItem({ ...item, bought: true });
      } else {
        alert("Gagal menandai item. Coba lagi.");
      }
    } catch (error) {
      console.error("Error marking item as bought:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Detail Item</h1>
      {isEditing ? (
        <form onSubmit={handleEditSubmit} className="space-y-4">
          <div>
            <label>Nama Barang:</label>
            <input
              type="text"
              value={editedItem.name}
              onChange={(e) =>
                setEditedItem({ ...editedItem, name: e.target.value })
              }
              className="border p-2 w-full"
              required
            />
          </div>
          <div>
            <label>Kategori:</label>
            <input
              type="text"
              value={editedItem.category}
              onChange={(e) =>
                setEditedItem({ ...editedItem, category: e.target.value })
              }
              className="border p-2 w-full"
              required
            />
          </div>
          <div>
            <label>Harga:</label>
            <input
              type="number"
              value={editedItem.price}
              onChange={(e) =>
                setEditedItem({ ...editedItem, price: Number(e.target.value) })
              }
              className="border p-2 w-full"
              required
            />
          </div>
          <div>
            <label>
              Prioritas:
              <input
                type="checkbox"
                checked={editedItem.priority}
                onChange={(e) =>
                  setEditedItem({ ...editedItem, priority: e.target.checked })
                }
                className="ml-2"
              />
            </label>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2">
            Simpan
          </button>
          <button
            type="button"
            className="bg-gray-500 text-white px-4 py-2 ml-2"
            onClick={() => setIsEditing(false)}
          >
            Batal
          </button>
        </form>
      ) : (
        <div>
          <h2 className="text-xl font-bold">{item.name}</h2>
          <p>Kategori: {item.category}</p>
          <p>Harga: Rp{item.price.toLocaleString()}</p>
          <p>Status: {item.priority ? "Prioritas" : "Biasa"}</p>
          <p>Status Dibeli: {item.bought ? "Sudah Dibeli" : "Belum Dibeli"}</p>

          <button
            className="bg-green-500 text-white px-4 py-2 mt-4"
            onClick={handleMarkAsBought}
            disabled={item.bought} // Jika sudah dibeli, tombol dinonaktifkan
          >
            Tandai sebagai Dibeli
          </button>

          <button
            className="bg-blue-500 text-white px-4 py-2 mt-4 ml-2"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
}

export default ItemDetail;
