import React from "react";
import { ProductList } from "../components/pages-components";

export const Products = () => {
  return (
    <div className="bg-white">
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Los mejores productos para tu hogar!
          </h1>
        </div>
      </header>
      <ProductList />;
    </div>
  );
};
