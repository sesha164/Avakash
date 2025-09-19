// javascript/dashboard.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import {
  getFirestore,
  doc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCHHi6hTJQ_hcvUg1IAew5ptO1onnlaki8",
  authDomain: "avakash-4b6ec.firebaseapp.com",
  projectId: "avakash-4b6ec",
  storageBucket: "avakash-4b6ec.firebasestorage.app",
  messagingSenderId: "15657241012",
  appId: "1:15657241012:web:f24eac84b699b290c04ae1",
  measurementId: "G-X38XR2NGL4",
};

// Init Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Elements
const userEmail = document.getElementById("userEmail");
const profileBtn = document.getElementById("profileBtn");
const userDetails = document.getElementById("userDetails");

onAuthStateChanged(auth, async (user) => {
  if (user) {
    userEmail.textContent = "Logged in as: " + user.email;

    profileBtn.addEventListener("click", async () => {
      try {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          userDetails.innerHTML = `
            <p><strong>Full Name:</strong> ${data.fullname}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Password:</strong> ******** (hidden)</p>
          `;
          userDetails.style.display = "block";
        } else {
          userDetails.innerHTML = `<p>No profile data found!</p>`;
          userDetails.style.display = "block";
        }
      } catch (err) {
        console.error("Error fetching profile:", err);
        alert("Failed to load profile.");
      }
    });
  } else {
    alert("No user logged in. Redirecting to login...");
    window.location.href =
      "                                                                                                                                                                                                                                                           ";
  }
});
