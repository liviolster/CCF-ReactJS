import Card from "../Card";
import { useParams } from 'react-router-dom';




const ProductList = ({ productos }) => {
  const { categoryId } = useParams()
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


