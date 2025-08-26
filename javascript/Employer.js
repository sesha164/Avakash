// Import Firebase modules from CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHHi6hTJQ_hcvUg1IAew5ptO1onnlaki8",
  authDomain: "avakash-4b6ec.firebaseapp.com",
  projectId: "avakash-4b6ec",
  storageBucket: "avakash-4b6ec.firebasestorage.app",
  messagingSenderId: "15657241012",
  appId: "1:15657241012:web:f24eac84b699b290c04ae1",
  measurementId: "G-X38XR2NGL4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Attach form event listener
document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();

  // Get form values
  const employerName = document.getElementById("employerName").value;
  const address = document.getElementById("address").value;
  const skills = document.getElementById("skills").value;
  const ageLimit = document.getElementById("ageLimit").value;
  const workingHours = document.getElementById("workingHours").value;
  const salary = document.getElementById("salary").value;
  const description = document.getElementById("description").value;
  const contact = document.getElementById("contact").value;
  const shopPhoto = document.getElementById("shopPhoto").files[0]?.name || ""; // only saves file name for now

  try {
    // Save to Firestore
    await addDoc(collection(db, "employers"), {
      employerName,
      address,
      skills,
      ageLimit,
      workingHours,
      salary,
      description,
      contact,
      shopPhoto,
      createdAt: new Date()
    });

    alert("✅ Employer profile saved successfully!");
    e.target.reset(); // reset form after save
  } catch (error) {
    console.error("❌ Error adding document:", error);
    alert("Error: " + error.message);
  }
});
