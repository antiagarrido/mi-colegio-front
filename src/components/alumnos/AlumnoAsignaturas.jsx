import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import DataTable from '../comun/list/DataTable';
import FetchData from '../comun/details/FetchData';
import BackButton from '../comun/buttons/BackButton';

const AlumnoAsignaturas = () => {
  const { id } = useParams();
  const [reload, setReload] = useState(false);
  const [asignaturas, setAsignaturas] = useState([]);
  const [asignaturasMatriculadas, setAsignaturasMatriculadas] = useState([]);

  useEffect(() => {
    axios.get('/api/asignaturas').then((response) => {
      setAsignaturas(response.data);
    });
  }, []);

  const columns = [
    { Header: 'ID', accessor: 'id' },
    { Header: 'Nombre', accessor: 'nombre' },
    { Header: 'Curso', accessor: 'curso' },
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

  const matricularAsignaturaAlumno = (asignaturaId) => {
    axios
      .post(`/api/alumnos/asignaturas`, {
        alumno_id: id,
        asignatura_id: asignaturaId,
      })
      .then((response) => {
        setReload(!reload);
      });
  };

  const actionsMatriculadas = [null, null, null, deleteAsignaturaAlumno, null];
  const actionsDisponibles = [
    null,
    null,
    matricularAsignaturaAlumno,
    null,
    null,
  ];

  useEffect(() => {
    axios.get(`/api/alumnos/${id}/asignaturas`).then((response) => {
      setAsignaturasMatriculadas(response.data);
    });
  }, [reload]);

  const asignaturasDisponibles = asignaturas.filter(
    (asignatura) =>
      !asignaturasMatriculadas.some(
        (asignaturaMatriculada) => asignaturaMatriculada.id === asignatura.id
      )
  );

  return (
    <>
      <div className="container">
        <div className="details">
          <h4>Asignaturas del alumno</h4>
          <FetchData
            key={reload}
            apiPath={`/api/alumnos/${id}/asignaturas`}
            render={(data) => (
              <DataTable
                columns={columns}
                data={data}
                actions={actionsMatriculadas}
              />
            )}
          />
          <BackButton />
        </div>
        <div className="details">
          <h4>Asignaturas Disponibles</h4>
          <DataTable
            columns={columns}
            data={asignaturasDisponibles}
            actions={actionsDisponibles}
          ></DataTable>
        </div>
      </div>
    </>
  );
};

export default AlumnoAsignaturas;
