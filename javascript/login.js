// login.js
import { auth, db } from "./firebase.js";
import { 
  signInWithEmailAndPassword, 
  GoogleAuthProvider, 
  signInWithPopup 
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";

// Handle Email/Password Login
document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value; // ✅ get role from dropdown

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Save user data with role
    await setDoc(doc(db, "userProfiles", user.uid), {
      email: user.email,
      role: role,
      lastLogin: new Date().toISOString()
    }, { merge: true });

    alert("✅ Login successful!");
    console.log("Firestore user doc written:", user.uid);

    // Redirect based on role
    if (role === "employer") {
      window.location.href = "Employer.html";
    } else {
      window.location.href = "Location.html";
    }

  } catch (error) {
    alert("❌ " + error.message);
  }
});

// Handle Google Login
window.googleLogin = async function () {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    // Save Google user data
    await setDoc(doc(db, "userProfiles", user.uid), {
      name: user.displayName,
      email: user.email,
      profilePic: user.photoURL,
      lastLogin: new Date().toISOString(),
      role: "user" // default role for Google login
    }, { merge: true });

    alert("✅ Google login successful!");
    window.location.href = "homepage.html"; // default redirect for Google users

  } catch (error) {
    alert("❌ " + error.message);
  }
};
