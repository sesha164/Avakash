// profile.js
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase.js"; // ✅ adjust path if needed

// Select the form
const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Get values from inputs
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const age = parseInt(document.getElementById("age").value);
  const gender = document.getElementById("gender").value;
  const education = document.getElementById("education").value;
  const contact = document.getElementById("contact").value;
  const timings = document.getElementById("timings").value;

  try {
    await addDoc(collection(db, "UserProfiles"), {
      Name: name,
      Email: email,
      Age: age,
      Gender: gender,
      Education: education,
      Contact: contact,
      Timings: timings,
      CreatedAt: new Date() // optional timestamp
    });
    console.log("profile saved successfully");

    alert("✅ Profile saved successfully!");
    form.reset(); // clear the form after saving
  } catch (error) {
    console.error("❌ Error saving profile: ", error);
    alert("Error saving profile, check console for details.");
  }
});
