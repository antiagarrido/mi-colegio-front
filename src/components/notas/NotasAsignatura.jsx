import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AddButton from '../comun/buttons/AddButton';
import DeleteButton from '../comun/buttons/DeleteButton';
import EditButton from '../comun/buttons/EditButton';
import BackButton from '../comun/buttons/BackButton';
import FetchData from '../comun/FetchData';

export const NotasAsignatura = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const editNota = (alumnoId) => {
    navigate(`/nota/edit/${alumnoId}/${id}`);
  };

  const deleteNota = async (alumnoId) => {
    if (window.confirm('¿Quieres eliminar esta nota?')) {
      try {
        await axios.delete('/api/notas', {
          data: { asignatura_id: id, alumno_id: alumnoId },
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
        apiPath={`/api/notas/asignatura/${id}`}
        render={(notas) =>
          notas.length > 0 ? (
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
                        onClick={() =>
                          editNota(nota.alumnoAsignatura.alumno.id)
                        }
                      />
                      <DeleteButton
                        onClick={() =>
                          deleteNota(nota.alumnoAsignatura.alumno.id)
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
      <BackButton />
    </div>
  );
};

export default NotasAsignatura;
