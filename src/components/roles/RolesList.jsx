import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { DataTable } from '../comun/list/DataTable';

export const RolesList = () => {
  const navigate = useNavigate();
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRoles();
  }, []);

  const fetchRoles = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/api/roles');
      setRoles(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false);
  };

  const detailsRol = (id) => {
    navigate(`/roles/${id}`);
  };

  const editRol = (id) => {
    navigate(`/roles/edit/${id}`);
  };

  const deleteRol = (id) => {
    if (window.confirm('¿Quieres eliminar este rol?')) {
      axios
        .delete(`/api/roles/${id}`)
        .then(() => {
          fetchRoles();
        })
        .catch((error) => {
          console.error('Error deleting data:', error);
        });
    }
  };

  const createRol = () => {
    navigate('/roles/new');
  };

  const columns = [
    { Header: 'ID', accessor: 'id' },
    { Header: 'Nombre', accessor: 'nombre' },
  ];

  const actions = [detailsRol, editRol, null, deleteRol, createRol];

  return (
    <div className="list">
      <h3>Lista de roles</h3>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <DataTable columns={columns} data={roles} actions={actions} />
      )}
    </div>
  );
};

export default RolesList;
