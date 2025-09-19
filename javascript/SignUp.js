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
    window.location.href = "Login.html"; // redirect to login page
  } catch (error) {
    alert("❌ Error: " + error.message);
    console.error(error);
  }
});

// ✅ Google Sign-In
window.googleLogin = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      alert("✅ Signed in as " + user.displayName);

      // Optional: redirect to dashboard
      // window.location.href = "dashboard.html";
    })
    .catch((error) => {
      console.error("❌ Google sign-in error:", error);
      alert("Google sign-in failed: " + error.message);
    });
};

