import React from 'react';
import ViewDetails from '../comun/ViewDetails';
import { useParams } from 'react-router-dom';
import FetchData from '../comun/FetchData.';

export const TabajadorDetail = () => {
  const { id } = useParams();

  const fields = [
    { name: 'ID', key: 'id' },
    { name: 'Nombre', key: 'nombre' },
    { name: 'Apellidos', key: 'apellidos' },
    { name: 'Fecha de nciemiento', key: 'fecha_nacimiento' },
    { name: 'E-mail:', key: 'email' },
    { name: 'Teléfono', key: 'telefono' },
    { name: 'Dirección', key: 'direccion' },
    { name: 'DNI', key: 'dni' },
    { name: 'IBAN', key: 'iban' },
    { name: 'Sueldo', key: 'sueldo' },
    { name: 'Antigüedad', key: 'antiguedad' },
    { name: 'Puesto', key: 'rol' },
  ];
  return (
    <>
      <div>
        <h1>Datos del trabajador</h1>

        <FetchData
          apiPath={`/api/trabajador/${id}`}
          render={(data) => <ViewDetails data={data} fields={fields} />}
        />
      </div>
    </>
  );
};
export default TabajadorDetail;
