import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddItem from "./pages/AddItem";
import Categories from "./pages/Categories";
import Priorities from "./pages/Priorities";
import ItemDetail from "./pages/ItemDetail";
import History from "./pages/History";
import Budget from "./pages/Budget";


function App() {
  return (
    <div className="bg-gray-100 min-h-screen">

    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddItem />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/priorities" element={<Priorities />} />
        <Route path="/item/:id" element={<ItemDetail />} />
        <Route path="/history" element={<History />} />
        <Route path="/budget" element={<Budget />} />
      </Routes>
    </div>
    </div>
  );
}

export default App;
