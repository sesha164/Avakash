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
  apiKey: "AIzaSyDzoiMWqxYKa8UUDkwxN_BDVFYhvICZAA0",
  authDomain: "jobportal-29f10.firebaseapp.com",
  projectId: "jobportal-29f10",
  storageBucket: "jobportal-29f10.appspot.com",
  messagingSenderId: "913493555435",
  appId: "1:913493555435:web:836d5428f5802e5a5c66ae",
  measurementId: "G-W9VQ81HR98"
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

