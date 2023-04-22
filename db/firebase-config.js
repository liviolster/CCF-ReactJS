import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD3OmDmChyImseexO0qt2lTViEy6cSEm2g",
  authDomain: "cafecienfuegos-ecommerce.firebaseapp.com",
  projectId: "cafecienfuegos-ecommerce",
  storageBucket: "cafecienfuegos-ecommerce.appspot.com",
  messagingSenderId: "197846384481",
  appId: "1:197846384481:web:9cb88f26d590cd458e4f20"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;