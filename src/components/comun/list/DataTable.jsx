import React from 'react';
import ActionButtons from './ActionButtons';
import BackButton from '../buttons/BackButton';
import AddButton from '../buttons/AddButton';

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

      <div className="buttons">
        <AddButton onClick={actions[3]} />
        <BackButton />
      </div>
    </>
  );
};

export default DataTable;
