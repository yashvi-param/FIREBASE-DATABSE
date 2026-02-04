<img width="1906" height="750" alt="Screenshot 2026-02-04 130104" src="https://github.com/user-attachments/assets/416b42ef-75d3-4660-80bb-f1907c616a54" />

🛍️ Product CRUD Application

This is a simple Product CRUD (Create, Read, Update, Delete) application built using React and Redux Toolkit.
The App component serves as the root component and renders the main layout along with the ProductList component.

🚀 Features

Add new products

View product list

Update existing products

Delete products

Centralized state management with Redux

Clean and minimal UI

🧱 Tech Stack

React

Redux Toolkit

React Redux

CSS

📁 Project Structure
src/
├── Components/
│   └── Product/
│       ├── ProductForm.jsx
│       ├── ProductList.jsx
│       └── ProductCard.jsx
├── Features/
│   └── Product/
│       └── productSlice.js
├── Store/
│   └── store.js
├── App.jsx
├── App.css
└── main.jsx

📄 App Component Overview

File: src/App.jsx

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

🧠 What App.jsx Does

Acts as the entry UI component

Displays the application title

Loads the ProductList component

Applies global styles using App.css

🎨 Styling

Global styles are managed in:

src/App.css


Example class used:

.app-container – wraps the whole app layout

▶️ How to Run the Project

Install dependencies

npm install


Start development server

npm run dev


Open in browser

http://localhost:5173

📌 Notes

App.jsx does not manage state directly

All product logic is handled via Redux slices

Components are modular and reusable

🔮 Future Enhancements

Firebase / API integration

Search & filter products

Pagination

Authentication

Responsive design improvements
