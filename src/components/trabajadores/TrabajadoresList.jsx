import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { DataTable } from '../comun/list/DataTable';
import { CommonColumns } from '../comun/list/CommonColumns';
import FetchData from '../comun/FetchData';

const TrabajadoresList = () => {
  const navigate = useNavigate();

  const detalleTrabajador = (id) => {
    navigate(`/trabajadores/${id}`);
  };

  const editTrabajador = (id) => {
    navigate(`/trabajadores/edit/${id}`);
  };

  const deleteTrabajador = (id) => {
    if (window.confirm('¿Quieres eliminar este trabajador?')) {
      axios.delete(`/api/trabajadores/${id}`).then((trabajadores) => {
        setTrabajadores(
          trabajadores.filter((trabajador) => trabajador.id !== id)
        );
      });
    }
  };

  const createTrabajador = () => {
    navigate('/trabajadores/new');
  };

  const gestionarRoles = () => {
    navigate(`/roles`);
  };

  const columns = [
    ...CommonColumns,
    { Header: 'Puesto', accessor: 'rol.nombre' },
  ];

  const actions = [
    detalleTrabajador,
    editTrabajador,
    null,
    deleteTrabajador,
    createTrabajador,
  ];

  return (
    <FetchData
      apiPath="/api/trabajadores"
      render={(trabajadores) => (
        <>
          <div className="list">
            <h3>Lista de trabajadores</h3>
            <DataTable
              columns={columns}
              data={trabajadores}
              actions={actions}
            />

            <div>
              <button className="btn btn-secondary" onClick={gestionarRoles}>
                Gestionar Roles
              </button>
            </div>
          </div>
        </>
      )}
    />
  );
};

export default TrabajadoresList;
