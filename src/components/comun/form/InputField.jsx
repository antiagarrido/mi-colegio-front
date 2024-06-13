
import React from 'react';

export const InputField = ({ type, name, value, onChange, placeholder, required }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
    />
  );
};

export default InputField;
