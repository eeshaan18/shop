"use client";

import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
    const [showAuth, setShowAuth] = useState(false);
    const [authMode, setAuthMode] = useState("login");
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div>
            {/* Header */}
            <header className="bg-white text-gray-800 fixed w-full top-0 left-0 z-50 border-b border-gray-200 shadow-sm">
                <div className="container mx-auto flex items-center justify-between p-4 md:p-6">
                    {/* Logo */}
                    <a href="/" className="flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-10 h-10 text-gray-600"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl font-bold tracking-wide text-gray-800">
                            Goat-Shop
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <Link href="/" className="hover:underline transition">
                            Home
                        </Link>
                        <Link href="/shop" className="hover:underline transition">
                            Shop
                        </Link>
                        <Link href="/about" className="hover:underline transition">
                            About Us
                        </Link>
                        <Link href="/contact" className="hover:underline transition">
                            Contact
                        </Link>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setShowMenu(!showMenu)}
                        className="md:hidden focus:outline-none text-gray-800"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                        >
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>

                    {/* Login Button */}
                    <button
                        onClick={() => {
                            setShowAuth(true);
                            setAuthMode("login");
                        }}
                        className="hidden md:inline-block px-6 py-2 rounded border border-gray-300 bg-white text-gray-800 hover:bg-gray-100 transition"
                    >
                        Login / Signup
                    </button>
                </div>
            </header>

            {/* Mobile Menu */}
            {showMenu && (
                <div className="fixed inset-0 bg-gray-100 z-50 flex flex-col items-center p-6">
                    <button
                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                        onClick={() => setShowMenu(false)}
                    >
                        ✕
                    </button>
                    <nav className="flex flex-col space-y-6 text-gray-800 text-lg">
                        <Link href="/" onClick={() => setShowMenu(false)}>
                            Home
                        </Link>
                        <Link href="/shop" onClick={() => setShowMenu(false)}>
                            Shop
                        </Link>
                        <Link href="/about" onClick={() => setShowMenu(false)}>
                            About Us
                        </Link>
                        <Link href="/contact" onClick={() => setShowMenu(false)}>
                            Contact
                        </Link>
                    </nav>
                    <button
                        onClick={() => {
                            setShowMenu(false);
                            setShowAuth(true);
                            setAuthMode("login");
                        }}
                        className="mt-6 px-6 py-2 rounded border border-gray-300 bg-white text-gray-800 hover:bg-gray-100 transition"
                    >
                        Login / Signup
                    </button>
                </div>
            )}

            {/* Authentication Modal */}
            {showAuth && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
                    <div className="bg-white w-96 p-8 rounded-lg shadow">
                        <button
                            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                            onClick={() => setShowAuth(false)}
                        >
                            ✕
                        </button>
                        <h2 className="text-xl font-bold text-center text-gray-800 mb-4">
                            {authMode === "login" ? "Login" : "Signup"}
                        </h2>
                        <form>
                            <label className="block mb-2 text-gray-800">Email</label>
                            <input
                                type="email"
                                className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:ring-2 focus:ring-gray-500"
                                placeholder="Enter your email"
                            />
                            <label className="block mb-2 text-gray-800">Password</label>
                            <input
                                type="password"
                                className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:ring-2 focus:ring-gray-500"
                                placeholder="Enter your password"
                            />
                            {authMode === "signup" && (
                                <>
                                    <label className="block mb-2 text-gray-800">Confirm Password</label>
                                    <input
                                        type="password"
                                        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:ring-2 focus:ring-gray-500"
                                        placeholder="Confirm your password"
                                    />
                                </>
                            )}
                            <button className="w-full py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition">
                                {authMode === "login" ? "Login" : "Signup"}
                            </button>
                        </form>
                        <p className="mt-4 text-center text-sm text-gray-600">
                            {authMode === "login" ? (
                                <>
                                    Don't have an account?{" "}
                                    <button onClick={() => setAuthMode("signup")} className="text-gray-800 underline">
                                        Sign up
                                    </button>
                                </>
                            ) : (
                                <>
                                    Already have an account?{" "}
                                    <button onClick={() => setAuthMode("login")} className="text-gray-800 underline">
                                        Log in
                                    </button>
                                </>
                            )}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;
