// src/components/Navbar.jsx
"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX, FiUser, FiHeart } from "react-icons/fi";

export default function Navbar() {
  const { data: session } = useSession();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm backdrop-blur-sm bg-opacity-90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <FiHeart className="h-8 w-8 text-rose-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Protishruti.com</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="/" className="text-gray-700 hover:text-rose-600 font-medium transition-colors">
              Home
            </Link>
            <Link href="/search" className="text-gray-700 hover:text-rose-600 font-medium transition-colors">
              Search
            </Link>
            <Link href="/matches" className="text-gray-700 hover:text-rose-600 font-medium transition-colors">
              Matches
            </Link>
            <Link href="/premium" className="text-gray-700 hover:text-rose-600 font-medium transition-colors">
              Premium
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-rose-600 font-medium transition-colors">
              Contact
            </Link>
          </div>

          {/* Auth Section */}
          <div className="flex items-center">
            {session ? (
              <div className="flex items-center space-x-3">
                <div className="hidden md:block text-sm text-gray-700">
                  Welcome, {session.user.name}
                </div>
                <Link 
                  href="/profile" 
                  className="flex items-center justify-center h-10 w-10 rounded-full bg-rose-100 text-rose-700 hover:bg-rose-200 transition-colors"
                >
                  <FiUser className="h-5 w-5" />
                </Link>
              </div>
            ) : (
              <div className="hidden md:flex items-center space-x-4">
                <Link 
                  href="/login" 
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-rose-600 transition-colors"
                >
                  Login
                </Link>
                <Link 
                  href="/register" 
                  className="px-4 py-2 text-sm font-medium text-white bg-rose-600 rounded-lg hover:bg-rose-700 transition-colors shadow-sm"
                >
                  Join Free
                </Link>
              </div>
            )}

            {/* Mobile menu button */}
            <button
              className="md:hidden ml-4 p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-rose-600 hover:bg-gray-50">
              Home
            </Link>
            <Link href="/search" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-rose-600 hover:bg-gray-50">
              Search
            </Link>
            <Link href="/matches" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-rose-600 hover:bg-gray-50">
              Matches2
            </Link>
            <Link href="/premium" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-rose-600 hover:bg-gray-50">
              Premium
            </Link>
            <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-rose-600 hover:bg-gray-50">
              Contact
            </Link>
            <div className="border-t border-gray-200 pt-4 pb-2">
              {session ? (
                <div className="flex items-center px-4">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-rose-100 flex items-center justify-center">
                      <FiUser className="h-5 w-5 text-rose-700" />
                    </div>
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-gray-800">{session.user.name}</div>
                    <div className="text-sm font-medium text-gray-500">{session.user.email}</div>
                  </div>
                </div>
              ) : (
                <div className="flex space-x-3 px-3">
                  <Link 
                    href="/login" 
                    className="flex-1 px-4 py-2 text-center text-base font-medium text-gray-700 hover:text-rose-600"
                  >
                    Login
                  </Link>
                  <Link 
                    href="/register" 
                    className="flex-1 px-4 py-2 text-center text-base font-medium text-white bg-rose-600 rounded-lg hover:bg-rose-700"
                  >
                    Join Free
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}