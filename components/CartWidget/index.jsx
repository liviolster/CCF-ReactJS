import React, {useContext, useState} from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart";
import styles from "./cartWidget.module.css"
import { CiShoppingCart } from 'react-icons/ci'
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const CartWidget = () => {
const {totalProducts} = useCartContext();
  const activeStyle = {
    color: "#5B7E73",
  };

  
  const { cart, totalPrice } = useCartContext();


const order = {
  buyer: {
    name: " ",
    email: " ",
    phone:" ",
    address: " "
  },
items: cart.map(producto => ({id: producto.id, title: producto.title, price: producto.price, quantity: producto.quantity,})),
total: totalPrice(), 

}

const handleClick = () => {
  const db = getFirestore();
  const ordersCollection = collection(db, "orders"); 
  addDoc(ordersCollection, order)
  .then (({ id }) => console.log(id));
}

if (cart.length === 0) {
  return (
    <>
    <p>There are no items in the cart</p>
    <Link to="/"> <h4 className={styles.seguirComprando}> Keep Buying </h4></Link>
    </>
  );
};


  return (
<div>
  <>
  {
    cart.map(producto => <ItemCart key={producto.id} producto={producto}/>)
  }
  <h4 className={styles.seguirComprando}>Total: ${totalPrice()}</h4>
  </>
 
 <form action="">
 <input type="text" placeholder="Name" className={styles.input}/>
 <input type="text" placeholder="Surname" className={styles.input}/>
 <input type="text" placeholder="Phone Number" className={styles.input}/>
 <input type="text" placeholder="Mail" className={styles.input}/>
 </form>
 <button onClick={handleClick}>Complete Purchase</button> 
 <h2>Purchase Id: {collection.id}</h2>
</div>

  )
}

export default CartWidget;
