// SignUp.js
import { auth, db } from "./firebase.js";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } 
  from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
import { doc, setDoc } 
  from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";

<<<<<<< HEAD
// 🔹 Handle Email/Password Signup
document.getElementById("signup-form").addEventListener("submit", async (e) => {
=======
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


// ✅ Google Provider Setup with "force choose account"
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

// ✅ Email/Password Sign-Up
document.getElementById("signup-form").addEventListener("submit", (e) => {
>>>>>>> 109b4a86ea666aa8b611db314e0a28fea1f3c1e1
  e.preventDefault();

  const fullname = document.getElementById("fullname").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  if (password !== confirmPassword) {
    alert("❌ Passwords do not match!");
    return;
  }
  try {
    // ✅ Create user in Firebase Auth
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // ✅ Update display name
    await updateProfile(user, { displayName: fullname });

    // ✅ Store user profile in Firestore
    await setDoc(doc(db, "userProfiles", user.uid), {
      fullname,
      email,
      createdAt: new Date().toISOString(),
    });

    alert("✅ Signup successful! Please login.");
    window.location.href = "login.html"; // redirect to login page
  } catch (error) {
    alert("❌ Error: " + error.message);
    console.error(error);
  }
});

// 🔹 Handle Google Signup/Login
window.googleLogin = async function () {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    // ✅ Save Google user in Firestore
    await setDoc(doc(db, "userProfiles", user.uid), {
      fullname: user.displayName,
      email: user.email,
      profilePic: user.photoURL,
      createdAt: new Date().toISOString(),
    }, { merge: true });

    alert("✅ Google sign-up successful!");
    window.location.href = "homepage.html";
  } catch (error) {
    alert("❌ Google login error: " + error.message);
    console.error(error);
  }
};
