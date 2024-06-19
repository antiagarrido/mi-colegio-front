import React from 'react';
import ViewDetails from '../comun/details/ViewDetails';
import { useParams, Link } from 'react-router-dom';
import FetchData from '../comun/details/FetchData';

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
    { name: 'Puesto', key: 'rol.nombre' },
  ];
  return (
    <div className="container">
      <FetchData
        apiPath={`/api/trabajadores/${id}`}
        render={(data) => (
          <>
            <div className="detail">
              <h3>Datos del trabajador</h3>
              <ViewDetails data={data} fields={fields} />
            </div>

            <div className="detail">
              {data.rol && data.rol.nombre === 'PROFESOR' && (
                <Link to={`/trabajadores/${id}/asignaturas`}>
                  <button className="btn btn-info">
                    Asignaturas del profesor
                  </button>
                </Link>
              )}
            </div>
          </>
        )}
      />
    </div>
  );
};
export default TabajadorDetail;
