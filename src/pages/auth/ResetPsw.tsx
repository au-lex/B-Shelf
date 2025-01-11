import React, { useState } from "react";

const ResetPassword: React.FC = () => {
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (otp.length !== 4) {
      alert("OTP must be 4 digits!");
      return;
    }

    alert("Password reset successfully!");
    // Add API call logic here
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-orange-400 to-orange-300">
      {/* Background SVG Wave */}
      <div className="absolute inset-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute bottom-0"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,181.3C384,203,480,213,576,224C672,235,768,245,864,224C960,203,1056,149,1152,133.3C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Reset Password Card */}
      <div className="bg-white rounded-xl shadow-lg w-96 p-6 z-10">
        <h1 className="text-3xl font-semibold text-center text-orange-500 mb-4">
          Reset Password
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Enter the OTP sent to your email and set a new password.
        </p>
        <form onSubmit={handleSubmit}>
          {/* OTP Input */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">OTP</label>
            <div className="flex space-x-2">
              {Array(4)
                .fill("")
                .map((_, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength={1}
                    value={otp[index] || ""}
                    onChange={(e) => {
                      const newOtp = otp.split("");
                      newOtp[index] = e.target.value.replace(/\D/, "");
                      setOtp(newOtp.join(""));
                    }}
                    className="w-12 h-12 border border-gray-300 rounded-lg text-center text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                ))}
            </div>
          </div>

          {/* New Password */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              New Password
            </label>
            <div className="relative">
              <input
                type={showNewPassword ? "text" : "password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter new password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-2 flex items-center text-gray-500"
                onClick={() => setShowNewPassword(!showNewPassword)}
              >
                {showNewPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm new password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-2 flex items-center text-gray-500"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-400 text-white py-2 rounded-lg hover:bg-orange-500 transition"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
