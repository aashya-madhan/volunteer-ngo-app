import React, { useState } from "react";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import VolunteerSignup from "./components/VolunteerSignup";
import NGOSignup from "./components/NGOSignup";
import ForgotPasswordPage from "./components/ForgotPasswordPage";
import Home from "./components/home";
import Volunteers from "./Volunteers";
import NGOs from "./NGOs";
import Projects from "./Projects";
import AboutUs from "./AboutUs";

// Import Navbar + Footer
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// ✅ Import the background image from src/assets
import background from "./assets/background.jpg";

function App() {
  const [currentPage, setCurrentPage] = useState("landing");

  // ✅ Global logout function
  const handleLogout = () => {
    setCurrentPage("landing");
  };

  // ✅ Page renderer
  const renderPage = () => {
    switch (currentPage) {
      case "landing":
        return <LandingPage onSwitchToLogin={() => setCurrentPage("login")} />;
      case "login":
        return (
          <LoginPage
            onBack={() => setCurrentPage("landing")}
            onSwitchToSignup={() => setCurrentPage("signup")}
            onForgotPassword={() => setCurrentPage("forgot")}
            onLoginSuccess={() => setCurrentPage("home")}
          />
        );
      case "signup":
        return (
          <SignupPage
            onBack={() => setCurrentPage("landing")}
            onSwitchToLogin={() => setCurrentPage("login")}
            onSwitchToVolunteer={() => setCurrentPage("volunteerSignup")}
            onSwitchToNGO={() => setCurrentPage("ngoSignup")}
          />
        );
      case "volunteerSignup":
        return (
          <VolunteerSignup
            onBack={() => setCurrentPage("signup")}
            onSwitchToLogin={() => setCurrentPage("login")}
          />
        );
      case "ngoSignup":
        return (
          <NGOSignup
            onBack={() => setCurrentPage("signup")}
            onSwitchToLogin={() => setCurrentPage("login")}
          />
        );
      case "forgot":
        return <ForgotPasswordPage onBack={() => setCurrentPage("login")} />;
      case "home":
        return <Home onLogout={handleLogout} />;
      case "volunteers":
        return <Volunteers />;
      case "ngos":
        return <NGOs />;
      case "projects":
        return <Projects />;
      case "about":
        return <AboutUs />;
      default:
        return <LandingPage onSwitchToLogin={() => setCurrentPage("login")} />;
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* ✅ Navbar always visible */}
      <Navbar onNavigate={setCurrentPage} />

      {/* ✅ Content area */}
      <div className="flex-grow pt-20 px-6">{renderPage()}</div>

      {/* ✅ Footer always visible */}
      <Footer />
    </div>
  );
}

export default App;
