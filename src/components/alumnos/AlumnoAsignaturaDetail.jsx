import React from 'react';
import { useParams } from 'react-router-dom';
import FetchData from '../comun/FetchData';
import { ViewDetails } from '../comun/details/ViewDetails';

export const AlumnoAsignaturaDetail = () => {
  const { id } = useParams();
  const { asignaturaId } = useParams();

  const fields = [
    { name: 'Alumno id', key: 'id.alumno_id' },
    { name: 'Nombre', key: 'alumnoAsignatura.alumno.nombre' },
    { name: 'Asignatura', key: 'alumnoAsignatura.asignatura.nombre' },
    { name: 'Curso', key: 'alumnoAsignatura.asignatura.curso' },
    { name: 'Nota', key: 'nota' },
  ];

  return (
    <FetchData
      apiPath={`/api/notas/${id}/${asignaturaId}`}
      render={(data) => (
        <>
          <div className="list">
            <h3>Notas</h3>
            <ViewDetails data={data} fields={fields} />
          </div>
        </>
      )}
    />
  );
};

export default AlumnoAsignaturaDetail;
