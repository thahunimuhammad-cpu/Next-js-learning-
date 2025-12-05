import React from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/sidebar";

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">

        {/* Navbar */}
        <Navbar />

        {/* Main Section */}
        <div className="flex pt-16">

          {/* Sidebar */}
          <Sidebar />

          {/* Page Content */}
          <main className="ml-64 p-8 w-full min-h-screen">
            {children}
          </main>

        </div>

      </body>
    </html>
  );
}
