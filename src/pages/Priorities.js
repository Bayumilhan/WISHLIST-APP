import React, { useState, useEffect } from "react";

function Priorities() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/data/wishlist.json")
      .then((res) => res.json())
      .then((data) => setItems(data.filter((item) => item.priority)));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Prioritas Wishlist</h1>
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

export default Priorities;
