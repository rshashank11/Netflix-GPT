// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvAniqFjpo5DjeckFrb-uGM-8lxxlZESo",
  authDomain: "netflix-gpt-c35a4.firebaseapp.com",
  projectId: "netflix-gpt-c35a4",
  storageBucket: "netflix-gpt-c35a4.appspot.com",
  messagingSenderId: "810374942170",
  appId: "1:810374942170:web:29267ab4131042cfc0c4e3",
  measurementId: "G-KM5CMZEY90",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
