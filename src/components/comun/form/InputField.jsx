import React from 'react';

export const InputField = ({
  type,
  name,
  value,
  onChange,
  placeholder,
  required,
  disabled = false,
}) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
    />
  );
};

export default InputField;
