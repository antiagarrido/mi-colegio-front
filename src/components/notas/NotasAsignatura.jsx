import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import AddButton from '../comun/buttons/AddButton';
import DeleteButton from '../comun/buttons/DeleteButton';
import EditButton from '../comun/buttons/EditButton';

export const NotasAsignatura = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [notas, setNotas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/notas/asignatura/${id}`);
        setNotas(response.data);
      } catch (error) {
        console.error('Error :', error);
      }
    };

    fetchData();
  }, [id]);

  const editNota = (alumnoId) => {
    navigate(`/nota/${alumnoId}/${id}`);
  };

  const deleteNota = async (alumnoId) => {
    if (window.confirm('¿Quieres eliminar esta nota?')) {
      try {
        await axios.delete('/api/notas', {
          data: { asignatura_id: id, alumno_id: alumnoId },
        });
        setNotas(
          notas.filter((nota) => nota.alumnoAsignatura.alumno.id !== alumnoId)
        );
      } catch (error) {
        console.error('Error eliminando la  nota:', error);
      }
    }
  };

  const createNota = () => {
    navigate('/nota/new');
  };

  return (
    <div className="list">
      <h3>Lista de notas</h3>
      {notas.length > 0 ? (
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
      <AddButton onClick={() => createNota} />
    </div>
  );
};

export default NotasAsignatura;
