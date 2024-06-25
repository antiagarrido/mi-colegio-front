import React from 'react';
import ViewDetails from '../comun/details/ViewDetails';
import { useParams, Link } from 'react-router-dom';
import FetchData from '../comun/FetchData';

export const AsignaturaDetail = () => {
  const { id } = useParams();

  const fields = [
    { name: 'ID', key: 'id' },
    { name: 'Nombre', key: 'nombre' },
    { name: 'Curso', key: 'curso' },
  ];
  return (
    <>
      <div className="container">
        <div className="details">
          <h1>Datos de la asignatura</h1>

          <FetchData
            apiPath={`/api/asignaturas/${id}`}
            render={(data) => <ViewDetails data={data} fields={fields} />}
          />
        </div>
        <div className="details">
          <div>
            <Link to={`/asignaturas/${id}/notas`}>
              <button className="btn btn-info">Notas de los alumnos </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default AsignaturaDetail;
