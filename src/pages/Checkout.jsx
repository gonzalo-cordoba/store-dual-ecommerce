import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export const Checkout = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { subtotal, total } = useMemo(() => {
    const subtotal = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    const shippingCost = 5.99;
    const total = subtotal + shippingCost;
    return { subtotal, total };
  }, [cart]);

  const onSubmit = (data) => {
    Swal.fire({
      title: "Orden Completa",
      text: "Su orden ha sido completada con éxito. Nos comunicaremos a la brevedad para el seguimiento de su envío.",
      icon: "success",
      confirmButtonText: "OK",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/");
      }
    });
  };

  const onError = () => {
    Swal.fire({
      title: "Campos incompletos",
      text: "Por favor, complete todos los campos.",
      icon: "error",
      confirmButtonText: "OK",
    });
  };

  return (
    <div className="container mx-auto py-12 px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 text-black">Checkout</h1>
          <p className="text-black">
            Complete su pedido proporcionando información de pago y envío.
          </p>
        </div>
        <form className="grid gap-6" onSubmit={handleSubmit(onSubmit, onError)}>
          <div>
            <h2 className="text-xl font-semibold mb-4 text-black">
              Información de envío
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="grid gap-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-black"
                >
                  Nombre
                </label>
                <input
                  id="name"
                  placeholder="Ingrese su nombre"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-600">Este campo es requerido</span>
                )}
              </div>
              <div className="grid gap-2">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-black"
                >
                  Dirección
                </label>
                <input
                  id="address"
                  placeholder="Ingrese su dirección"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  {...register("address", { required: true })}
                />
                {errors.address && (
                  <span className="text-red-600">Este campo es requerido</span>
                )}
              </div>
              <div className="grid gap-2">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-black"
                >
                  Ciudad
                </label>
                <input
                  id="city"
                  placeholder="Ingrese su ciudad"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  {...register("city", { required: true })}
                />
                {errors.city && (
                  <span className="text-red-600">Este campo es requerido</span>
                )}
              </div>
              <div className="grid gap-2">
                <label
                  htmlFor="zip"
                  className="block text-sm font-medium text-black"
                >
                  Código postal
                </label>
                <input
                  id="zip"
                  placeholder="Ingrese su código postal"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  {...register("zip", { required: true })}
                />
                {errors.zip && (
                  <span className="text-red-600">Este campo es requerido</span>
                )}
              </div>
              <div className="grid gap-2">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-black"
                >
                  País
                </label>
                <select
                  id="country"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  {...register("country", { required: true })}
                >
                  <option value="">Seleccione su país</option>
                  <option value="ar">Argentina</option>
                  <option value="br">Brasil</option>
                  <option value="mx">México</option>
                  <option value="uy">Uruguay</option>
                  <option value="py">Paraguay</option>
                </select>
                {errors.country && (
                  <span className="text-red-600">Este campo es requerido</span>
                )}
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4 text-black">
              Información de pago
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="grid gap-2">
                <label
                  htmlFor="card-number"
                  className="block text-sm font-medium text-black"
                >
                  Número de Tarjeta
                </label>
                <input
                  id="card-number"
                  placeholder="Ingrese su número de tarjeta"
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  {...register("cardNumber", {
                    required: true,
                    pattern: /^\d+$/,
                  })}
                />
                {errors.cardNumber && (
                  <span className="text-red-600">
                    Ingrese un número de tarjeta válido
                  </span>
                )}
              </div>
              <div className="grid gap-2">
                <label
                  htmlFor="expiration"
                  className="block text-sm font-medium text-black"
                >
                  Fecha de caducidad
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <select
                    id="expiration-month"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                    {...register("expirationMonth", { required: true })}
                  >
                    <option value="">Mes</option>
                    <option value="01">Enero</option>
                    <option value="02">Febrero</option>
                    <option value="03">Marzo</option>
                    <option value="04">Abril</option>
                    <option value="05">Mayo</option>
                    <option value="06">Junio</option>
                    <option value="07">Julio</option>
                    <option value="08">Agosto</option>
                    <option value="09">Septiembre</option>
                    <option value="10">Octubre</option>
                    <option value="11">Noviembre</option>
                    <option value="12">Diciembre</option>
                  </select>
                  <select
                    id="expiration-year"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                    {...register("expirationYear", { required: true })}
                  >
                    <option value="">Año</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                  </select>
                </div>
                {(errors.expirationMonth || errors.expirationYear) && (
                  <span className="text-red-600">
                    Seleccione una fecha de caducidad
                  </span>
                )}
              </div>
              <div className="grid gap-2">
                <label
                  htmlFor="expiration-year"
                  className="block text-sm font-medium text-black"
                >
                  Fecha de caducidad
                </label>

                <input
                  id="cvc"
                  placeholder="Ingrese su CVC"
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  {...register("cvc", { required: true, pattern: /^\d+$/ })}
                />
                {errors.cvc && (
                  <span className="text-red-600">Ingrese un CVC válido</span>
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-black text-white py-2 px-4 rounded-md hover:bg-green-500 hover:text-white"
              onClick={onSubmit}
            >
              Completar orden
            </button>
          </div>
        </form>
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4 text-black">
            Resumen del pedido
          </h2>
          <div className="grid gap-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-[1fr_auto] items-center gap-4"
              >
                <div>
                  <h3 className="font-medium text-black">{item.name}</h3>
                  <p className="text-black">Cantidad: {item.quantity}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-black">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-[1fr_auto] items-center gap-4">
            <div>
              <h3 className="font-medium text-black">Envío</h3>
              <p className="text-black">Entrega estándar</p>
            </div>
            <div className="text-right">
              <p className="font-medium">$5.99</p>
            </div>
          </div>
          <hr className="my-4" />
          <div className="grid grid-cols-[1fr_auto] items-center gap-4">
            <div>
              <h3 className="font-medium text-black">Total</h3>
            </div>
            <div className="text-right">
              <p className="font-medium text-2xl text-black">
                ${total.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
