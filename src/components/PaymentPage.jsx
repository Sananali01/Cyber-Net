import { useState } from "react";
import { ArrowLeft } from "lucide-react";

const PaymentPage = () => {
  // State for form fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [discountCode, setDiscountCode] = useState("");
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("card");
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    // Here you would handle the payment process with the chosen method
    setPaymentSuccess(true);  // Simulate a successful payment
  };

  return (
    <div className="py-20 px-4">
      {/* Back Button */}
      <a href="/" className="inline-flex items-center text-red-700 text-lg mb-8">
        <ArrowLeft className="mr-2" />
        Go Back to Pricing
      </a>

      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center font-extrabold leading-tight mb-10">
        Complete Your Payment
      </h1>

      <div className="max-w-4xl mx-auto">
        {/* Checkout Form */}
        {!paymentSuccess ? (
          <form onSubmit={handlePaymentSubmit} className="space-y-8 bg-white p-8 rounded-xl shadow-lg border border-red-700">
            {/* Personal Info */}
            <div className="mb-6">
              <label className="block text-xl font-semibold text-gray-800 mb-2">First Name</label>
              <input
                type="text"
                placeholder="John"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-xl text-xl focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-xl font-semibold text-gray-800 mb-2">Last Name</label>
              <input
                type="text"
                placeholder="Doe"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-xl text-xl focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-xl font-semibold text-gray-800 mb-2">Email Address</label>
              <input
                type="email"
                placeholder="john.doe@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-xl text-xl focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>

            {/* Discount Code */}
            <div className="mb-6">
              <label className="block text-xl font-semibold text-gray-800 mb-2">Discount Code</label>
              <input
                type="text"
                placeholder="Enter your code"
                value={discountCode}
                onChange={(e) => setDiscountCode(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-xl text-xl focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Payment Method Selection */}
            <div className="mb-6">
              <label className="block text-xl font-semibold text-gray-800 mb-2">Select Payment Method</label>
              <div className="flex space-x-6">
                <button
                  type="button"
                  onClick={() => setSelectedPaymentMethod("card")}
                  className={`w-full py-4 ${selectedPaymentMethod === "card" ? "bg-red-700 text-white" : "bg-gray-200"} rounded-lg text-xl`}
                >
                  Card
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedPaymentMethod("google-pay")}
                  className={`w-full py-4 ${selectedPaymentMethod === "google-pay" ? "bg-red-700 text-white" : "bg-gray-200"} rounded-lg text-xl`}
                >
                  Google Pay
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedPaymentMethod("paypal")}
                  className={`w-full py-4 ${selectedPaymentMethod === "paypal" ? "bg-red-700 text-white" : "bg-gray-200"} rounded-lg text-xl`}
                >
                  PayPal
                </button>
              </div>
            </div>

            {/* Payment Method Specific Inputs */}
            {selectedPaymentMethod === "card" && (
              <div className="mb-6">
                <label className="block text-xl font-semibold text-gray-800 mb-2">Card Number</label>
                <input
                  type="text"
                  placeholder="1234 5678 9876 5432"
                  className="w-full p-4 border border-gray-300 rounded-xl text-xl focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>
            )}

            {selectedPaymentMethod === "google-pay" && (
              <div className="text-center py-8">
                <span className="text-2xl">Google Pay Option Coming Soon...</span>
              </div>
            )}

            {selectedPaymentMethod === "paypal" && (
              <div className="text-center py-8">
                <span className="text-2xl">PayPal Option Coming Soon...</span>
              </div>
            )}

            {/* Submit Payment Button */}
            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-red-500 to-red-700 hover:from-red-700 hover:to-red-900 text-white text-xl font-semibold rounded-lg transition transform hover:scale-105 mt-8"
            >
              Pay Now
            </button>
          </form>
        ) : (
          <div className="bg-green-100 p-8 rounded-xl shadow-lg border border-green-700 text-center">
            <h2 className="text-3xl font-bold text-green-700 mb-4">Payment Successful!</h2>
            <p className="text-xl text-gray-700 mb-8">
              Thank you for your purchase! Your payment has been successfully processed.
            </p>
            <a
              href="/"
              className="inline-flex items-center justify-center text-center py-4 px-8 bg-gradient-to-r from-green-500 to-green-700 text-white text-xl font-semibold rounded-lg"
            >
              Go to Dashboard
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentPage;
