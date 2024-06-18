import React, { useEffect, useState } from 'react';
import ViewDetails from '../comun/details/ViewDetails';
import { useParams } from 'react-router-dom';
import FetchData from '../comun/details/FetchData.';
import AsignnaturasMatriculadas from './AsignnaturasMatriculadas';

const AlumnoDetail = () => {
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
  ];

  return (
    <>
      <div>
        <FetchData
          apiPath={`/api/alumnos/${id}`}
          render={(data) => (
            <div className="container">
              <div className="details">
                <h3>Datos del alumno</h3>
                <ViewDetails data={data} fields={fields} />
              </div>
              <div className="subjects">
                <AsignnaturasMatriculadas alumnoId={id} />
              </div>
            </div>
          )}
        />
      </div>
    </>
  );
};

export default AlumnoDetail;
