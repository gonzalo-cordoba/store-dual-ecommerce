import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";
import "./styles/flags-styles/flags.css";
import { NavBar } from "./components/NavBar.jsx";
import { BrowserRouter } from "react-router-dom";
import { Footer } from "./components/Footer.jsx";
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <App />
        <Footer />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
