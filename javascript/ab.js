import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import {
  getFirestore,
  doc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

// ✅ Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyDzoiMWqxYKa8UUDkwxN_BDVFYhvICZAA0",
  authDomain: "jobportal-29f10.firebaseapp.com",
  projectId: "jobportal-29f10",
  storageBucket: "jobportal-29f10.appspot.com",
  messagingSenderId: "913493555435",
  appId: "1:913493555435:web:836d5428f5802e5a5c66ae",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// 👇 Assuming your signup form has id="signup-form"
document.getElementById("signup-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // ✅ Save additional user info to Firestore
    await setDoc(doc(db, "users", user.uid), {
      name: name,
      email: email,
      createdAt: new Date()
    });

    alert("Signup successful!");
    window.location.href = "index.html";
  } catch (error) {
    console.error("Signup Error:", error);
    alert("Error: " + error.message);
  }
});
