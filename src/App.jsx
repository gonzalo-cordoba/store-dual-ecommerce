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

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productos" element={<Products />} />
      <Route path="/living" element={<Living />} />
      <Route path="/habitacion" element={<Room />} />
      <Route path="/contacto" element={<Contact />} />
      <Route path="/carrito" element={<Cart />} />
      <Route path="/registrarse" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
