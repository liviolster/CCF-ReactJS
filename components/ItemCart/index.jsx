import React from 'react';
import { useCartContext } from '../../context/CartContext';
import styles from "./itemCart.module.css";

const ItemCart = ({ producto }) => {

 const { removeProduct }= useCartContext();
    return (
        <div className={styles.itemCart}>
            <img src={producto.image} alt={producto.title}/>
            <div>
            <p>{producto.title}</p>
            <p>Quantity: {producto.quantity}</p> 
            <p>Price u.: {producto.price}</p> 
            <p>Subtotal: ${producto.quantity * producto.price}</p>
            <button onClick={() => removeProduct(producto.id)}>Delete</button>
            </div>
            </div>
    )
}

export default ItemCart;