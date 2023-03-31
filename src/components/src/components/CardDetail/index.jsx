import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";

const CardDetail = () => {
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const getProducto = async () => {
    try {
      const response = await fetch('../productos.json');
      const data = await response.json();
      setProducto(data.find((item)=> item.id === parseInt(id)));
      setLoading(false);
    } catch (error) {
      setProducto(null);
    }
  };

  useEffect(() => {
    getProducto();
  }, []);

  if (!producto) {
    return <Navigate to="/404" />;
  }

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h3>{producto.title}</h3>
      <img src={producto.image} alt={producto.title} width="400" />
      <p>{producto.description}</p>
      <p>{producto.ingredients}</p>
    </div>
  );
};

export default CardDetail;