// javascript/contact.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

// ✅ Firebase Config (same as signup.js)
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
const db = getFirestore(app);
const auth = getAuth(app);

// ✅ Handle Contact Form Submission
document.getElementById("contact-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("contact-name").value.trim();
  const email = document.getElementById("contact-email").value.trim();

  if (!name || !email) {
    alert("❌ Please fill in all fields.");
    return;
  }

  try {
    await addDoc(collection(db, "contactMessages"), {
      name,
      email,
      submittedAt: serverTimestamp()
    });

    alert("✅ Thank you! Your message has been received.");
    document.getElementById("contact-form").reset();
  } catch (error) {
    console.error("❌ Failed to send message:", error);
    alert("❌ Something went wrong. Please try again.");
  }
});

// ✅ Optional: Google Sign-In (can be removed if not used)
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

window.googleLogin = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      alert("✅ Signed in as " + user.displayName);
      // You could pre-fill name/email here if desired
    })
    .catch((error) => {
      console.error("❌ Google sign-in error:", error);
      alert("Google sign-in failed: " + error.message);
    });
};
