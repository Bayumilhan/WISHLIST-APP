import React from "react";
import { Link } from "react-router-dom";

function ItemCard({ item }) {
  return (
    <div className="border rounded p-4 mb-4">
      <h2 className="text-lg font-bold">{item.name}</h2>
      <p>Kategori: {item.category}</p>
      <p>Harga: Rp{item.price.toLocaleString()}</p>
      <p>Status: {item.priority ? "Prioritas" : "Biasa"}</p>
      <Link
        to={`/item/${item.id}`}
        className="text-blue-500 underline"
      >
        Lihat Detail
      </Link>
    </div>
  );
}

export default ItemCard;
