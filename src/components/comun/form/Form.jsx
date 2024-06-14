import React from 'react';
import InputField from './InputField';
import Select from 'react-select';

const Form = ({
  fields,
  data,
  handleChange,
  handleSelectChange,
  handleSubmit,
  selectOptions,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) =>
        field.type === 'select' ? (
          <div key={field.name}>
            <label>{field.placeholder}</label>
            <Select
              name={field.name}
              value={selectOptions.find(
                (option) => option.value === data[field.name]?.id
              )}
              onChange={(selectedOption) =>
                handleSelectChange(field.name, selectedOption)
              }
              options={selectOptions}
              placeholder={field.placeholder}
              required={field.required}
            />
          </div>
        ) : (
          <InputField
            key={field.name}
            type={field.type}
            name={field.name}
            value={data[field.name]}
            onChange={handleChange}
            placeholder={field.placeholder}
            required={field.required}
          />
        )
      )}
      <button type="submit">Guardar</button>
    </form>
  );
};

export default Form;
