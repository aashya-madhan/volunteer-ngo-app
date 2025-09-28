import React, { useState } from "react";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import ForgotPasswordPage from "./components/ForgotPasswordPage";
import HomePage from "./components/home"; // ✅ import HomePage

function App() {
  const [page, setPage] = useState("landing");

  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/background_image.jpg')", // from public/
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative z-10">
        {page === "landing" && (
          <LandingPage onGetStarted={() => setPage("login")} />
        )}
        {page === "login" && (
          <LoginPage
            onSwitchToSignup={() => setPage("signup")}
            onBack={() => setPage("landing")}
            onForgotPassword={() => setPage("forgot")}
            onLoginSuccess={() => setPage("home")} // ✅ after login go to home
          />
        )}
        {page === "signup" && (
          <SignupPage
            onBack={() => setPage("login")}
            onSignupSuccess={() => setPage("home")} // ✅ after signup go to home
          />
        )}
        {page === "forgot" && (
          <ForgotPasswordPage onBack={() => setPage("login")} />
        )}
        {page === "home" && <HomePage onLogout={() => setPage("landing")} />} 
      </div>
    </div>
  );
}

export default App;
