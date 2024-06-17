import React from 'react';

const AddButton = ({ onClick }) => (
  <button className="btn btn-success" onClick={onClick}>
    <i className="bi bi-plus-square"></i>
  </button>
);

export default AddButton;
