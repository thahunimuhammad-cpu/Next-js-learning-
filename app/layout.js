import React from "react";
import Navbar from "../components/Navbar ";

import Sidebar from "../components/sidebar";
;

export default function DashboardLayout({ children }) {
  return (
    <div>

      {/* Navbar */}
      <Navbar />

      {/* Main Section */}
      <div className="flex pt-16">

        {/* Sidebar */}
        <Sidebar />

        {/* Page Content */}
        <main className="ml-64 p-8 w-full bg-gray-100 min-h-screen">
          {children}
        </main>

      </div>
    </div>
  );
}
