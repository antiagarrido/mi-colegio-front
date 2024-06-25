import React from 'react';
import { useParams } from 'react-router-dom';
import EntityAssignment from '../comun/EntityAssignment';

const AlumnoAsignaturas = () => {
  const { id } = useParams();

  return (
    <EntityAssignment
      entidadId={id}
      tipoEntidad="alumnos"
      tipoEntidadRelacionada="asignaturas"
    />
  );
};

export default AlumnoAsignaturas;
