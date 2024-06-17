import React from 'react';
import DetailButton from '../buttons/DetailButton';
import EditButton from '../buttons/EditButton';
import DeleteButton from '../buttons/DeleteButton';

export const ActionButtons = ({
  onClickDetail,
  onClickEdit,
  onClickDelete,
}) => {
  return (
    <>
      <DetailButton onClick={onClickDetail} />
      <EditButton onClick={onClickEdit} />
      <DeleteButton onClick={onClickDelete} />
    </>
  );
};
export default ActionButtons;
