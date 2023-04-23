import { useEffect, useState } from "react";
import db from "../../../db/firebase-config";
import { getDocs, collection, addDoc, query, where } from "firebase/firestore";
import Card from '../Card'
import { useParams } from "react-router-dom";


const ProductList = () => {
  const [items, setItems] = useState([])
  const {categoryId}=useParams()
  const itemsRef = categoryId ? query(collection(db, "items"), where("category", "==", categoryId)):collection(db, "items")

 
  const getItems = async ()  => {
    const itemsCollection = await getDocs(itemsRef);
    const items = itemsCollection.docs.map(doc => ({...doc.data(), id: doc.id}))
    setItems(items);
  };

  
  useEffect(() => {
  getItems();
  },[categoryId])
  
  

  return (
    <div>
     {items.map((item)=>(
      <Card key={item.id} producto={item}/>
     ))}
    </div>
  );
};

export default ProductList;