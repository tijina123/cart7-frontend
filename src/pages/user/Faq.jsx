const faqData = [
  {
    category: "General Registration Questions",
    faqs: [
      {
        question: "What do I need to register as a seller on Cart7Online.com?",
        answer:
          "You'll typically need basic business information such as your business name, address, contact details (phone number and email), and potentially your GSTIN (if applicable in India). We might also ask for bank account details for payments.",
      },
      {
        question: "How do I register as a seller?",
        answer:
          'Visit Cart7Online.com and look for a "Sell on Cart7Online" or "Seller Registration" or "Sell Now" link, found in the footer and header of the website. Click on it and follow the on-screen instructions to fill out the registration form.',
      },
      {
        question: "Is there a registration fee to become a seller?",
        answer:
          "Please refer to our seller registration page or our pricing policy for the most up-to-date information on any registration fees. Fees may vary depending on your seller type or chosen plan.",
      },
      {
        question: "Can individuals sell on Cart7Online.com, or is it only for businesses?",
        answer:
          "Depending on our policies, both individuals and registered businesses may be able to sell on Cart7Online.",
      },
      {
        question: "What types of products can I sell on Cart7Online.com?",
        answer:
          "You can generally sell a wide range of products across various categories. However, there might be restrictions on certain items based on legal regulations or our platform's policies. Products like guns, explosive products, sex toys, etc. cannot be sold through our website. Please review our prohibited items list during the registration process or in our seller guidelines.",
      },
      {
        question: "How long does the seller registration process take?",
        answer:
          "The time for registration can vary. It usually involves filling out the form and agreeing to our terms and conditions. We may also have a verification process that could take a few business days.",
      },
      {
        question: "Can I register from anywhere in India?",
        answer:
          "Yes, generally sellers from all over India are welcome to register, provided they meet our requirements and can comply with our shipping and payment policies.",
      },
      {
        question:
          "What if I have multiple businesses or product categories? Do I need separate accounts?",
        answer:
          "Our platform usually allows you to manage multiple product categories under a single seller account. However, for distinct businesses, you might need to inquire about our policy on multiple seller accounts.",
      },
    ],
  },
  {
    category: "Account Management Questions",
    faqs: [
      {
        question: "How do I manage my seller account after registration?",
        answer:
          "Once your registration is approved, you'll gain access to a seller dashboard or portal. This is where you can manage your product listings, inventory, orders, payments, and other account settings.",
      },
      {
        question: "How do I list my products?",
        answer:
          "Our seller dashboard will provide tools and instructions on how to upload product information, including titles, descriptions, images, pricing, and shipping details.",
      },
      {
        question: "How do I manage my inventory?",
        answer:
          "The seller dashboard allows you to track and update your product stock levels to ensure accurate availability for buyers.",
      },
      {
        question: "How will I be notified of new orders?",
        answer:
          "You will typically receive email notifications and see updates in your seller dashboard whenever a new order is placed.",
      },
      {
        question: "How do I handle shipping and fulfillment?",
        answer:
          "Cart7Online may offer various shipping options, including seller-managed shipping and platform-assisted logistics. The available options and procedures will be detailed in your seller account and guidelines.",
      },
      {
        question: "How and when will I receive payments for my sales?",
        answer:
          "Our payment cycle and methods will be clearly outlined in our seller agreement and payment policies. Typically, payments are processed periodically and transferred to your registered bank account after deducting any applicable fees or commissions.",
      },
      {
        question:
          "What are the commission fees or charges for selling on Cart7Online.com?",
        answer:
          "Commission rates may vary depending on the product category as well as the seller's category. Our pricing policy or seller agreement will provide a detailed breakdown of the applicable fees.",
      },
      {
        question: "How do I contact support if I have questions or issues?",
        answer:
          "We will provide contact information for our seller support team, which may include email, phone, or a help center within the seller dashboard.",
      },
    ],
  },
  {
    category: "Legal and Policy Questions",
    faqs: [
      {
        question: "What are the terms and conditions for selling on Cart7Online.com?",
        answer:
          "You will be required to agree to our seller terms and conditions during the registration process. It's crucial to read and understand these terms before proceeding.",
      },
      {
        question: "What is Cart7Online.com's return and refund policy for sellers?",
        answer:
          "Our policies regarding returns and refunds, and how they affect sellers, will be detailed in our seller agreement and related policies.",
      },
      {
        question: "What are the guidelines for product listing and content?",
        answer:
          "We have guidelines to ensure accurate and appropriate product listings. These guidelines will cover aspects like image quality, descriptions, and prohibited content.",
      },
      {
        question: "What are my responsibilities as a seller on Cart7Online.com?",
        answer:
          "As a seller, you are responsible for maintaining accurate product information, fulfilling orders promptly, providing good customer service, and adhering to all our policies and applicable laws.",
      },
    ],
  },
];

import React, { useState } from "react";

const FAQ = () => {
  const [openCategoryIndex, setOpenCategoryIndex] = useState(null);
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  const toggleCategory = (categoryIndex) => {
    if (openCategoryIndex === categoryIndex) {
      setOpenCategoryIndex(null);
      setOpenQuestionIndex(null);
    } else {
      setOpenCategoryIndex(categoryIndex);
      setOpenQuestionIndex(null);
    }
  };

  const toggleQuestion = (questionIndex) => {
    setOpenQuestionIndex(openQuestionIndex === questionIndex ? null : questionIndex);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Seller Registration FAQs</h1>

      {faqData.map((categoryItem, categoryIndex) => (
        <div key={categoryIndex} className="mb-6">
          <button
            onClick={() => toggleCategory(categoryIndex)}
            className="w-full text-left text-xl font-semibold mb-2 focus:outline-none"
          >
            {categoryItem.category}
          </button>

          {openCategoryIndex === categoryIndex &&
            categoryItem.faqs.map((faq, questionIndex) => (
              <div key={questionIndex} className="mb-4 border-b pb-4">
                <button
                  onClick={() => toggleQuestion(questionIndex)}
                  className="w-full text-left flex justify-between items-center focus:outline-none"
                >
                  <span className="text-lg font-medium">{faq.question}</span>
                  <span className="text-xl">
                    {openQuestionIndex === questionIndex ? "−" : "+"}
                  </span>
                </button>
                {openQuestionIndex === questionIndex && (
                  <p className="mt-2 text-gray-600">{faq.answer}</p>
                )}
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
