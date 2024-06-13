import React from 'react'

export const ActionButtons = ({ onClickDetail, onClickEdit, onClickDelete }) => {
  return (
    <>
      <button className="btn btn-info" onClick={onClickDetail}> Detalles </button>
      <button className= 'btn btn-warning' onClick={onClickEdit}> <i class="bi bi-pencil-square"></i></button>
      <button className= 'btn btn-danger' onClick={onClickDelete}><i class="bi bi-trash3"></i></button>
    </>
  );
}
export default ActionButtons;
