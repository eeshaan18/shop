// pages/about.js

import React from "react";
import Header from "@/components/header"; // Assuming Header is a reusable component
import Footer from "@/components/Footer";
import { FaTruck, FaExchangeAlt, FaShieldAlt } from "react-icons/fa";

const About = () => {
    return (
        <div className="bg-gray-50 text-gray-900">
            {/* Header */}
            <Header />

            {/* About Section */}
            <section className="py-24 bg-gradient-to-r from-white to-gray-100 text-center">
                <div className="container mt-10 mx-auto px-6">
                    <h2 className="text-5xl font-bold text-gray-900 mb-8">About Us</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Welcome to <span className="font-semibold text-black">GOAT Shop</span>, your ultimate destination for high-quality, trendy fashion for men and women.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        We are dedicated to delivering exceptional products, top-notch customer service, and an unparalleled shopping experience.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        From casual wear to office attire or special event outfits, <span className="font-semibold text-black">GOAT Shop</span> has everything you need to elevate your wardrobe.
                    </p>
                </div>
            </section>

            {/* Feature Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-12">Why Choose GOAT Shop?</h2>
                    <p className="text-lg text-gray-700 mb-12">
                        Here’s what makes us stand out:
                    </p>
                    <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-16">
                        {/* Fast Delivery */}
                        <div className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                            <FaTruck className="h-16 w-16 mx-auto text-red-500 mb-6" />
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Fast Delivery</h3>
                            <p className="text-gray-700">
                                Experience speedy and reliable delivery with our streamlined logistics network.
                            </p>
                        </div>
                        {/* Easy Exchange */}
                        <div className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                            <FaExchangeAlt className="h-16 w-16 mx-auto text-yellow-500 mb-6" />
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Easy Exchange</h3>
                            <p className="text-gray-700">
                                Enjoy hassle-free exchanges to ensure you always love what you purchase.
                            </p>
                        </div>
                        {/* Assured Quality */}
                        <div className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                            <FaShieldAlt className="h-16 w-16 mx-auto text-green-500 mb-6" />
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Assured Quality</h3>
                            <p className="text-gray-700">
                                Every product is crafted with care to meet the highest standards of quality.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-24 bg-gradient-to-r from-gray-100 to-gray-200">
                <div className="container mx-auto text-center">
                    <h3 className="text-4xl font-bold text-gray-900 mb-12">Meet Our Team</h3>
                    <div className="flex flex-wrap justify-center gap-8">
                        {/* Team Member 1 */}
                        <div className="w-full sm:w-1/2 lg:w-1/4">
                            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <img src="https://via.placeholder.com/150" alt="Team Member 1" className="rounded-full mx-auto mb-4" />
                                <h4 className="text-xl font-semibold text-gray-900">John Doe</h4>
                                <p className="text-gray-600">CEO & Founder</p>
                            </div>
                        </div>
                        {/* Team Member 2 */}
                        <div className="w-full sm:w-1/2 lg:w-1/4">
                            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <img src="https://via.placeholder.com/150" alt="Team Member 2" className="rounded-full mx-auto mb-4" />
                                <h4 className="text-xl font-semibold text-gray-900">Jane Smith</h4>
                                <p className="text-gray-600">Creative Director</p>
                            </div>
                        </div>
                        {/* Team Member 3 */}
                        <div className="w-full sm:w-1/2 lg:w-1/4">
                            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <img src="https://via.placeholder.com/150" alt="Team Member 3" className="rounded-full mx-auto mb-4" />
                                <h4 className="text-xl font-semibold text-gray-900">Alex Johnson</h4>
                                <p className="text-gray-600">Lead Designer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Statement Section */}
            <section className="py-24 bg-white text-center">
                <div className="container mx-auto px-6">
                    <h3 className="text-4xl font-bold text-gray-900 mb-12">Our Mission</h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        At GOAT Shop, we are committed to offering a curated collection of high-quality, fashion-forward apparel at accessible prices.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Our dedication to sustainability and ethical practices ensures that every purchase supports a brighter future for all.
                    </p>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default About;
