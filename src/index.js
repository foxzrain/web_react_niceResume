import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzyb5m9adEX7Su_LvEvVPxfYLHsj967A4",
  authDomain: "wb-portfolio-b2c69.firebaseapp.com",
  projectId: "wb-portfolio-b2c69",
  storageBucket: "wb-portfolio-b2c69.appspot.com",
  messagingSenderId: "474106557447",
  appId: "1:474106557447:web:1890e1f6d8536c2692a6a2",
  measurementId: "G-WDFC3VDTX8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
