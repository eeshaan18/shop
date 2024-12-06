// pages/terms.js

import React from 'react';
import Header from "@/components/header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Header */}
      <Header fixed={true} />

      {/* Terms and Conditions Section */}
      <section className="py-20 bg-white shadow-lg">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">Terms & Conditions</h2>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Please carefully review these Terms & Conditions before using our website. By accessing or using GOAT Shop, you agree to comply with these terms.
          </p>

          <div className="space-y-12 max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h3>
              <p>
                By accessing or using our website and services, you agree to adhere to the Terms & Conditions outlined here. If you do not agree to any part of these terms, please do not use our services.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">2. Privacy and Security</h3>
              <p>
                Your privacy is important to us. We take reasonable precautions to safeguard your personal and financial information. For further details, review our Privacy Policy.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">3. Use of Website</h3>
              <p>
                You agree to use GOAT Shop's services only for lawful purposes and not to engage in any activity that may harm, disrupt, or interfere with the functionality of the website.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">4. Intellectual Property</h3>
              <p>
                All content on the GOAT Shop website, including but not limited to text, images, logos, and graphics, is the property of GOAT Shop and is protected by copyright law.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">5. Changes to Terms</h3>
              <p>
                GOAT Shop reserves the right to update or modify these Terms & Conditions at any time. Any changes will be reflected here, and it is your responsibility to stay informed of such changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">Privacy Policy</h2>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            At GOAT Shop, we prioritize your privacy. This policy explains how we collect, use, and protect your personal information.
          </p>

          <div className="space-y-12 max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">1. Information We Collect</h3>
              <p>
                We collect personal information such as your name, email address, shipping information, and payment details when you register or make purchases on our website.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">2. How We Use Your Information</h3>
              <p>
                Your information is used to process transactions, send order updates, and improve your experience on our website. We do not sell your personal data to third parties.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">3. Data Protection</h3>
              <p>
                We implement advanced encryption and security measures to protect your personal data from unauthorized access. However, no method of transmission is 100% secure.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">4. Cookies</h3>
              <p>
                Our website uses cookies to improve your user experience, track preferences, and optimize site performance. You can control cookie preferences through your browser settings.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">5. Changes to Privacy Policy</h3>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page, and we encourage you to review it periodically.
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

export default Terms;
