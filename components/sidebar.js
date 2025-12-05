"use client";
import React from "react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-white shadow-md fixed top-16 left-0 p-6">

      <nav className="flex flex-col gap-6">

        <Link href="/dashboard" className="text-lg text-gray-700 hover:text-blue-600">
          Dashboard
        </Link>

        <Link href="/dashboard/users" className="text-lg text-gray-700 hover:text-blue-600">
          Users
        </Link>

        <Link href="/dashboard/settings" className="text-lg text-gray-700 hover:text-blue-600">
          Settings
        </Link>

        <Link href="/dashboard/profile" className="text-lg text-gray-700 hover:text-blue-600">
          Profile
        </Link>

      </nav>
    </aside>
  );
}
