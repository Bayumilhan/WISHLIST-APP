import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between md:items-center">
        <h1 className="text-2xl font-bold tracking-wider text-center md:text-left">
          Wishlist App
        </h1>
        <ul className="flex flex-col md:flex-row md:space-x-6 mt-4 md:mt-0 items-center">
          <li className="hover:underline">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:underline">
            <Link to="/add">Add Item</Link>
          </li>
          <li className="hover:underline">
            <Link to="/categories">Categories</Link>
          </li>
          <li className="hover:underline">
            <Link to="/priorities">Priorities</Link>
          </li>
          <li className="hover:underline">
            <Link to="/history">History</Link>
          </li>
          <li className="hover:underline">
            <Link to="/budget">Budget</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
