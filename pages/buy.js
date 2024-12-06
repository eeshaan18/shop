import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from "@/components/header"; // Assuming Header is a reusable component
import Footer from "@/components/Footer";

const BuyNow = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [houseNo, setHouseNo] = useState('');
    const [street, setStreet] = useState('');
    const [landmark, setLandmark] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [pin, setPin] = useState('');
    const [phone, setPhone] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('COD');
    const [isFormValid, setIsFormValid] = useState(true);

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!firstName || !lastName || !houseNo || !street || !city || !state || !pin || !phone) {
            setIsFormValid(false);
            return;
        }

        alert(`Order placed successfully! Payment Method: ${paymentMethod}`);
    };

    return (
        <>
            <Header />

            <div className="container mt-10 mx-auto px-6 md:px-12 py-12 bg-gray-50 shadow-lg rounded-lg mt-16">
                <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                    Delivery Information
                </h1>

                <form onSubmit={handleFormSubmit} className="space-y-8">
                    {/* Name Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <label htmlFor="firstName" className="block text-gray-700 font-semibold mb-2">
                                First Name
                            </label>
                            <input
                                id="firstName"
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                                placeholder="Enter your first name"
                            />
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block text-gray-700 font-semibold mb-2">
                                Last Name
                            </label>
                            <input
                                id="lastName"
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                                placeholder="Enter your last name"
                            />
                        </div>
                    </div>

                    {/* Address Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <label htmlFor="houseNo" className="block text-gray-700 font-semibold mb-2">
                                House No.
                            </label>
                            <input
                                id="houseNo"
                                type="text"
                                value={houseNo}
                                onChange={(e) => setHouseNo(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                                placeholder="Enter your house number"
                            />
                        </div>
                        <div>
                            <label htmlFor="street" className="block text-gray-700 font-semibold mb-2">
                                Street / Landmark
                            </label>
                            <input
                                id="street"
                                type="text"
                                value={street}
                                onChange={(e) => setStreet(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                                placeholder="Enter your street or landmark"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <label htmlFor="landmark" className="block text-gray-700 font-semibold mb-2">
                                Landmark
                            </label>
                            <input
                                id="landmark"
                                type="text"
                                value={landmark}
                                onChange={(e) => setLandmark(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                                placeholder="Enter your landmark"
                            />
                        </div>
                        <div>
                            <label htmlFor="city" className="block text-gray-700 font-semibold mb-2">
                                City
                            </label>
                            <input
                                id="city"
                                type="text"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                                placeholder="Enter your city"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <label htmlFor="state" className="block text-gray-700 font-semibold mb-2">
                                State
                            </label>
                            <input
                                id="state"
                                type="text"
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                                placeholder="Enter your state"
                            />
                        </div>
                        <div>
                            <label htmlFor="pin" className="block text-gray-700 font-semibold mb-2">
                                Pin Code
                            </label>
                            <input
                                id="pin"
                                type="text"
                                value={pin}
                                onChange={(e) => setPin(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                                placeholder="Enter your pin code"
                            />
                        </div>
                    </div>

                    {/* Phone Number Section */}
                    <div>
                        <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                            Phone Number
                        </label>
                        <input
                            id="phone"
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                            placeholder="Enter your phone number"
                        />
                    </div>

                    {/* Payment Options Section */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-4">Payment Method</label>
                        <div className="space-y-2">
                            {["COD", "UPI", "Bank Transfer"].map((method) => (
                                <div key={method} className="flex items-center">
                                    <input
                                        type="radio"
                                        id={method}
                                        name="paymentMethod"
                                        value={method}
                                        checked={paymentMethod === method}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                        className="mr-3"
                                    />
                                    <label htmlFor={method} className="text-gray-700">{method}</label>
                                </div>
                            ))}
                        </div>
                    </div>

                    {!isFormValid && (
                        <p className="text-red-500 text-center">Please fill in all fields correctly.</p>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-indigo-700 transition"
                    >
                        Place Order
                    </button>
                </form>

                <div className="mt-8 text-center">
                    <Link href="/shop" className="text-indigo-600 hover:underline">Go back to Shop</Link>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default BuyNow;
