import React from 'react';
import ViewDetails from '../comun/details/ViewDetails';
import { useParams } from 'react-router-dom';
import FetchData from '../comun/details/FetchData.';

export const AsignaturaDetail = () => {
  const { id } = useParams();

  const fields = [
    { name: 'ID', key: 'id' },
    { name: 'Nombre', key: 'nombre' },
    { name: 'Curso', key: 'curso' },
  ];
  return (
    <>
      <div>
        <h1>Datos de la asignatura</h1>

        <FetchData
          apiPath={`/api/asignaturas/${id}`}
          render={(data) => <ViewDetails data={data} fields={fields} />}
        />
      </div>
    </>
  );
};
export default AsignaturaDetail;
