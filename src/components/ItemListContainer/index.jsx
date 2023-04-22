import { useEffect, useState } from "react";
import db from "../../../db/firebase-config";
import { getDocs, collection, addDoc } from "firebase/firestore";

const ProductList = () => {
  const [items, setItems] = useState([])
  const itemsRef = collection(db, "items")


  const getItems = async ()  => {
    const itemsCollection = await getDocs(itemsRef);
    const items = itemsCollection.docs.map(doc => ({...doc.data(), id: doc.id}))
    setItems(items);
  };

  
  useEffect(() => {
  getItems();
  },[])
  
  

  return (
    <div>
     {items.map((item)=>(
      <h3 key={item.id}>{item.title}</h3>
     ))}
    </div>
  );
};

export default ProductList;