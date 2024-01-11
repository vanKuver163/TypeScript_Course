import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { CartProvider } from "./context/CartProvider.tsx";
import { ProductsProveder } from "./context/ProductsProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProductsProveder>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductsProveder>
  </React.StrictMode>
);
