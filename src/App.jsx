import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import CardDetail from "./components/CardDetail";
import Home from "./components/Home";
import Ingresar from "./components/Ingresar";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import SobreNosotros from "./components/SobreNosotros";


function App() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("./productos.json")
      .then((response) => response.json())
      .then((data) => {
        setProductos(data);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Café Cienfuegos</h1>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/ingresar" element={<Ingresar />} />
        <Route path="/sobrenosotros" element={<SobreNosotros />} />
        <Route
          path="/productos"
          element={<ProductList productos={productos} />}
        />
        <Route path="/productos/:id" element={<CardDetail />} />
        <Route path="/cart" element={<h3>Cart</h3>} />
        <Route path="/404" element={<h2>404 Not Found</h2>} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
          </div>
  );
}

export default App;
