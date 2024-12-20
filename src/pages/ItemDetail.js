import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ItemDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch("/data/wishlist.json")
      .then((res) => res.json())
      .then((data) => setItem(data.find((i) => i.id === parseInt(id))));
  }, [id]);

  if (!item) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">{item.name}</h1>
      <p>Kategori: {item.category}</p>
      <p>Harga: Rp{item.price.toLocaleString()}</p>
      <p>Status: {item.priority ? "Prioritas" : "Biasa"}</p>
      <button
        className="bg-green-500 text-white px-4 py-2 mt-4"
        onClick={() => alert("Item ditandai sebagai dibeli")}
      >
        Tandai sebagai Dibeli
      </button>
    </div>
  );
}

export default ItemDetail;
