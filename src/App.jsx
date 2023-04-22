import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import CardDetail from "./components/CardDetail";
import CartWidget from "./components/CartWidget";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import SobreNosotros from "./components/SobreNosotros";




function App() {


  return (
    <div>
      <Navbar />
      <h1>Café Cienfuegos</h1>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<ItemListContainer  />}  />
        <Route path="/productos/:id" element={<CardDetail />} />
        <Route path='/category/:categoryId' element={<ItemListContainer />} />
        <Route path="/sobrenosotros" element={<SobreNosotros />} />
        <Route path="/cart" element={<CartWidget />} />
        <Route path="/404" element={<h2>404 Not Found</h2>} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
          </div>
  );
}

export default App;