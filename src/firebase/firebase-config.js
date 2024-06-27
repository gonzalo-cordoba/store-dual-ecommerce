import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCXSMyiwDvRcj8YvmQattU7Qo0-MHmjGIE",
  authDomain: "store-dual-ecommerce.firebaseapp.com",
  projectId: "store-dual-ecommerce",
  storageBucket: "store-dual-ecommerce.appspot.com",
  messagingSenderId: "150536355721",
  appId: "1:150536355721:web:4c136fe7b6981cbb8d2b58",
};

export const app = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(app);
const db = getFirestore(app);

export { db };
