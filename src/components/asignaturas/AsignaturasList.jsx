import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DataTable } from '../comun/list/DataTable';
import FetchData from '../comun/FetchData';
import axios from 'axios';

const AsignaturasList = () => {
  const navigate = useNavigate();

  const detailsAsignatura = (id) => {
    navigate(`/asignaturas/${id}`);
  };
  const editAsignatura = (id) => {
    navigate(`/asignaturas/edit/${id}`);
  };

  const deleteAsignatura = (id) => {
    if (window.confirm('¿Quieres eliminar esta asignatura?')) {
      axios.delete(`/api/asignaturas/${id}`);
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
    <FetchData
      apiPath="/api/asignaturas"
      render={(asignaturas) => (
        <>
          <div className="list">
            <h3>Lista de asignaturas</h3>
            <DataTable columns={columns} data={asignaturas} actions={actions} />
          </div>
        </>
      )}
    />
  );
};

export default AsignaturasList;
