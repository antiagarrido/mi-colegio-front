import React from "react";

export const TablaDatos = ({ columns, data, actions }) => {
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
                                <td key={column.accessor}>
                                    {item[column.accessor]}
                                </td>
                            ))}
                            {actions && (
                                <td>
                                    {actions.map((action) => (
                                        <button
                                            key={action.label}
                                            className={action.className}
                                            onClick={() =>
                                                action.onClick(item.id)
                                            }
                                        >
                                            {action.label}
                                        </button>
                                    ))}
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default TablaDatos;
