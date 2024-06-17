import React from 'react';
import BackButton from '../buttons/BackButton';

export const ViewDetails = ({ data, fields }) => {
  const renderValue = (data, key) => {
    return key.split('.').reduce((acc, part) => acc && acc[part], data);
  };
  return (
    <>
      <div className="details">
        {fields.map((field) => (
          <p key={field.key}>
            <strong>{field.name}:</strong> {renderValue(data, field.key)}
          </p>
        ))}

        <BackButton />
      </div>
    </>
  );
};
export default ViewDetails;
