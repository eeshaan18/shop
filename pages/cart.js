// pages/cart.js

import React, { useState } from 'react';
import Header from "@/components/header";
import Footer from "@/components/Footer";
import Link from "next/link";

const Cart = () => {
  // Sample product data
  const products = [
    { id: 1, name: "Product 1", price: 50, image: "/images/product1.jpg" },
    { id: 2, name: "Product 2", price: 70, image: "/images/product2.jpg" },
    { id: 3, name: "Product 3", price: 30, image: "/images/product3.jpg" },
    { id: 4, name: "Product 4", price: 100, image: "/images/product4.jpg" },
    { id: 5, name: "Product 5", price: 40, image: "/images/product5.jpg" },
  ];

  // Cart state
  const [cart, setCart] = useState([]);

  // Add product to cart
  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Remove product from cart
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Update quantity in cart
  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return; // Avoid negative quantities
    setCart(cart.map((item) =>
      item.id === id ? { ...item, quantity } : item
    ));
  };

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="bg-gray-100 text-black min-h-screen">
      {/* Header */}
      <Header />

      {/* Cart Section */}
      <section className="py-20 pt-24">
        <div className="container mt-20 mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Your Cart</h2>

          {cart.length === 0 ? (
            <div className="text-center">
              <p className="text-lg text-gray-600">Your cart is empty.</p>
              <Link href="/shop" className="mt-4 text-blue-600 text-lg hover:underline">Go to Shop</Link>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Cart Items */}
              {cart.map((item) => (
                <div key={item.id} className="flex items-center justify-between bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center">
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md mr-4" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                      <p className="text-gray-600">${item.price} each</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-3 py-1 bg-gray-200 rounded-full hover:bg-gray-300"
                      >
                        -
                      </button>
                      <span className="text-lg font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-3 py-1 bg-gray-200 rounded-full hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                    <span className="text-lg font-semibold">${item.price * item.quantity}</span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Cart Summary */}
          {cart.length > 0 && (
            <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold text-gray-800">Total:</span>
                <span className="text-2xl font-bold text-gray-800">${totalPrice}</span>
              </div>

              <div className="flex justify-end space-x-4">
                <Link href="/shop" className="text-blue-600 text-lg hover:underline">Continue Shopping</Link>
                <Link href="/buy" className="px-6 py-2 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300">
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Cart;
