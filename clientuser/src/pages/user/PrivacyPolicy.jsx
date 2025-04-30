import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">
        At <strong>Cart7</strong>, we are committed to protecting your privacy
        and ensuring the security of your personal information. This Privacy
        Policy outlines how we collect, use, disclose, and safeguard your data
        when you visit our website, make a purchase, or interact with our
        services.
      </p>
      <p className="mb-4">
        By using our website, you agree to the terms of this policy. We may
        update this Privacy Policy periodically, so we encourage you to review
        it regularly.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Key Details:</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <span className="font-semibold">Information We Collect –</span>{" "}
          Personal details (name, email, shipping address), payment information
          (processed securely), and browsing behavior.
        </li>
        <li>
          <span className="font-semibold"> How We Use Your Data –</span> To
          process orders, improve user experience, send updates, and comply with
          legal obligations.
        </li>
        <li>
          <span className="font-semibold"> Data Sharing –</span> We do not
          sell your information but may share it with trusted third parties
          (e.g., payment processors, shipping carriers) only for order
          fulfillment.
        </li>
        <li>
          <span className="font-semibold"> Security Measures –</span>{" "}
          Encryption, secure payment gateways, and strict access controls to
          protect your data.
        </li>
        <li>
          <span className="font-semibold"> Your Rights –</span> You may
          access, correct, or request deletion of your personal data by
          contacting us.
        </li>
      </ul>

      <p className="mt-6">
        For any questions about our privacy practices, please contact us at{" "}
        <a
          href="mailto:your-email@cart7.com"
          className="text-blue-600 underline"
        >
          [info@cloud7brandingstudio.com]
        </a>
        .
      </p>
    </div>
  );
};

export default PrivacyPolicy;
