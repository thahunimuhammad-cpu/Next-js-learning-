import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md py-4 px-8 flex items-center justify-between fixed top-0 left-0 z-50">
      
      {/* Logo */}
      <h1 className="text-2xl font-bold text-blue-600">Hy Shafqat</h1>

      {/* Menu Items */}
      <div className="hidden md:flex gap-8">
        <Link href="/" className="text-gray-700 text-lg hover:text-blue-600">
          Home
        </Link>

        <Link href="/about" className="text-gray-700 text-lg hover:text-blue-600">
          About
        </Link>

        <Link href="/contact" className="text-gray-700 text-lg hover:text-blue-600">
          Contact
        </Link>
      </div>

      {/* Right Links */}
      <div className="flex gap-6">
        <Link href="/login" className="text-blue-600 font-semibold">Login</Link>
        <Link href="/dashboard" className="text-blue-600 font-semibold">Dashboard</Link>
      </div>
    </nav>
  );
}
