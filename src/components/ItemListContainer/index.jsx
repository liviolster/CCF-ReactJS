import Card from "../Card";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";

const ProductList = () => {
  const [productos, setProductos] = useState([]);
  const { categoryId } = useParams()

  useEffect(() => {
    fetch("./productos.json")
      .then((response) => response.json())
      .then((data) => {
        if(categoryId){
          setProductos(data.filter((item)=>item.category === categoryId));
        }else{
          setProductos(data);
        }
      });
  }, [categoryId]);
  console.log("Category: ", categoryId)
  

  return (
    <div>
      {productos.map((producto) => (
        <Card key={producto.id} producto={producto} />
      ))}
    </div>
  );
};

export default ProductList;