// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCJ0YoiLpdJLBPFsJpYqZRJbCumS0IVVi8",
  authDomain: "app-sorteo-1938b.firebaseapp.com",
  projectId: "app-sorteo-1938b",
  storageBucket: "app-sorteo-1938b.appspot.com",
  messagingSenderId: "861465684556",
  appId: "1:861465684556:web:af5e7a4a3c627e4f2862e9",
  measurementId: "G-T9X10HJ4H9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

module.exports = {db}