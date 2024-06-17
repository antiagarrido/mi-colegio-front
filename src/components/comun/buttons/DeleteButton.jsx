import React from 'react';

const DeleteButton = ({ onClick }) => (
  <button className="btn btn-danger" onClick={onClick}>
    <i className="bi bi-trash3"></i>
  </button>
);

export default DeleteButton;
