import React from "react";
import { useCart } from "../../context/CartContext";
import Swal from "sweetalert2";

export const AddCartButton = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (event) => {
    event.preventDefault();
    if (!product || typeof product.price !== "number") {
      console.error("Producto no válido:", product);
      return;
    }

    addToCart(product);
    Swal.fire({
      title: "Producto Agregado",
      text: "Tu producto ha sido agregado al carrito correctamente 😊.",
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  return (
    <button className="btn btn-neutral" onClick={handleAddToCart}>
      Agregar al carrito
    </button>
  );
};
