import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataTable } from '../comun/list/DataTable';
import axios from 'axios';

const AsignaturasList = () => {
  const navigate = useNavigate();
  const [asignaturas, setAsignaturas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAsignaturas();
  }, []);

  const fetchAsignaturas = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/api/asignaturas');
      setAsignaturas(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false);
  };

  const detailsAsignatura = (id) => {
    navigate(`/asignaturas/${id}`);
  };

  const editAsignatura = (id) => {
    navigate(`/asignaturas/edit/${id}`);
  };

  const deleteAsignatura = (id) => {
    if (window.confirm('¿Quieres eliminar esta asignatura?')) {
      axios
        .delete(`/api/asignaturas/${id}`)
        .then(() => {
          fetchAsignaturas(); // recargar los datos después de eliminar
        })
        .catch((error) => {
          console.error('Error deleting data:', error);
        });
    }
  };

  const createAsignatura = () => {
    navigate('/asignaturas/new');
  };

  const columns = [
    { Header: 'ID', accessor: 'id' },
    { Header: 'Nombre', accessor: 'nombre' },
    { Header: 'Curso', accessor: 'curso' },
  ];

  const actions = [
    detailsAsignatura,
    editAsignatura,
    null,
    deleteAsignatura,
    createAsignatura,
  ];

  return (
    <div className="list">
      <h3>Lista de asignaturas</h3>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <DataTable columns={columns} data={asignaturas} actions={actions} />
      )}
    </div>
  );
};

export default AsignaturasList;
