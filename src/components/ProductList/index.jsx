import Card from "../Card";

const ProductList = ({ productos }) => {
  return (
    <div>
      {productos.map((producto) => (
        <Card key={producto.id} producto={producto} />
      ))}
    </div>
  );
};

export default ProductList;
