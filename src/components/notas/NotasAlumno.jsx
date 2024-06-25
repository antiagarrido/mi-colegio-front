import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AddButton from '../comun/buttons/AddButton';
import DeleteButton from '../comun/buttons/DeleteButton';
import EditButton from '../comun/buttons/EditButton';
import FetchData from '../comun/FetchData';

export const NotasAsignatura = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const editNota = (asignaturaId) => {
    navigate(`/nota/${asignaturaId}/${id}`);
  };

  const deleteNota = async (asignaturaId) => {
    if (window.confirm('¿Quieres eliminar esta nota?')) {
      try {
        await axios.delete('/api/notas', {
          data: { asignatura_id: asignaturaId, alumno_id: id },
        });
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
      <FetchData
        apiPath={`/api/notas/alumno/${id}`}
        render={(notas) =>
          notas.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Asignatura</th>
                  <th>Curso</th>
                  <th>Nota</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {notas.map((nota) => (
                  <tr key={nota.alumnoAsignatura.asignatura.id}>
                    <td>{nota.alumnoAsignatura.asignatura.nombre}</td>
                    <td>{nota.alumnoAsignatura.asignatura.curso}</td>
                    <td>{nota.nota}</td>
                    <td>
                      <EditButton
                        onClick={() =>
                          editNota(nota.alumnoAsignatura.asignatura.id)
                        }
                      />
                      <DeleteButton
                        onClick={() =>
                          deleteNota(nota.alumnoAsignatura.asignatura.id)
                        }
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <h3>Esta asignatura no tiene notas todavía</h3>
          )
        }
      />
      <AddButton onClick={() => createNota()} />
    </div>
  );
};

export default NotasAsignatura;
