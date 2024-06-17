import React from 'react';
import ActionButtons from './ActionButtons';
import BackButton from '../../buttons/BackButton';

export const DataTable = ({ columns, data, actions }) => {
  const renderCell = (row, accessor) => {
    return accessor.split('.').reduce((acc, part) => acc && acc[part], row);
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.accessor}>{column.Header}</th>
            ))}
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={[row.id]}>
              {columns.map((column) => (
                <td key={column.accessor}>
                  {renderCell(row, column.accessor)}
                </td>
              ))}
              <td>
                <ActionButtons
                  onClickDetail={() => actions[0](row.id)}
                  onClickEdit={() => actions[1](row.id)}
                  onClickDelete={() => actions[2](row.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="btn btn-success" onClick={actions[3]}>
        <i className="bi bi-plus-square"></i>
      </button>

      <BackButton />
    </>
  );
};

export default DataTable;
