import React, { useState, useEffect } from "react";

function Categories() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/data/wishlist.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const categories = [...new Set(items.map((item) => item.category))];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Kategori Wishlist</h1>
      {categories.map((category) => (
        <div key={category} className="mb-4">
          <h2 className="text-xl font-bold">{category}</h2>
          <ul>
            {items
              .filter((item) => item.category === category)
              .map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Categories;
