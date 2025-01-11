import React, { useState } from "react";

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      alert(`Password reset link sent to: ${email}`);
      // Add logic to send the reset link via API
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center ">
      {/* Background SVG Wave */}
      <div className="absolute inset-0">
      <img src="https://res.cloudinary.com/dmhvsyzch/image/upload/v1736598974/Vector_2_1_dzsxmx.png" alt="" />
      </div>

      {/* Forgot Password Card */}
      <div className="bg-white rounded-xl shadow-lg w-96 p-6 z-10">
        {isSubmitted ? (
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-base mb-4">
              Check Your Email!
            </h1>
            <p className="text-gray-600">
              We've sent a password reset link to <br />
              <span className="font-medium text-gray-800">{email}</span>
            </p>
            <button
              className="mt-6 bg-base text-white py-2 px-6 rounded-lg hover:bg-orange-500 transition"
              onClick={() => setIsSubmitted(false)}
            >
              Go Back
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h1 className="text-3xl font-semibold text-center text-base mb-4">
              Forgot Password
            </h1>
            <p className="text-center text-gray-600 mb-6">
              Enter your email, and we'll send you a password reset link.
            </p>
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@email.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-base text-white py-2 rounded-lg hover:bg-base/70 transition"
            >
              Send Reset Link
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
