import React from "react";
import { ProductList } from "../components/pages-components/ProductList";

export const Room = () => {
  return (
    <div>
      <h2>Productos de habitacion</h2>
      <ProductList category="Habitacion" />
    </div>
  );
};
