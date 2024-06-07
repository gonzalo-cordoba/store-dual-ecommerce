import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";

import { db } from "../../firebase/firebase-config";
import { AddCartButton } from "../button/AddCartButton";
import { Link } from "react-router-dom";

export const ProductList = ({ category }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsSnapshot = await getProducts();
        const productList = productsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const filteredProducts = category
          ? productList.filter((product) => product.category === category)
          : productList;

        setProducts(filteredProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [category]);

  const getProducts = async () => {
    try {
      const productsRef = collection(db, "products");
      const snapshot = await getDocs(productsRef);
      return snapshot;
    } catch (error) {
      throw new Error("Error getting products:", error);
    }
  };

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <Link key={product.id} to={product.to} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  ${product.price}
                </p>
                <AddCartButton />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};