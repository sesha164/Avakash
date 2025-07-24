// signup.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

// ✅ Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyDzoiMWqxYKa8UUDkwxN_BDVFYhvICZAA0",
  authDomain: "jobportal-29f10.firebaseapp.com",
  projectId: "jobportal-29f10",
  storageBucket: "jobportal-29f10.firebasestorage.app",
  messagingSenderId: "913493555435",
  appId: "1:913493555435:web:836d5428f5802e5a5c66ae",
  measurementId: "G-W9VQ81HR98"  
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


// ✅ Google Provider Setup with "force choose account"
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

// ✅ Email/Password Sign-Up
document.getElementById("signup-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  if (password !== confirmPassword) {
    alert("❌ Passwords do not match!");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("✅ Signup successful! Welcome, " + user.email);

      // Optional: Redirect or save more info
      // window.location.href = "dashboard.html";
    })
    .catch((error) => {
      console.error("❌ Signup error:", error.message);
      alert("Signup failed: " + error.message);
    });
});

// ✅ Google Sign-In
window.googleLogin = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      alert("✅ Signed in as " + user.displayName);

      // Optional: Redirect to dashboard or store info
      // window.location.href = "dashboard.html";
    })
    .catch((error) => {
      console.error("❌ Google sign-in error:", error);
      alert("Google sign-in failed: " + error.message);
    });
};
