import React from 'react';
import PropTypes from 'prop-types';
import DetailButton from '../buttons/DetailButton';
import EditButton from '../buttons/EditButton';
import DeleteButton from '../buttons/DeleteButton';
import AddButton from '../buttons/AddButton';

export const ActionButtons = ({
  onClickDetail,
  onClickEdit,
  onClickAdd,
  onClickDelete,
}) => {
  return (
    <>
      <div className="action-buttons">
        {onClickDetail && <DetailButton onClick={onClickDetail} />}
        {onClickEdit && <EditButton onClick={onClickEdit} />}
        {onClickAdd && <AddButton onClick={onClickAdd} />}
        {onClickDelete && <DeleteButton onClick={onClickDelete} />}
      </div>
    </>
  );
};

ActionButtons.propTypes = {
  onClickDetail: PropTypes.func,
  onClickEdit: PropTypes.func,
  onClickDelete: PropTypes.func,
};

export default ActionButtons;
