// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyD4_YXC95EgnmDyprnRe4buWiorkG_o_yA",
  authDomain: "eco-plating-392013.firebaseapp.com",
  projectId: "eco-plating-392013",
  storageBucket: "eco-plating-392013.appspot.com",
  messagingSenderId: "885924926112",
  appId: "1:885924926112:web:d4a3d6acf0ee6116482fc5",
  measurementId: "G-KG12TK9KSE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth()

export const provider = new GoogleAuthProvider()

export default app
