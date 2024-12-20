import React, { useState, useEffect } from "react";
import ItemCard from "../components/ItemCard";

function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/data/wishlist.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Daftar Wishlist</h1>
      <div>
        {items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Home;
