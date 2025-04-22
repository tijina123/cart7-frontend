import React from "react";
import { FaBoxOpen, FaShippingFast, FaLock, FaHeadset } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 text-gray-800">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">About Us</h1>
        <p className="text-lg">
          <strong>Cart7 – Quality Finds, Unbeatable Prices!</strong>
        </p>
        <p className="mt-2 text-gray-600">
          Welcome to Cart7, where seamless shopping meets unbeatable convenience!
          We’re a fast-growing e-commerce platform dedicated to bringing you a curated
          selection of high-quality products — from trendy fashion and cutting-edge electronics
          to home essentials and beyond, all at competitive prices.
        </p>
      </div>

      {/* Why Choose Cart7 Section */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Why Choose Cart7?
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Feature Card */}
          <div className="flex items-start gap-4">
            <FaBoxOpen className="text-blue-600 text-3xl mt-1" />
            <div>
              <h3 className="font-semibold text-lg">Wide Variety</h3>
              <p className="text-gray-600">
                Discover thousands of products across categories, handpicked for quality and style.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaShippingFast className="text-blue-600 text-3xl mt-1" />
            <div>
              <h3 className="font-semibold text-lg">Lightning-Fast Delivery</h3>
              <p className="text-gray-600">
                Enjoy quick, reliable shipping and hassle-free returns.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaLock className="text-blue-600 text-3xl mt-1" />
            <div>
              <h3 className="font-semibold text-lg">Secure Shopping</h3>
              <p className="text-gray-600">
                Your safety is our priority with encrypted payments and fraud protection.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaHeadset className="text-blue-600 text-3xl mt-1" />
            <div>
              <h3 className="font-semibold text-lg">Customer First</h3>
              <p className="text-gray-600">
                Our 24/7 support team is always ready to help you shop with confidence.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Closing Note */}
      <div className="mt-12 text-center">
        <p className="text-lg font-medium">
          At Cart7, we believe shopping should be easy, enjoyable, and rewarding.
        </p>
        <p className="text-gray-600 mt-2">
          Whether you're upgrading your wardrobe, gadgets, or home, we’re here to make every purchase feel like a win.
        </p>
        <h3 className="mt-6 text-xl font-bold text-blue-600">Happy Shopping!</h3>
      </div>
    </div>
  );
};

export default AboutUs;
