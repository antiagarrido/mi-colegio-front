import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const AsignnaturasMatriculadas = ({ alumnoId }) => {
  {
    const [asignaturas, setAsignaturas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchAsignaturas = async () => {
        try {
          const response = await fetch(`/api/alumnos/${alumnoId}/asignaturas`);
          if (!response.ok) {
            throw new Error('Error de conexión');
          }
          const data = await response.json();
          setAsignaturas(data);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };

      fetchAsignaturas();
    }, [alumnoId]);

    if (loading) {
      return <p>Cargando asignaturas...</p>;
    }

    if (error) {
      return <p>Error obteniendo asignaturas: {error}</p>;
    }

    return (
      <div>
        <h4>Asignaturas Matriculadas</h4>
        <ul>
          {asignaturas.map((asignatura) => (
            <li key={asignatura.id}>
              <strong> {asignatura.nombre} </strong> - {asignatura.curso}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  AsignaturasList.propTypes = {
    alumnoId: PropTypes.string.isRequired,
  };
};
export default AsignnaturasMatriculadas;
