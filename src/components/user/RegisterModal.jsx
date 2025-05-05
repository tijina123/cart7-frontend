import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import UserService from "../../services/user-api-services/UserService";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";


const RegisterModal = ({ onClose }) => {

  const [isPlanOpen, setIsPlanOpen] = useState(false);
  const [plan, setPlan] = useState([
    { name: "Free plan", amount: 0, percentage: 25 },
    { name: "plan 1", amount: 999, percentage: 22 },
    { name: "plan 2", amount: 1499, percentage: 20 },
    { name: "plan 3", amount: 1999, percentage: 18 },
    { name: "plan 4", amount: 2499, percentage: 16 },
    { name: "plan 5", amount: 2999, percentage: 14 },
    { name: "plan 6", amount: 3499, percentage: 12 },
    { name: "plan 7", amount: 3999, percentage: 10 }
  ]);


  const { postRegister } = UserService();

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    // plan: Yup.string().required("Plan is required"),
    companyname: Yup.string().required("Company name is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone must be 10 digits")
      .required("Phone is required"),

  });


  const handleSubmit = async (values) => {

    // Handle form submission logic here
    const response = await postRegister(values);
    console.log("Response from API:", response);
    
    if (response?.data?.success) {

      toast.success(response?.data?.message);
      setTimeout(() => {
        window.location.reload();
      }, 1500);

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
          initialValues={{ name: "", companyname: "", plan: "", email: "", password: "", role: "admin", phone: "", }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange, handleBlur, isSubmitting, setFieldValue }) => (
            <Form>
              <div className="mb-4">
                <label className="block text-md font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                />
                <ErrorMessage name="name" component="div" className="text-red-500 text-md" />
              </div>

              <div className="mb-4">
                <label className="block text-md font-medium text-gray-700">Company Name</label>
                <input
                  type="text"
                  name="companyname"
                  value={values.companyname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your company name"
                />
                <ErrorMessage name="companyname" component="div" className="text-red-500 text-md" />
              </div>

              <div className="mb-4">
                <label className="block text-md font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-md" />
              </div>

              <div className="mb-4">
                <label className="block text-md font-medium text-gray-700">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your phone number"
                />
                <ErrorMessage name="phone" component="div" className="text-red-500 text-md" />
              </div>


              <div className="mb-4 relative">
                <label className="block text-md font-medium text-gray-700 mb-1">Plan</label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsPlanOpen(!isPlanOpen)}
                    className="w-full text-left p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                          className={`px-4 py-2 cursor-pointer hover:bg-blue-100 ${values.plan === option.name ? "bg-blue-100 font-semibold" : ""
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


              <div className="mb-4">
                <label className="block text-md font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your password"
                />
                <ErrorMessage name="password" component="div" className="text-red-500 text-md" />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
              // disabled={isSubmitting}
              >
                {/* {isSubmitting ? "Registering..." : "Register"} */}
                Register
              </button>
            </Form>
          )}
        </Formik>
      </motion.div>
    </div>
  );
};

export default RegisterModal;
