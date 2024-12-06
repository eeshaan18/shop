import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-white text-gray-700 body-font font-sans border-t border-gray-200">
            <div className="container px-5 py-12 mx-auto">
                <div className="flex flex-wrap md:text-left text-center">
                    {/* SHOP Section */}
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-8">
                        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-lg mb-4 uppercase">Shop</h2>
                        <nav className="list-none mb-4 space-y-2 text-gray-600">
                            <li>
                                <Link href="/shop" className="hover:text-gray-900 transition duration-200 ease-in-out">Men's Collection</Link>
                            </li>
                            <li>
                                <Link href="/shop" className="hover:text-gray-900 transition duration-200 ease-in-out">Women's Collection</Link>
                            </li>
                            <li>
                                <Link href="/shop" className="hover:text-gray-900 transition duration-200 ease-in-out">Kid's Collection</Link>
                            </li>
                        </nav>
                    </div>

                    {/* CUSTOMER CARE Section */}
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-8">
                        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-lg mb-4 uppercase">Customer Care</h2>
                        <nav className="list-none mb-4 space-y-2 text-gray-600">
                            <li>
                                <Link href="/faq" className="hover:text-gray-900 transition duration-200 ease-in-out">FAQs</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-gray-900 transition duration-200 ease-in-out">Contact Us</Link>
                            </li>
                            <li>
                                <Link href="/track-order" className="hover:text-gray-900 transition duration-200 ease-in-out">Track Order</Link>
                            </li>
                        </nav>
                    </div>

                    {/* COMPANY Section */}
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-8">
                        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-lg mb-4 uppercase">Company</h2>
                        <nav className="list-none mb-4 space-y-2 text-gray-600">
                            <li>
                                <Link href="/about" className="hover:text-gray-900 transition duration-200 ease-in-out">About Us</Link>
                            </li>
                            <li>
                                <Link href="/terms" className="hover:text-gray-900 transition duration-200 ease-in-out">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href="/terms" className="hover:text-gray-900 transition duration-200 ease-in-out">Terms & Conditions</Link>
                            </li>
                        </nav>
                    </div>

                    {/* NEWSLETTER Section */}
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-8">
                        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-lg mb-4 uppercase">Newsletter</h2>
                        <p className="text-gray-600 text-sm mb-4">
                            Subscribe to get updates on exclusive deals and new arrivals.
                        </p>
                        <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                            <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                                <label htmlFor="footer-field" className="leading-7 text-sm text-gray-600">Email</label>
                                <input
                                    type="email"
                                    id="footer-field"
                                    name="footer-field"
                                    className="w-full bg-gray-100 rounded border border-gray-300 focus:ring-2 focus:ring-gray-500 focus:border-gray-500 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                            <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-gray-900 border-0 py-2 px-6 focus:outline-none hover:bg-gray-800 rounded font-medium">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="bg-gray-100 py-4">
                <div className="container px-5 mx-auto flex items-center sm:flex-row flex-col justify-between">
                    <a className="flex title-font font-semibold items-center md:justify-start justify-center text-gray-900">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-10 h-10 text-gray-900 p-2 bg-white border border-gray-200 rounded-full"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl font-bold tracking-wide">GOAT Shop</span>
                    </a>
                    <p className="text-sm text-gray-600">
                        © 2024 GOAT Shop — All rights reserved.
                    </p>
                    <span className="inline-flex sm:mt-0 mt-4 justify-center sm:justify-start">
                        <a className="text-gray-600 hover:text-gray-900">
                            <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-600 hover:text-gray-900">
                            <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-600 hover:text-gray-900">
                            <svg fill="none" stroke="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v18l15-9z"></path>
                            </svg>
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
