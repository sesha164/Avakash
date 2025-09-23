// ✅ Firebase Initialization
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  updateProfile, 
  GoogleAuthProvider, 
  signInWithPopup 
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
import { 
  getFirestore, 
  doc, 
  setDoc 
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";

// 🔹 Replace with your Firebase config
// 🔹 Firebase Config
      const firebaseConfig = {
        apiKey: "AIzaSyCHHi6hTJQ_hcvUg1IAew5ptO1onnlaki8",
        authDomain: "avakash-4b6ec.firebaseapp.com",
        projectId: "avakash-4b6ec",
        storageBucket: "avakash-4b6ec.firebasestorage.app",
        messagingSenderId: "15657241012",
        appId: "1:15657241012:web:f24eac84b699b290c04ae1",
        measurementId: "G-X38XR2NGL4",
      };
// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// ✅ Google Provider
const provider = new GoogleAuthProvider();

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
    // ✅ Create user
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
    window.location.href = "login.html"; // make sure file name matches
  } catch (error) {
    alert("❌ Error: " + error.message);
    console.error(error);
  }
});

// 🔹 Google Login Function
window.googleLogin = async function () {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    await setDoc(doc(db, "userProfiles", user.uid), {
      name: user.displayName,
      email: user.email,
      profilePic: user.photoURL,
      lastLogin: new Date().toISOString(),
      role: "user"
    }, { merge: true });

    console.log("✅ Google login successful:", user.email);
    window.location.href = "homepage.html";
  } catch (error) {
    alert("❌ Google login failed: " + error.message);
    console.error(error);
  }
};
