import React from "react";
import { ProductList } from "../components/pages-components/ProductList";

export const Living = () => {
  return (
    <div>
      <h2>Productos de Living</h2>
      <ProductList category="Living" />
    </div>
  );
};
