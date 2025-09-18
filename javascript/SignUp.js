// SignUp.js
import { auth, db } from "./firebase.js";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } 
  from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
import { doc, setDoc } 
  from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";

// 🔹 Handle Email/Password Signup
document.getElementById("signup-form").addEventListener("submit", async (e) => {
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
