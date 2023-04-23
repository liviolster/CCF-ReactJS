import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart";
import styles from "./cartWidget.module.css"


const CartWidget = () => {
const {totalProduct} = useCartContext();

  const activeStyle = {
    color: "#5B7E73",
  };

  const { cart, totalPrice } = useCartContext();


if (cart.length === 0) {
  return (
    <>
    <p>No hay elementos en el carrito</p>
    <Link to="/"> <h4 className={styles.seguirComprando}> Seguir comprando </h4></Link>
    </>
  );
}


  return (
<div>
  <>
  {
    cart.map(producto => <ItemCart key={producto.id} producto={producto}/>)
  }
  <h4 className={styles.seguirComprando}>Total: ${totalPrice()}</h4>
  </>
</div>
  )
}

export default CartWidget;
