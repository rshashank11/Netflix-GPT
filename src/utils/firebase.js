import { getAuth } from "firebase/auth"
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"

const firebaseConfig = {
  apiKey: "AIzaSyCsX7leGyWo36kpEazASCpg-JX8suhM_wc",
  authDomain: "netflix-gpt-trial-1.firebaseapp.com",
  projectId: "netflix-gpt-trial-1",
  storageBucket: "netflix-gpt-trial-1.appspot.com",
  messagingSenderId: "130577708337",
  appId: "1:130577708337:web:a2b76f9e9e39d961786c10",
  measurementId: "G-P9YTQQFCG0",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

export const auth = getAuth()
