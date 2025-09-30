import React, { useState } from "react";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import VolunteerSignup from "./components/VolunteerSignup";
import NGOSignup from "./components/NGOSignup";
import ForgotPasswordPage from "./components/ForgotPasswordPage";
import Home from "./components/home";

// ✅ Import the background image from src/assets
import background from "./assets/background.jpg";

function App() {
  const [currentPage, setCurrentPage] = useState("landing");

  // ✅ Global logout function
  const handleLogout = () => {
    setCurrentPage("landing");
  };

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      {currentPage === "landing" && (
        <LandingPage onSwitchToLogin={() => setCurrentPage("login")} />
      )}

      {currentPage === "login" && (
        <LoginPage
          onBack={() => setCurrentPage("landing")}
          onSwitchToSignup={() => setCurrentPage("signup")}
          onForgotPassword={() => setCurrentPage("forgot")}
          onLoginSuccess={() => setCurrentPage("home")}
        />
      )}

      {currentPage === "signup" && (
        <SignupPage
          onBack={() => setCurrentPage("landing")}
          onSwitchToLogin={() => setCurrentPage("login")}
          onSwitchToVolunteer={() => setCurrentPage("volunteerSignup")}
          onSwitchToNGO={() => setCurrentPage("ngoSignup")}
        />
      )}

      {currentPage === "volunteerSignup" && (
        <VolunteerSignup
          onBack={() => setCurrentPage("signup")}
          onSwitchToLogin={() => setCurrentPage("login")}
        />
      )}

      {currentPage === "ngoSignup" && (
        <NGOSignup
          onBack={() => setCurrentPage("signup")}
          onSwitchToLogin={() => setCurrentPage("login")}
        />
      )}

      {currentPage === "forgot" && (
        <ForgotPasswordPage onBack={() => setCurrentPage("login")} />
      )}

      {currentPage === "home" && (
        <Home onLogout={handleLogout} />  
      )}
    </div>
  );
}

export default App;
