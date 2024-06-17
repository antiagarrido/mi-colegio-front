import React from 'react';

const EditButton = ({ onClick }) => (
  <button className="btn btn-warning" onClick={onClick}>
    <i className="bi bi-pencil-square"></i>
  </button>
);

export default EditButton;
