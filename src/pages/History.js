import React, { useState, useEffect } from "react";

function History() {
  const [items, setItems] = useState([]);
// set history
  useEffect(() => {
    fetch("/data/wishlist.json")
      .then((res) => res.json())
      .then((data) => setItems(data.wishlist.filter((item) => item.bought)));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">History Wishlist</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - Rp{item.price.toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default History;
