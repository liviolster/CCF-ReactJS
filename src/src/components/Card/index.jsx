import { Link } from "react-router-dom";
import styles from "./card.module.css";
import React, { useContext } from "react";

const Card = ({ producto }) => {



  return (
    <Link to={`/productos/${producto.id}`}>
      <div className={styles.container}>
        <h3>{producto.title}</h3>
        <img
          src={producto.image}
          alt={producto.title}
          width="300"
        />
        <p>{producto.description}</p>
        <p>${producto.price}</p>

                      </div>
    </Link>
  );
};

export default Card;
