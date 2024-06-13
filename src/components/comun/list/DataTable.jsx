import React from 'react';
import ActionButtons from './ActionButtons';

export const DataTable = ({ columns, data, actions }) => {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.accessor}>{column.Header}</th>
            ))}
            {actions && <th>Acciones</th>}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              {columns.map((column) => (
                <td key={column.accessor}>{item[column.accessor]}</td>
              ))}
              {actions && (
                <td>
                  <ActionButtons
                    onClickDetail={() => actions[0](item.id)}
                    onClickEdit={() => actions[1](item.id)}
                    onClickDelete={() => actions[2](item.id)}
                  />
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-success" onClick={actions[3]}>
        <i class="bi bi-plus-square"></i>
      </button>
    </>
  );
};

export default DataTable;
