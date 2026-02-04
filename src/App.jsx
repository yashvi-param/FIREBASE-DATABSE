import React from "react";
import "./App.css";
import ProductList from "./Components/Product/ProductList";

const App = () => {
  return (
    <div className="app-container">
      <h1>Product CRUD</h1>
      <ProductList />
    </div>
  );
};

export default App;
