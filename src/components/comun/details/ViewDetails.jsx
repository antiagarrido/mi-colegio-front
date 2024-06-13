import React from 'react';

export const ViewDetails = ({ data, fields }) => {
  return (
    <>
      <div className="details">
        {fields.map((field) => (
          <p key={field.key}>
            <strong>{field.name}:</strong> {data[field.key]}
          </p>
        ))}
      </div>
    </>
  );
};
export default ViewDetails;
