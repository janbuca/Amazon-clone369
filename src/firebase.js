// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {getAuth} from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional




// import firebase from 'firebase';
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCYuXjp_UOHerqJjyk5wg99Ug3E-U0f-4I",
//   authDomain: "janbucafk.firebaseapp.com",
//   projectId: "janbucafk",
//   storageBucket: "janbucafk.appspot.com",
//   messagingSenderId: "793563529175",
//   appId: "1:793563529175:web:39fa14addb999735401592",
//   measurementId: "G-MJ5KSBEKZ7"
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig)
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// export { db, auth };


// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// import { initializeApp } from "firebase/app";
// import {gitAuth} from 'firebase/auth'
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYuXjp_UOHerqJjyk5wg99Ug3E-U0f-4I",
  authDomain: "janbucafk.firebaseapp.com",
  projectId: "janbucafk",
  storageBucket: "janbucafk.appspot.com",
  messagingSenderId: "793563529175",
  appId: "1:793563529175:web:39fa14addb999735401592",
  measurementId: "G-MJ5KSBEKZ7"
};

// Initialize Firebase

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();

// const app = initializeApp(firebaseConfig);
// const auth = gitAuth(app);
//const analytics = getAnalytics(app);


export {auth, db}; 










// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// // const analytics = getAnalytics(app);
// export {auth};