import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AddButton from '../comun/buttons/AddButton';
import DeleteButton from '../comun/buttons/DeleteButton';
import EditButton from '../comun/buttons/EditButton';
import BackButton from '../comun/buttons/BackButton';

export const NotasAsignatura = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [notas, setNotas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNotas();
  }, []);

  const fetchNotas = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`/api/notas/asignatura/${id}`);
      setNotas(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false);
  };

  const editNota = (alumnoId) => {
    navigate(`/nota/edit/${alumnoId}/${id}`);
  };

  const deleteNota = async (alumnoId) => {
    if (window.confirm('¿Quieres eliminar esta nota?')) {
      try {
        await axios.delete('/api/notas', {
          data: { asignatura_id: id, alumno_id: alumnoId },
        });
        fetchNotas(); // recargar los datos después de eliminar
      } catch (error) {
        console.error('Error eliminando la nota:', error);
      }
    }
  };

  const createNota = () => {
    navigate('/nota/new');
  };

  return (
    <div className="list">
      <h3>Lista de notas</h3>
      {loading ? (
        <p>Cargando...</p>
      ) : notas.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>ID Alumno</th>
              <th>Alumno</th>
              <th>Apellidos</th>
              <th>Nota</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {notas.map((nota) => (
              <tr key={nota.alumnoAsignatura.alumno.id}>
                <td>{nota.alumnoAsignatura.alumno.id}</td>
                <td>{nota.alumnoAsignatura.alumno.nombre}</td>
                <td>{nota.alumnoAsignatura.alumno.apellidos}</td>
                <td>{nota.nota}</td>
                <td>
                  <EditButton
                    onClick={() => editNota(nota.alumnoAsignatura.alumno.id)}
                  />
                  <DeleteButton
                    onClick={() => deleteNota(nota.alumnoAsignatura.alumno.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h3>Esta asignatura no tiene notas todavía</h3>
      )}
      <AddButton onClick={createNota} />
      <BackButton />
    </div>
  );
};

export default NotasAsignatura;
