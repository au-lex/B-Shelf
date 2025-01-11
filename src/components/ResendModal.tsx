import React from "react";

interface ResendModalProps {
  isOpen: boolean;
  onClose: () => void;
  onResend: () => void;
}

const ResendModal: React.FC<ResendModalProps> = ({ isOpen, onClose, onResend }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Resend OTP</h2>
        <p className="text-gray-600 mb-6">Are you sure you want to resend the OTP?</p>
        <div className="flex justify-end gap-4">
          <button
            className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-orange-400 text-white rounded-lg hover:bg-orange-500"
            onClick={() => {
              onResend();
              onClose();
            }}
          >
            Resend
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResendModal;
