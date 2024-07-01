import React from 'react';

export const InputField = ({
  type,
  name,
  value,
  onChange,
  placeholder,
  required,
  disabled = false,
  hidden = false,
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
      hidden={hidden}
    />
  );
};

export default InputField;
