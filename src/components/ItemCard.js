import React from "react";
import { Link } from "react-router-dom";

// fungsi delete
function ItemCard({ item, onDeleteSuccess }) {
  const handleDelete = async () => {
    const confirmDelete = window.confirm(`Apakah Anda yakin ingin menghapus item "${item.name}"?`);
    if (confirmDelete) {
      try {
        const response = await fetch(`http://localhost:5000/wishlist/${item.id}`, {
          method: "DELETE",
        });
        if (response.ok) {
          alert("Item berhasil dihapus!");
          onDeleteSuccess(item.id); 
        } else {
          alert("Gagal menghapus item. Coba lagi.");
        }
      } catch (error) {
        console.error("Terjadi kesalahan saat menghapus item:", error);
      }
    }
  };

  return (
    <div className="border rounded-lg p-4 mb-4 shadow-lg hover:shadow-xl transition duration-200">
      <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
      <p className="text-gray-600">Kategori: {item.category}</p>
      <p className="text-gray-600">Harga: Rp{item.price.toLocaleString()}</p>
      <p className="text-gray-600">Status: {item.priority ? "Prioritas" : "Biasa"}</p>
      <div className="mt-4 flex space-x-4">
        <Link
          to={`/item/${item.id}`}
          className="text-green-600 hover:text-green-800 underline"
        >
          Lihat Detail
        </Link>
        <button
          onClick={handleDelete}
          className="text-red-600 hover:text-red-800 underline"
        >
          Hapus
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
