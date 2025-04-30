import React from "react";

const ReturnPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Return Policy</h1>
      <p className="mb-4">
        <strong>Effective Date:</strong> 01 May 2025
      </p>
      <p className="mb-4">
        At <strong>Cart7Online</strong>, we strive to ensure you're completely satisfied with your purchase. If you're not satisfied, we're happy to assist with returns.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Return Conditions</h2>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Time frame:</strong> Returns are accepted within 2 days from the date of delivery.</li>
        <li><strong>Product Condition:</strong> Items must be in original condition with all tags, packaging, and accessories included.</li>
        <li><strong>Reason for Return:</strong> Returns are accepted for reasons such as defective products, incorrect items, etc. The site shall not be responsible for the selection of any wrong product by the customer.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Non-Returnable Items</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Perishable goods such as food, flowers, or beauty or cosmetic products.</li>
        <li>Personalized, custom-made, or final sale items.</li>
        <li>Digital products, gift cards, and downloadable content.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Return Process</h2>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Initiate Return:</strong> Contact our customer support team via email at <a href="mailto:info@cloud7brandingstudio.com" className="text-blue-600 underline">info@cloud7brandingstudio.com</a>, or via customer care support number <a href="tel:+917034133111" className="text-blue-600 underline">+91 7034 133 111</a> with your order number and reason for return.</li>
        <li><strong>Return Authorization:</strong> We'll provide a return authorization number and instructions.</li>
        <li><strong>Shipping:</strong> You'll be responsible for return shipping costs, unless the item is defective or incorrect.</li>
        <li><strong>Refund:</strong> Once we receive the returned item, we'll process a refund to your original payment method.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Refund Policy</h2>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Refund Timeline:</strong> Refunds will be processed within 5-7 business days after receiving the returned item.</li>
        <li><strong>Refund Amount:</strong> You'll receive a full refund of the purchase price, minus any shipping costs.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Exchange Policy</h2>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Exchange Process:</strong> If you'd like to exchange an item, please contact our customer support team with your order number and the item you'd like to exchange for.</li>
        <li><strong>Availability:</strong> Exchanges are subject to availability of the desired item.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Contact Us</h2>
      <p className="mb-4">
        If you have any questions or concerns about our return policy, please don't hesitate to contact us:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Email:</strong> <a href="mailto:info@cloud7brandingstudio.com" className="text-blue-600 underline">info@cloud7brandingstudio.com</a></li>
        <li><strong>WhatsApp/Call:</strong> <a href="tel:+917034133111" className="text-blue-600 underline">+91 7034 133 111</a></li>
        <li><strong>Address:</strong> CLOUD7 Branding Studio, 39/4743, Ravipuram, Old Thevara Road, Kochi - 682016</li>
      </ul>
    </div>
  );
};

export default ReturnPolicy;
