import React from 'react';
import InputField from './InputField';

const Form = ({ fields, data, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <InputField
          key={field.name}
          type={field.type}
          name={field.name}
          value={data[field.name]}
          onChange={handleChange}
          placeholder={field.placeholder}
          required={field.required}
        />
      ))}
      <button type="submit">Guardar</button>
    </form>
  );
};

export default Form;
