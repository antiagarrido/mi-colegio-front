import React from 'react';
import { useParams } from 'react-router-dom';
import EntityAssignment from '../comun/EntityAssignment';

const TrabajadorAsignaturas = () => {
  const { id } = useParams();

  return (
    <EntityAssignment
      entidadId={id}
      tipoEntidad="trabajadores"
      tipoEntidadRelacionada="asignaturas"
    />
  );
};

export default TrabajadorAsignaturas;

