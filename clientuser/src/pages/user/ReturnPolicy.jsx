import React from "react";

const ReturnsRefundsPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Returns & Refunds Policy</h1>
      <p className="mb-4">
        At <strong>Cart7</strong>, we strive to ensure your complete
        satisfaction with every purchase. Please review our policy below to
        understand your options regarding returns and refunds.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Eligibility for Returns & Refunds</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>
          ✅ <strong>Electronic Products:</strong> Eligible for refunds or replacements within 1 day of delivery if defective, damaged, or not as described.
        </li>
        <li>
          ❌ <strong>Clothing & Apparel:</strong> Final sale – no returns, exchanges, or refunds unless the item arrives damaged or incorrect (must report within 1 day).
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. Return Process</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Contact our support team at <a href="mailto:info@cloud7brandingstudio.com" className="text-blue-600 underline">info@cloud7brandingstudio.com</a> within the eligible period.</li>
        <li>Provide your order number, product details, and reason for return.</li>
        <li>For electronics, we may require photo/video proof of the issue.</li>
        <li>Once approved, you’ll receive return instructions (if applicable).</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. Refund Method & Timing</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Refunds are processed to the original payment method within 7 business days after approval.</li>
        <li>Shipping fees are non-refundable unless the return is due to our error.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. Non-Returnable Items</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Clothing, accessories, and related apparel products.</li>
        <li>Items damaged due to misuse or improper handling.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">5. Exchanges</h2>
      <p className="mb-4">
        Electronics may be exchanged for the same product if stock is available.
      </p>

      <p className="mt-6">
        Questions? Contact us at{" "}
        <a href="mailto:info@cloud7brandingstudio.com" className="text-blue-600 underline">
          info@cloud7brandingstudio.com
        </a>
        , we’re happy to help!
      </p>
    </div>
  );
};

export default ReturnsRefundsPolicy;
