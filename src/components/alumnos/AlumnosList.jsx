import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { DataTable } from '../comun/list/DataTable';
import { CommonColumns } from '../comun/list/CommonColumns';

const AlumnosList = () => {
  const navigate = useNavigate();
  const [alumnos, setAlumnos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAlumnos();
  }, []);

  const fetchAlumnos = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/api/alumnos');
      setAlumnos(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false);
  };

  const detailsAlumno = (id) => {
    navigate(`/alumnos/${id}`);
  };

  const editAlumno = (id) => {
    navigate(`/alumnos/edit/${id}`);
  };

  const deleteAlumno = (id) => {
    if (window.confirm('¿Quieres eliminar este alumno?')) {
      axios
        .delete(`/api/alumnos/${id}`)
        .then(() => {
          fetchAlumnos(); // recargar los datos después de eliminar
        })
        .catch((error) => {
          console.error('Error deleting data:', error);
        });
    }
  };

  const createAlumno = () => {
    navigate('/alumnos/new');
  };

  const columns = [...CommonColumns];

  const actions = [detailsAlumno, editAlumno, null, deleteAlumno, createAlumno];

  return (
    <div className="list">
      <h3>Lista de alumnos</h3>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <DataTable columns={columns} data={alumnos} actions={actions} />
      )}
    </div>
  );
};

export default AlumnosList;
