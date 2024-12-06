// pages/faq.js

import React from 'react';
import Header from "@/components/header";
import Footer from "@/components/Footer";

const FAQ = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Header */}
      <Header />

      {/* FAQ Section */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-extrabold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 mb-16 max-w-3xl mx-auto">Find answers to common questions below. If you need further assistance, feel free to contact us.</p>

          <div className="space-y-12">
            {/* FAQ Item 1 */}
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-xl border-l-4 border-indigo-600 hover:bg-gray-50 transition-all transform hover:scale-105 hover:cursor-pointer">
              <h3 className="text-2xl font-semibold text-gray-900">What is GOAT Shop?</h3>
              <p className="text-lg text-gray-700 mt-4">
                GOAT Shop is a modern fashion destination that offers a curated selection of trendy and high-quality clothing for both men and women. We focus on providing apparel that meets every style need, whether casual or formal.
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-xl border-l-4 border-indigo-600 hover:bg-gray-50 transition-all transform hover:scale-105 hover:cursor-pointer">
              <h3 className="text-2xl font-semibold text-gray-900">How can I place an order?</h3>
              <p className="text-lg text-gray-700 mt-4">
                To place an order, browse our categories, choose the items you love, and click “Add to Cart”. Once you are ready to complete the purchase, go to your cart, review your selection, and proceed to checkout. We accept payments via credit/debit cards and PayPal.
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-xl border-l-4 border-indigo-600 hover:bg-gray-50 transition-all transform hover:scale-105 hover:cursor-pointer">
              <h3 className="text-2xl font-semibold text-gray-900">What are the shipping options?</h3>
              <p className="text-lg text-gray-700 mt-4">
                We offer a variety of shipping options, including standard, expedited, and free shipping for orders over a certain value. After your order is shipped, you will receive a tracking number to follow its progress.
              </p>
            </div>

            {/* FAQ Item 4 */}
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-xl border-l-4 border-indigo-600 hover:bg-gray-50 transition-all transform hover:scale-105 hover:cursor-pointer">
              <h3 className="text-2xl font-semibold text-gray-900">Can I return or exchange an item?</h3>
              <p className="text-lg text-gray-700 mt-4">
                Yes, we offer a 30-day return and exchange policy. If you are not completely satisfied with your purchase, simply return or exchange the item within 30 days of receiving it. Items must be in their original condition with tags attached.
              </p>
            </div>

            {/* FAQ Item 5 */}
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-xl border-l-4 border-indigo-600 hover:bg-gray-50 transition-all transform hover:scale-105 hover:cursor-pointer">
              <h3 className="text-2xl font-semibold text-gray-900">How can I contact customer support?</h3>
              <p className="text-lg text-gray-700 mt-4">
                Our customer support team is here to help! You can reach us via email at <a href="mailto:support@goatshop.com" className="text-indigo-600 hover:underline">support@goatshop.com</a>, or call us at (123) 456-7890. We’re available Monday to Friday from 9 AM to 6 PM.
              </p>
            </div>

            {/* FAQ Item 6 */}
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-xl border-l-4 border-indigo-600 hover:bg-gray-50 transition-all transform hover:scale-105 hover:cursor-pointer">
              <h3 className="text-2xl font-semibold text-gray-900">Do you offer gift cards?</h3>
              <p className="text-lg text-gray-700 mt-4">
                Yes! We offer digital gift cards in various denominations. They can be purchased directly from our website and used as a payment method on future orders. Perfect for gifting to loved ones who appreciate style.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FAQ;
