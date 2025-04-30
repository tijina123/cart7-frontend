import React, { useState } from "react";

const faqs = [
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept UPI, credit and debit cards. All transactions are securely processed.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Delivery times vary by location. Most orders are delivered within 3–7 business days.",
  },
  {
    question: "Can I return a product if I change my mind?",
    answer:
      "Currently, only electronics are eligible for return if defective. Clothing is non-returnable unless damaged or incorrect.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order ships, you'll receive an email with tracking details. You can also log in to your account to track orders.",
  },
  {
    question: "Where can I contact support?",
    answer:
      "You can email us anytime at support@cart7.com or use the Contact Us form for quick help.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>

      {faqs.map((faq, index) => (
        <div key={index} className="mb-4 border-b pb-4">
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full text-left flex justify-between items-center focus:outline-none"
          >
            <span className="text-lg font-medium">{faq.question}</span>
            <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
          </button>
          {openIndex === index && (
            <p className="mt-2 text-gray-600">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
