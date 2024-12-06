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
            <header className="bg-[#000000] text-[#FFFFFF] fixed w-full top-0 left-0 z-50 shadow-md">
                <div className="container mx-auto flex items-center justify-between p-4 md:p-6">
                    {/* Logo */}
                    <a href="/" className="flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-10 h-10 p-1 rounded-full bg-[#3A3A3A] text-[#FFFFFF] shadow-lg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl font-bold tracking-wide">Goat-Shop</span>
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <Link href="/" className="text-[#FFFFFF] hover:text-[#E0E0E0] transition duration-300">
                            Home
                        </Link>
                        <Link href="/shop" className="text-[#FFFFFF] hover:text-[#E0E0E0] transition duration-300">
                            Shop
                        </Link>
                        <Link href="/about" className="text-[#FFFFFF] hover:text-[#E0E0E0] transition duration-300">
                            About Us
                        </Link>
                        <Link href="/contact" className="text-[#FFFFFF] hover:text-[#E0E0E0] transition duration-300">
                            Contact
                        </Link>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setShowMenu(!showMenu)}
                        className="md:hidden focus:outline-none text-white"
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
                        className="hidden md:inline-block px-6 py-2 rounded-lg bg-[#3A3A3A] text-[#FFFFFF] font-medium hover:bg-[#4F4F4F] transition duration-300"
                    >
                        Login / Signup
                    </button>
                </div>
            </header>

            {/* Mobile Menu */}
            {showMenu && (
                <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-center items-center">
                    <div className="bg-white w-4/5 p-6 rounded-lg shadow-md text-center">
                        <button
                            className="absolute top-4 right-4 text-gray-500 hover:text-black"
                            onClick={() => setShowMenu(false)}
                        >
                            ✕
                        </button>
                        <nav className="flex flex-col space-y-6 text-[#333333]">
                            <Link href="/" onClick={() => setShowMenu(false)} className="hover:text-[#E0E0E0]">
                                Home
                            </Link>
                            <Link href="/shop" onClick={() => setShowMenu(false)} className="hover:text-[#E0E0E0]">
                                Shop
                            </Link>
                            <Link href="/about" onClick={() => setShowMenu(false)} className="hover:text-[#E0E0E0]">
                                About Us
                            </Link>
                            <Link href="/contact" onClick={() => setShowMenu(false)} className="hover:text-[#E0E0E0]">
                                Contact
                            </Link>
                        </nav>
                        <button
                            onClick={() => {
                                setShowMenu(false);
                                setShowAuth(true);
                                setAuthMode("login");
                            }}
                            className="mt-6 w-full py-2 bg-[#3A3A3A] text-[#FFFFFF] rounded-lg font-medium hover:bg-[#4F4F4F] transition"
                        >
                            Login / Signup
                        </button>
                    </div>
                </div>
            )}

            {/* Authentication Modal */}
            {showAuth && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50 flex items-center justify-center">
                    <div className="bg-white w-96 p-8 rounded-lg shadow-md">
                        <button
                            className="absolute top-3 right-3 text-gray-500 hover:text-black"
                            onClick={() => setShowAuth(false)}
                        >
                            ✕
                        </button>
                        <h2 className="text-xl font-bold text-center text-[#333333] mb-4">
                            {authMode === "login" ? "Login" : "Signup"}
                        </h2>
                        <form>
                            <label className="block mb-2 text-[#333333]">Email</label>
                            <input
                                type="email"
                                className="w-full px-4 py-2 mb-4 border border-[#B0B0B0] rounded-lg focus:ring-2 focus:ring-[#000000]"
                                placeholder="Enter your email"
                            />
                            <label className="block mb-2 text-[#333333]">Password</label>
                            <input
                                type="password"
                                className="w-full px-4 py-2 mb-4 border border-[#B0B0B0] rounded-lg focus:ring-2 focus:ring-[#000000]"
                                placeholder="Enter your password"
                            />
                            {authMode === "signup" && (
                                <>
                                    <label className="block mb-2 text-[#333333]">Confirm Password</label>
                                    <input
                                        type="password"
                                        className="w-full px-4 py-2 mb-4 border border-[#B0B0B0] rounded-lg focus:ring-2 focus:ring-[#000000]"
                                        placeholder="Confirm your password"
                                    />
                                </>
                            )}
                            <button className="w-full py-2 bg-[#3A3A3A] text-[#FFFFFF] rounded-lg hover:bg-[#4F4F4F] transition">
                                {authMode === "login" ? "Login" : "Signup"}
                            </button>
                        </form>
                        <p className="mt-4 text-center text-sm text-[#666666]">
                            {authMode === "login" ? (
                                <>
                                    Don't have an account?{" "}
                                    <button onClick={() => setAuthMode("signup")} className="text-black underline">
                                        Sign up
                                    </button>
                                </>
                            ) : (
                                <>
                                    Already have an account?{" "}
                                    <button onClick={() => setAuthMode("login")} className="text-black underline">
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
