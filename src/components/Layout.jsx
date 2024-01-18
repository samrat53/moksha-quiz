import React from "react";
import Navbar from "./Navbar"; // Import your Navbar component
import Footer from "./Footer"; // Import your Footer component

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <main className="flex-1">
        {/* Render the content dynamically */}
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
