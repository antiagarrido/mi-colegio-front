import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { DataTable } from '../comun/list/DataTable';
import FetchData from '../comun/FetchData';

export const RolesList = () => {
  const navigate = useNavigate();

  const detailsRol = (id) => {
    navigate(`/roles/${id}`);
  };
  const editRol = (id) => {
    navigate(`/roles/edit/${id}`);
  };

  const deleteRol = (id) => {
    if (window.confirm('¿Quieres eliminar este rol?')) {
      axios.delete(`/api/roles/${id}`).then((roles) => {
        //recargar
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
    <FetchData
      apiPath="/api/roles"
      render={(roles) => (
        <>
          <div className="list">
            <h3>Lista de roles</h3>
            <DataTable columns={columns} data={roles} actions={actions} />
          </div>
        </>
      )}
    />
  );
};

export default RolesList;
