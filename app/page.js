import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-8 flex items-center justify-between">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-blue-600">Hy Shafqat</h1>

      {/* Menu Items */}
      <div className="flex gap-8">
        <a
          href="#"
          className="text-gray-700 text-lg hover:text-blue-600 transition-all duration-300"
        >
          Home
        </a>
        <a
          href="#"
          className="text-gray-700 text-lg hover:text-blue-600 transition-all duration-300"
        >
          About
        </a>
        <a
          href="#"
          className="text-gray-700 text-lg hover:text-blue-600 transition-all duration-300"
        >
          Contact
        </a>
      </div>
      <Link href="/login">login</Link>
      <Link href="/dashbord">dashbord</Link>
      <Link href="/about">about</Link>
      <Link href="/contect">contect</Link>
    </nav>
  );
}
