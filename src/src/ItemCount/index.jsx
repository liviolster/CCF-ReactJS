import React, { useState, useEffect } from 'react';
import styles from "./itemCount.module.css";

export const ItemCount = ({initial, stock, onAdd}) => {

    const [count, setCount] = useState(parseInt(initial));

    const decrease = () => {
        setCount(count - 1);
    }

    const increase = () => {
        setCount(count + 1);
    }

    useEffect(() => {
    setCount(parseInt(initial));
    }, [initial])
    
  return (
    <div className={styles.counter}>
       
       <span><h4>{count}</h4></span>
       <button disabled={count >= stock} onClick={increase}>+</button>
       <button disabled={count <= 1}  onClick={decrease}>-</button> 
       <div>
        <button disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar al carrito</button>
       </div>
    </div>
  )
}

export default ItemCount;