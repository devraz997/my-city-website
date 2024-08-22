//Purpose: Allows existing users to log in and optionally stay signed in.
// src/components/SignIn.js
import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const SignIn = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      if (rememberMe) {
        // Sets persistence to LOCAL, meaning the user stays signed in even after a page reload
        auth.setPersistence("local");
      } else {
        // Default is SESSION, meaning the user signs out when the page is closed
        auth.setPersistence("session");
      }
      alert("Signed in successfully!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <label>
        <input
          type="checkbox"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
        />
        Keep me signed in
      </label>
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
};

export default SignIn;
