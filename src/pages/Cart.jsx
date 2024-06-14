import React from "react";
import { useCart } from "../context/CartContext";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
} from "@mui/material";
import { Title } from "@mui/icons-material";

export const Cart = () => {
  const { cart, incrementQuantity, decrementQuantity, removeFromCart } =
    useCart();

  const total = cart.reduce(
    (acc, item) => acc + (item.price ? item.price * item.quantity : 0),
    0
  );

  return (
    <div
      className="container mx-auto px-4 md:px-6 py-12"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div className="grid md:grid-cols-[1fr_320px] gap-8">
        <div className="grid gap-6">
          <div className="grid gap-4">
            <h1 className="text-2xl font-bold tracking-tight">Carrito</h1>
            {cart.length === 0 ? (
              <p className="text-gray-500 dark:text-gray-400">
                Su carrito está vacío.
              </p>
            ) : (
              <p className="text-gray-500 dark:text-gray-400">
                Revise sus artículos y proceda al pago.
              </p>
            )}
          </div>
          <div className="grid gap-4">
            {cart.map((item) => (
              <Card key={item.id}>
                <CardContent className="grid md:grid-cols-[120px_1fr_auto] gap-4 items-center">
                  <img
                    src={item.imageSrc}
                    alt={item.name}
                    width={120}
                    height={120}
                    className="rounded-lg object-cover"
                  />
                  <div className="grid gap-1">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      $
                      {item.price !== undefined ? item.price.toFixed(2) : "N/A"}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => decrementQuantity(item.id)}
                    >
                      <MinusIcon className="h-4 w-4" />
                      <span className="sr-only">Decrease quantity</span>
                    </Button>
                    <span className="font-medium">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => incrementQuantity(item.id)}
                    >
                      <PlusIcon className="h-4 w-4" />
                      <span className="sr-only">Increase quantity</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <TrashIcon className="h-4 w-4" />
                      <span className="sr-only">Remove from cart</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div className="grid gap-4">
          <Card>
            <CardHeader>
              <Title>Order Summary</Title>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex items-center justify-between">
                <span>Subtotal</span>
                <span>USD {total.toFixed(2)}</span>
              </div>
              <Divider />
              <div className="flex items-center justify-between font-medium">
                <span>Total</span>
                <span>USD {total.toFixed(2)}</span>
              </div>
            </CardContent>
            <Button
              sx={{
                bgcolor: "blue",
                color: "white",
                width: "100%",
                "&:hover": { bgcolor: "#5c2b83" },
              }}
              className="w-full"
            >
              Finalizar compra
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

function MinusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
    </svg>
  );
}

function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function TrashIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}
