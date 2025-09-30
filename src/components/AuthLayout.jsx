import React from "react";

function AuthLayout({ children }) {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <div className="bg-white bg-opacity-90 p-8 rounded-2xl shadow-lg w-full max-w-md">
        {children}
      </div>
    </div>
  );
}

export default AuthLayout;
