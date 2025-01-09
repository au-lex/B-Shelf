import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const BackButton: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Go back to the previous page in the history stack
  };

  return (
    <button onClick={handleBack} className="text-gray-600 flex hover:text-gray-900">
      <ChevronLeft size={24} />
      Back
    </button>
  );
};

export default BackButton;
