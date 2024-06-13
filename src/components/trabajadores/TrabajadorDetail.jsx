import React from 'react';
import ViewDetails from '../comun/details/ViewDetails';
import { useParams } from 'react-router-dom';
import FetchData from '../comun/list/FetchData.';

export const TabajadorDetail = () => {
  const { id } = useParams();

  const fields = [
    { name: 'ID', key: 'id' },
    { name: 'Nombre', key: 'nombre' },
    { name: 'Apellidos', key: 'apellidos' },
    { name: 'Fecha de nacimiento', key: 'fNacimiento' },
    { name: 'e-mail', key: 'email' },
    { name: 'Teléfono', key: 'telefono' },
    { name: 'Dirección', key: 'direccion' },
    { name: 'DNI', key: 'dni' },

    { name: 'IBAN', key: 'iban' },
    { name: 'Sueldo', key: 'sueldo' },
    { name: 'Antigüedad', key: 'antiguedad' },
  ];
  return (
    <>
      <div>
        <h3>Datos del trabajador</h3>

        <FetchData
          apiPath={`/api/trabajadores/${id}`}
          render={(data) => <ViewDetails data={data} fields={fields} />}
        />
      </div>
    </>
  );
};
export default TabajadorDetail;
