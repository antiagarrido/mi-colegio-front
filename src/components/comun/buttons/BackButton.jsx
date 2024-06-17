import React from 'react';
import { useNavigate } from 'react-router-dom';

export const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      onClick={() => navigate(-1)}
      className="btn btn-secondary"
    >
      Volver
    </button>
  );
};
export default BackButton;
