// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCHHi6hTJQ_hcvUg1IAew5ptO1onnlaki8",
  authDomain: "avakash-4b6ec.firebaseapp.com",
  projectId: "avakash-4b6ec",
  storageBucket: "avakash-4b6ec.firebasestorage.app",
  messagingSenderId: "15657241012",
  appId: "1:15657241012:web:f24eac84b699b290c04ae1",
  measurementId: "G-X38XR2NGL4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// ✅ Initialize Firestore & Auth
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
