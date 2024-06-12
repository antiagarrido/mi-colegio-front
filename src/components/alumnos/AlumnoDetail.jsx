import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const AlumnoDetail = () => {
  const { id } = useParams();
  const [alumno, setAlumno] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`/api/alumnos/${id}`)
      .then((response) => {
        setAlumno(response.data);
        setCargando(false);
      })
      .catch((error) => {
        console.error('Error obteniendo los detalles del alumno', error);
        setError(error);
        setCargando(false);
      });
  }, [id]);

  if (cargando) return <p>Cargando...</p>;
  if (error) return <p>Error cargando los detalles del alumno.</p>;
  if (!alumno) return <p>No hay detalles disponibles para este alumno.</p>;

  return (
    <div>
      <h3>Detalles del alumno</h3>
      <p>
        <strong>ID:</strong> {alumno.id}
      </p>
      <p>
        <strong>Nombre:</strong> {alumno.nombre}
      </p>
      <p>
        <strong>Apellidos:</strong> {alumno.apellidos}
      </p>
      <p>
        <strong>Teléfono:</strong> {alumno.telefono}
      </p>
      <p>
        <strong>DNI:</strong> {alumno.dni}
      </p>
    </div>
  );
};

export default AlumnoDetail;
