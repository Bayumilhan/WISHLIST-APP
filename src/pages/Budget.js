import React, { useState, useEffect } from "react";

function Budget() {
  const [items, setItems] = useState([]);
  const [budget, setBudget] = useState(0);

  useEffect(() => {
    fetch("/data/wishlist.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Anggaran Wishlist</h1>
      <p>Total Estimasi Biaya: Rp{total.toLocaleString()}</p>
      <div className="mt-4">
        <label>Set Anggaran:</label>
        <input
          type="number"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          className="border p-2"
        />
        <p className="mt-2">
          Status: {budget >= total ? "Cukup" : "Kurang"}
        </p>
      </div>
    </div>
  );
}

export default Budget;
