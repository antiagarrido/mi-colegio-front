import React, { useEffect, useState } from 'react';
import ViewDetails from '../comun/details/ViewDetails';
import { useParams, Link } from 'react-router-dom';
import FetchData from '../comun/details/FetchData';

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
      <div className="container">
        <FetchData
          apiPath={`/api/alumnos/${id}`}
          render={(data) => (
            <div className="details">
              <h3>Datos del alumno</h3>
              <ViewDetails data={data} fields={fields} />
            </div>
          )}
        />
        <div className="detail">
          <Link to={`/alumnos/${id}/asignaturas`}>
            <button className="btn btn-info">Asignaturas del alumno</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AlumnoDetail;
