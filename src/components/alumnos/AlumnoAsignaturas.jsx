import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import DataTable from '../comun/list/DataTable';
import FetchData from '../comun/details/FetchData';

const AlumnoAsignaturas = () => {
  const { id } = useParams();
  const [reload, setReload] = useState(false);
  const [asignaturas, setAsignaturas] = useState([]);

  const columns = [
    { Header: 'ID', accessor: 'id' },
    { Header: 'Nombre', accessor: 'nombre' },
  ];
  const deleteAsignaturaAlumno = (asignaturaId) => {
    if (
      window.confirm('¿Quieres desmatricular a este alumno de la asignatura?')
    ) {
      axios
        .delete(`/api/alumnos/asignaturas`, {
          data: { alumno_id: id, asignatura_id: asignaturaId },
        })
        .then((response) => {
          setReload(!reload);
        });
    }
  };

  const actions = [null, null, deleteAsignaturaAlumno, null];

  return (
    <>
      <div>
        <h3>Asignaturas del alumno</h3>
        <FetchData
          apiPath={`/api/alumnos/${id}/asignaturas`}
          render={(data) => (
            <DataTable columns={columns} data={data} actions={actions} />
          )}
        />
      </div>
    </>
  );
};

export default AlumnoAsignaturas;
