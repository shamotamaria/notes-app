import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD0xBitdVJQLZtYL72I1GNVAm64VFL48ds",
  authDomain: "notes-bc028.firebaseapp.com",
  projectId: "notes-bc028",
  storageBucket: "notes-bc028.appspot.com",
  messagingSenderId: "1011178170343",
  appId: "1:1011178170343:web:f8115e1088acdc8aa7ff42"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
