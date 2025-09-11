// ✅ Firebase Initialization
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

// ✅ Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyCHHi6hTJQ_hcvUg1IAew5ptO1onnlaki8",
  authDomain: "avakash-4b6ec.firebaseapp.com",
  projectId: "avakash-4b6ec",
  storageBucket: "avakash-4b6ec.firebasestorage.app",
  messagingSenderId: "15657241012",
  appId: "1:15657241012:web:f24eac84b699b290c04ae1",
  measurementId: "G-X38XR2NGL4"
};


// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });


// ✅ 🔽 Place this at the top or before your event handlers
function showSuccessPopup() {
  const modal = document.getElementById("successModal");
  modal.style.display = "block";

  setTimeout(() => {
    modal.style.display = "none";
    window.location.href = "location.html"; // or "dashboard.html"
  }, 2000);
}


// ✅ Email/Password Login
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      showSuccessPopup();
    })
    .catch((error) => {
      alert("Login failed: " + error.message);
    });
});

// ✅ Google Login
window.googleLogin = () => {
  signInWithPopup(auth, provider)
    .then(() => {
      showSuccessPopup();
    })
    .catch((error) => {
      alert("Google login failed: " + error.message);
    });
};

