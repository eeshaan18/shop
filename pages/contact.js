"use client";

import React, { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/Footer";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send form data to server)
        console.log("Form Data Submitted:", formData);
    };

    return (
        <>
            {/* Include Header */}
            <Header />

            {/* Contact Page */}
            <main className="bg-gray-50 text-gray-800 pt-24 pb-16">
                <div className="container mt-20 mx-auto px-4 md:px-8">
                    {/* Page Heading */}
                    <h1 className="text-4xl font-serif font-extrabold text-center text-gray-800 mb-6">Get in Touch</h1>
                    <p className="text-center text-lg text-gray-600 mb-12">
                        We’re here to help! Whether you have a question or need assistance, don’t hesitate to reach out.
                    </p>

                    {/* Contact Form */}
                    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name Field */}
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your full name"
                                    className="w-full px-6 py-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 transition duration-300"
                                    required
                                />
                            </div>

                            {/* Email Field */}
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    className="w-full px-6 py-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 transition duration-300"
                                    required
                                />
                            </div>

                            {/* Message Field */}
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Your Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Write your message here..."
                                    className="w-full px-6 py-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 transition duration-300"
                                    rows="6"
                                    required
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <div>
                                <button
                                    type="submit"
                                    className="w-full py-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none transition duration-300"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Additional Information Section */}
                    <div className="mt-12 bg-gray-100 text-gray-800 py-12">
                        <div className="container mx-auto text-center">
                            <h2 className="text-3xl font-serif font-bold text-gray-800 mb-6">Contact Information</h2>
                            <p className="text-lg text-gray-600 mb-6">
                                You can reach us through the following channels:
                            </p>
                            <p className="mb-2">
                                Email:{" "}
                                <a href="mailto:info@goatshop.com" className="text-indigo-600 hover:underline">
                                    info@goatshop.com
                                </a>
                            </p>
                            <p className="mb-2">Phone: <span className="text-gray-700">+1-234-567-890</span></p>
                            <p className="text-gray-700">Address: 123 Goat Street, Tech City, TX, USA</p>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </>
    );
};

export default Contact;
