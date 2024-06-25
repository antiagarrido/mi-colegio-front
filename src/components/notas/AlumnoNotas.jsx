import React from 'react';
import { useParams } from 'react-router-dom';
import FetchData from '../comun/FetchData';
import { DataTable } from '../comun/list/DataTable';

export const AlumnoNotas = () => {
  const { id } = useParams();

  const columns = [
    {
      Header: 'Asgignatura',
      accessor: 'alumnoAsignatura.asignatura.nombre',
    },
    {
      Header: 'Curso',
      accessor: 'alumnoAsignatura.asignatura.curso',
    },

    { Header: 'Nota', accessor: 'nota' },
  ];

  const actions = [null, null, null, null, null];

  return (
    <FetchData
      apiPath={`/api/notas/alumno/${id}`}
      render={(notas) => (
        <>
          {notas.length > 0 ? (
            <div className="list">
              <h3>Lista de notas del alumno </h3>
              <DataTable columns={columns} data={notas} actions={actions} />
            </div>
          ) : (
            <h3>Este alumno no tiene notas todavía</h3>
          )}
        </>
      )}
    />
  );
};

export default AlumnoNotas;
