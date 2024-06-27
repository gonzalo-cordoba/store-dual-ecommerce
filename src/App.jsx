// App.jsx
import { Route, Routes } from "react-router-dom";
import {
  Cart,
  Contact,
  Home,
  Living,
  Login,
  Products,
  Register,
  Room,
} from "./pages";
import { CartProvider, useCart } from "./context/CartContext";
import { ProductList } from "./components/pages-components";
import { ProtectedCheckout } from "./pages/Checkout";

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/productos"
          element={<Products />}
          component={ProductList}
        />
        <Route path="/living" element={<Living />} component={ProductList} />
        <Route path="/habitacion" element={<Room />} component={ProductList} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/carrito" element={<Cart />} component={Cart} />
        <Route path="/registrarse" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<ProtectedCheckout />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
