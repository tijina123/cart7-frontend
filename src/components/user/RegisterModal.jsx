import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import UserService from "../../services/user-api-services/UserService";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const RegisterModal = ({ onClose }) => {
  const [isPlanOpen, setIsPlanOpen] = useState(false);
  const [showBankDetails, setShowBankDetails] = useState(false);

  const [plan] = useState([
    { name: "Free plan", amount: 0, percentage: 25 },
    { name: "plan 1", amount: 999, percentage: 22 },
    { name: "plan 2", amount: 1499, percentage: 20 },
    { name: "plan 3", amount: 1999, percentage: 18 },
    { name: "plan 4", amount: 2499, percentage: 16 },
    { name: "plan 5", amount: 2999, percentage: 14 },
    { name: "plan 6", amount: 3499, percentage: 12 },
    { name: "plan 7", amount: 3999, percentage: 10 },
  ]);

  const { postRegister } = UserService();

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    companyname: Yup.string().required("Company name is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone must be 10 digits")
      .required("Phone is required"),
    plan: Yup.string().required("Plan is required"),

    // Bank fields conditional on context
    ifsc: Yup.string().when("$showBankDetails", {
      is: true,
      then: Yup.string().required("IFSC Code is required"),
    }),
    accountNumber: Yup.string().when("$showBankDetails", {
      is: true,
      then: Yup.string().required("Account number is required"),
    }),
    confirmAccountNumber: Yup.string().when("$showBankDetails", {
      is: true,
      then: Yup.string()
        .required("Confirm account number is required")
        .oneOf([Yup.ref("accountNumber"), null], "Account numbers must match"),
    }),
    beneficiaryName: Yup.string().when("$showBankDetails", {
      is: true,
      then: Yup.string().required("Beneficiary name is required"),
    }),
  });

  const handleSubmit = async (values) => {
    const response = await postRegister(values);
    if (response?.data?.success) {
      toast.success(response?.data?.message);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else {
      toast.error(response?.data?.message);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <Toaster position="top-center" reverseOrder={false} />
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        className="bg-white p-10 rounded-2xl shadow-xl w-full sm:w-4/5 md:w-3/5 lg:w-2/5 max-h-screen overflow-y-auto"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-4xl font-semibold">Seller Register</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-900">
            <X size={20} />
          </button>
        </div>

        <Formik
          initialValues={{
            name: "",
            companyname: "",
            plan: "",
            email: "",
            password: "",
            phone: "",
            role: "admin",
            businessType:"",
            ifscCode: "",
            accountNumber: "",
            reAccountNumber: "",
            beneficiaryName: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          context={{ showBankDetails }}
        >
          {({ values, handleChange, handleBlur, setFieldValue }) => (
            <Form>
              {/* Name */}
              <div className="mb-4">
                <label className="block text-md font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter your name"
                />
                <ErrorMessage name="name" component="div" className="text-red-500 text-md" />
              </div>

              {/* Company Name */}
              <div className="mb-4">
                <label className="block text-md font-medium text-gray-700">Company Name</label>
                <input
                  type="text"
                  name="companyname"
                  value={values.companyname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter your company name"
                />
                <ErrorMessage name="companyname" component="div" className="text-red-500 text-md" />
              </div>

              {/* Business Type */}
              <div className="mb-4">
                <label className="block text-md font-medium text-gray-700">Business Type</label>
                <select
                  name="businessType"
                  value={values.businessType}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                >
                  <option value="" disabled>Select your business type</option>
                  <option value="Sole Proprietorship">Proprietorship</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Individual">Individual</option>
                  <option value="Private Limited Company">Private Limited Company</option>
                  <option value="Public Limited Company">Public Limited Company</option>
                  <option value="LLP">LLP</option>
                  <option value="TRUST">TRUST</option>
                  <option value="Society">Society</option>
                  <option value="NGO/Non-profit">NGO</option>
                </select>
                <ErrorMessage name="businessType" component="div" className="text-red-500 text-md" />
              </div>

              {/* Email */}
              <div className="mb-4">
                <label className="block text-md font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter your email"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-md" />
              </div>

              {/* Phone */}
              <div className="mb-4">
                <label className="block text-md font-medium text-gray-700">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter your phone number"
                />
                <ErrorMessage name="phone" component="div" className="text-red-500 text-md" />
              </div>

              {/* Plan Dropdown */}
              <div className="mb-4 relative">
                <label className="block text-md font-medium text-gray-700 mb-1">Plan</label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsPlanOpen(!isPlanOpen)}
                    className="w-full text-left p-3 border border-gray-300 rounded-lg bg-white"
                  >
                    {values.plan
                      ? plan.find((p) => p.name === values.plan)?.name || "Select a Plan"
                      : "Select a Plan"}
                  </button>

                  {isPlanOpen && (
                    <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
                      {plan.map((option) => (
                        <div
                          key={option.name}
                          onClick={() => {
                            setFieldValue("plan", option.name);
                            setIsPlanOpen(false);
                          }}
                          className={`px-4 py-2 cursor-pointer hover:bg-blue-100 ${
                            values.plan === option.name ? "bg-blue-100 font-semibold" : ""
                          }`}
                        >
                          <div className="flex justify-between">
                            <span>{option.name}</span>
                            <span>
                              ₹{option.amount} - {option.percentage}%
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <ErrorMessage name="plan" component="div" className="text-red-500 text-md mt-1" />
              </div>

              {/* Toggle Bank Details */}
              <div
                className="text-blue-600 font-semibold mb-2 cursor-pointer"
                onClick={() => setShowBankDetails(!showBankDetails)}
              >
                {showBankDetails ? "Hide" : "Show"} Bank Account Details
              </div>

              {showBankDetails && (
                <>
                  <div className="mb-4">
                    <label className="block text-md font-medium text-gray-700">IFSC Code</label>
                    <input
                      type="text"
                      name="ifscCode"
                      value={values.ifscCode}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      placeholder="Enter IFSC Code"
                    />
                    <ErrorMessage name="ifsc" component="div" className="text-red-500 text-md" />
                  </div>

                  <div className="mb-4">
                    <label className="block text-md font-medium text-gray-700">Account Number</label>
                    <input
                      type="text"
                      name="accountNumber"
                      value={values.accountNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      placeholder="Enter Account Number"
                    />
                    <ErrorMessage name="accountNumber" component="div" className="text-red-500 text-md" />
                  </div>

                  <div className="mb-4">
                    <label className="block text-md font-medium text-gray-700">Re-enter Account Number</label>
                    <input
                      type="text"
                      name="reAccountNumber"
                      value={values.reAccountNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      placeholder="Re-enter Account Number"
                    />
                    <ErrorMessage name="confirmAccountNumber" component="div" className="text-red-500 text-md" />
                  </div>

                  <div className="mb-4">
                    <label className="block text-md font-medium text-gray-700">Beneficiary Name</label>
                    <input
                      type="text"
                      name="beneficiaryName"
                      value={values.beneficiaryName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      placeholder="Enter Beneficiary Name"
                    />
                    <ErrorMessage name="beneficiaryName" component="div" className="text-red-500 text-md" />
                  </div>
                </>
              )}

              {/* Password */}
              <div className="mb-4">
                <label className="block text-md font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter your password"
                />
                <ErrorMessage name="password" component="div" className="text-red-500 text-md" />
              </div>

              <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition">
                Register
              </button>

            
            </Form>
          )}
        </Formik>
      <div className="text-center mt-3">
          <p>
            Already have an account? <a
  href="https://admin.cart7online.com"
  className="inline-block  hover:blue-600 text-red-500  rounded-md text-center transition duration-200 mt-1"
>
  Login
</a>
          </p>
        </div>


      </motion.div>
    </div>
  );
};

export default RegisterModal;



