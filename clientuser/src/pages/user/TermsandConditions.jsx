import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
      <p className="mb-4">
        Welcome to <strong>Cart7</strong>. By accessing and using our website,
        you agree to comply with and be bound by the following Terms and
        Conditions. Please read them carefully before making a purchase or
        using our services.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. General Terms</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>You must be at least 18 years old (or the legal age in your jurisdiction) to place an order.</li>
        <li>All products and services are subject to availability.</li>
        <li>We reserve the right to modify, suspend, or discontinue any part of the website without notice.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. Ordering & Payments</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Prices are listed in Rupees and are subject to change.</li>
        <li>Accepted payment methods: UPI, Credit/Debit Cards.</li>
        <li>Orders are processed once payment is confirmed.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. Shipping & Returns</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Delivery times and costs vary based on location and shipping method.</li>
        <li>Please review our Refund Policy for details on refunds and cancellations.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. Intellectual Property</h2>
      <p className="mb-4">
        All content (logos, text, images) on this website is owned by Cart7 and protected by copyright laws. 
        Unauthorized use is prohibited.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">5. Limitation of Liability</h2>
      <p className="mb-4">
        We are not liable for any indirect, incidental, or consequential damages arising from product use or website access.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">6. Governing Law</h2>
      <p className="mb-4">
        These Terms are governed by the laws of India. Any disputes will be resolved in <strong>[Kerala Jurisdiction]</strong>.
      </p>

      <p className="mt-6">
        For questions, contact us at{" "}
        <a href="mailto:info@cloud7brandingstudio.com" className="text-blue-600 underline">
          info@cloud7brandingstudio.com
        </a>.
      </p>
    </div>
  );
};

export default TermsAndConditions;
