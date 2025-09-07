// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCddv9bzZqYuYyVqqLWNfu49VXxpVi7TVE",
  authDomain: "ev-chargemate-19fa0.firebaseapp.com",
  projectId: "ev-chargemate-19fa0",
  storageBucket: "ev-chargemate-19fa0.appspot.com",
  messagingSenderId: "649331459859",
  appId: "1:649331459859:web:69229a620f1641ccf2bce6",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
