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
import "./styles/index.css";
import "./styles/flags-styles/flags.css";
import { CartProvider } from "./context/CartContext";
import { ProductList } from "./components/pages-components";
import { ProductOverviews } from "./components/ProductOverviews";

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
        <Route path="/productos-vista" element={<ProductOverviews />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
