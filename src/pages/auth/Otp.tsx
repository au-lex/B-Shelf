import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";

const OtpVerify: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(["", "", "", ""]);
  const inputs = useRef<HTMLInputElement[]>([]);

  const handleChange = (index: number, value: string) => {
    if (/^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 3) {
        // Move to the next input box
        inputs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      // Move to the previous input box on Backspace
      inputs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const otpValue = otp.join("");
    alert(`Verifying OTP: ${otpValue}`);
    // Add your OTP verification logic here
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center ">
      {/* Background SVG Wave */}
      <div className="absolute inset-0">
      <img src="https://res.cloudinary.com/dmhvsyzch/image/upload/v1736598974/Vector_2_1_dzsxmx.png" alt="" />
      </div>

      {/* OTP Verification Card */}
      <div className="bg-white rounded-xl shadow-lg w-96 p-6 z-10">
      <div className=" flex justify-center">
            <NavLink to="/" className="b block">
              <img src="https://res.cloudinary.com/dmhvsyzch/image/upload/v1736312874/image_prev_ui_2_d4zqol.png"
               alt="logo" className='w-[100px] h-[90px] object-cover' />
            </NavLink>
          </div>
        <p className="text-center text-gray-600 mb-6">
          Enter the 4-digit OTP sent to your email or phone number
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <div className="flex gap-4 mb-6">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputs.current[index] = el!)}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-12 text-center text-2xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            ))}
          </div>
          <button
            type="submit"
            className="w-full bg-base text-white py-2 rounded-lg hover:bg-base/70 transition"
          >
            Verify OTP
          </button>
        </form>
        <div className="text-center mt-4 text-gray-600">
          <p>
            Didn't receive OTP?{" "}
            <button
              type="button"
              className="text-base hover:underline"
              onClick={() => alert("Resending OTP...")}
            >
              Resend
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OtpVerify;
