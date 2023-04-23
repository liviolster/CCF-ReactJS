import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Navigate, useParams, Link } from "react-router-dom";
import db from "../../../db/firebase-config";
import styles from "./cardDetail.module.css";
import { useCartContext } from "../../context/CartContext"
import ItemCount from "../../ItemCount";


const CardDetail = () => {
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
const {addProduct} = useCartContext();

const [goToCart, setGoToCart] = useState(false);

const onAdd = (quantity) => {
  setGoToCart(true);
  addProduct(producto, quantity)
}
  
  useEffect(()=>{
    
    const itemRef = doc(db, "items",id)
    //traemos el documento
    getDoc(itemRef )
    .then((result)=>{
      setProducto({
        id:result.id,
        ...result.data()
      })
    })
    .catch((error)=> console.log(error))
    .finally(()=> setLoading(false))
  }, [id])



  if (!producto) {
    return <Navigate to="/404" />;
  }

  if (loading) {
    return <h2>Loading...</h2>;
  }


  return (
    <div className={styles.border}>
    <div className={styles.container}>
      <h3>{producto.title}</h3>
      <img src={producto.image} alt={producto.title} width="400" />
      <p className={styles.description}>{producto.description}</p>
      <h4>${producto.price}</h4>
  {
    goToCart 
    ? <Link to="/cart"> <h3 className={styles.irCarrito}> Go to cart </h3></Link>
    : <ItemCount initial={1} stock={10} onAdd={onAdd}/>
  }
    </div>
    </div>
  );
};

export default CardDetail;