// pages/track-order.js

import React, { useState } from 'react';
import Header from "@/components/header";
import Footer from "@/components/Footer";

const TrackOrder = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [orderStatus, setOrderStatus] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulated tracking logic (replace with real API or database logic)
    if (trackingNumber === '123456') {
      setOrderStatus('Your order is on its way and will arrive shortly.');
      setError('');
    } else if (trackingNumber === '654321') {
      setOrderStatus('Your order has been delivered successfully.');
      setError('');
    } else {
      setOrderStatus(null);
      setError('Invalid tracking number. Please check again.');
    }
  };

  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Header */}
      <Header />

      {/* Track Order Section */}
      <section className="py-20 bg-white shadow-lg mt-20"> {/* Added mt-20 to shift content down */}
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
            Track Your Order
          </h2>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Enter your tracking number below to check the status of your order.
          </p>

          {/* Track Order Form */}
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  id="tracking-number"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  placeholder="Enter Tracking Number"
                  className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300"
              >
                Track Order
              </button>
            </form>
          </div>

          {/* Order Status Section */}
          {orderStatus && (
            <div className="mt-8 text-center">
              <p className="text-xl font-semibold text-blue-600 mb-4">Order Status:</p>
              <p className="text-lg text-gray-700">{orderStatus}</p>
            </div>
          )}

          {/* Error Message Section */}
          {error && (
            <div className="mt-8 text-center">
              <p className="text-xl font-semibold text-red-500 mb-4">Error:</p>
              <p className="text-lg text-gray-700">{error}</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TrackOrder;
