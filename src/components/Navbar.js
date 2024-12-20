import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">Wishlist App</h1>
        <ul className="flex space-x-4">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/add">Add Item</Link></li>
          <li><Link to="/categories">Categories</Link></li>
          <li><Link to="/priorities">Priorities</Link></li>
          <li><Link to="/history">History</Link></li>
          <li><Link to="/budget">Budget</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
