import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { DataTable } from '../comun/list/DataTable';

export const RolesList = () => {
  const [roles, setRoles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('/api/roles')
      .then((response) => {
        setRoles(response.data);
      })
      .catch((error) => {
        console.error('Error obteniendo roles');
      });
  }, []);

  const detailsRol = (id) => {
    navigate(`/roles/${id}`);
  };
  const editRol = (id) => {
    navigate(`/roles/edit/${id}`);
  };

  const deleteRol = (id) => {
    if (window.confirm('¿Quieres eliminar esta rol?')) {
      axios.delete(`/api/roles/${id}`).then(() => {
        setRoles(roles.filter((rol) => rol.id !== id));
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

  const actions = [detailsRol, editRol, deleteRol, createRol];

  return (
    <>
      <div className="list">
        <h3>Lista de roles</h3>
        <DataTable columns={columns} data={roles} actions={actions} />
      </div>
    </>
  );
};

export default RolesList;
