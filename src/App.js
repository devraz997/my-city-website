// src/App.js
import React, { useEffect, useState } from "react";
import { auth, onAuthStateChanged, signOut } from "./firebase";
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      alert("Signed out successfully!");
    });
  };

  return (
    <div className="App">
      <h1>Mahabubnagarbolte, coming soon!</h1>
      {user ? (
        <div>
          <p>Welcome, {user.email}!</p>
          <button onClick={handleSignOut}>Sign Out</button>
          {/* Place components that require authentication here */}
          <p>Interactive content like polls, discussions, etc.</p>
        </div>
      ) : (
        <div>
          <SignUp />
          <SignIn setUser={setUser} />
          <p>You need to sign in to participate in polls and discussions.</p>
        </div>
      )}
    </div>
  );
}

export default App;