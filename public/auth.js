import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
import { firebaseConfig } from "./firebase.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if(!user) {
    window.location.href = "/login";
    return;
  }
  if(user.email === "dhruvbhalala07@gmail.com") {
    // admin should be redirected to admin panel
    if(window.location.pathname !== "/admin") {
      window.location.href = "/admin";
      return;
    }
  } else {
    // non admin must be nirma email
    if(!user.email.endsWith("@nirmauni.ac.in")) {
      alert("Access restricted to Nirma University students only.");
      signOut(auth);
      window.location.href = "/login";
      return;
    }
    // if student on admin path redirect to see
    if(window.location.pathname === "/admin") {
      window.location.href = "/see";
      return;
    }
  }
  // populate email element if present
  const emailEl = document.getElementById("userEmail");
  if(emailEl) emailEl.innerText = user.email;
  const nameEl = document.getElementById("userName");
  if(nameEl) nameEl.innerText = user.displayName || "";
  const photoEl = document.getElementById("userPhoto");
  if(photoEl && user.photoURL) photoEl.src = user.photoURL;
});
