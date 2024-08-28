import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { auth, onAuthStateChanged, signOut } from "./firebase";
import Header from './components/Header';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Hero from './components/Hero';
import LatestUpdates from './components/LatestUpdates';
import PopularPolls from './components/PopularPolls';
import FeaturedPlaces from './components/FeaturedPlaces';
import FoodPlaces from './components/FoodPlaces';
import CallToAction from './components/CallToAction';

import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // Simulate loading time (can be removed or adjusted)
    setTimeout(() => {
      setIsLoading(false);
      document.body.classList.add('loaded'); // Add class to body to trigger loader fade-out
    }, 1500); // Adjust time as needed

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      alert("Signed out successfully!");
    });
  };

  return (
    <Router>
      {/* Loader element */}
      {isLoading && (
        <div id="loader">
          <img src="/mahabubnagarbolteinstadp.png" alt="Loading..." />
        </div>
      )}

      {!isLoading && (
        <>
          <Header />
          <div className="app-container">
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <LatestUpdates />
                  <PopularPolls user={user} />
                  <FeaturedPlaces />
                  <FoodPlaces />
                  <CallToAction user={user} />
                </>
              } />
              <Route path="/sign-up" element={user ? <Navigate to="/" /> : <SignUp />} />
              <Route path="/sign-in" element={user ? <Navigate to="/" /> : <SignIn setUser={setUser} />} />
              {/* Add other routes here */}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
          <Footer />
          <div className="auth-prompt">
            {!user ? (
              <p className="auth-prompt-text">You need to sign in to interact with certain features like polls.</p>
            ) : (
              <button onClick={handleSignOut}>Sign Out</button>
            )}
          </div>
        </>
      )}
    </Router>
  );
}

export default App;
