import React from 'react';
import ViewDetails from '../comun/details/ViewDetails';
import { useParams } from 'react-router-dom';
import FetchData from '../comun/FetchData';

export const RolDetail = () => {
  const { id } = useParams();

  const fields = [
    { name: 'ID', key: 'id' },
    { name: 'Nombre', key: 'nombre' },
  ];
  return (
    <>
      <div>
        <h1>Datos de la rol</h1>

        <FetchData
          apiPath={`/api/roles/${id}`}
          render={(data) => <ViewDetails data={data} fields={fields} />}
        />
      </div>
    </>
  );
};
export default RolDetail;
