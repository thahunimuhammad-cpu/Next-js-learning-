"use client";

import Link from "next/link";

export default function Topbar() {
  return (
    <header className="h-16 bg-white border-b border-gray-200 fixed top-0 left-64 right-0 z-10">
      <div className="flex items-center justify-between h-full px-6">
        <div className="flex items-center gap-4">
          <input
            type="search"
            placeholder="Search..."
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
          />
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 text-gray-600 hover:text-gray-900 relative">
            <span className="text-xl">🔔</span>
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
              A
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-medium text-gray-900">Admin User</p>
              <p className="text-xs text-gray-500">admin@store.com</p>
            </div>
          </div>
          <Link
            href="/login"
            className="ml-4 px-4 py-2 text-sm text-gray-600 hover:text-gray-900"
          >
            Logout
          </Link>
        </div>
      </div>
    </header>
  );
}
