import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { DataTable } from '../comun/list/DataTable';
import { CommonColumns } from '../comun/list/CommonColumns';
import FetchData from '../comun/FetchData';

const AlumnosList = () => {
  const navigate = useNavigate();

  const detailsAlumno = (id) => {
    navigate(`/alumnos/${id}`);
  };

  const editAlumno = (id) => {
    navigate(`/alumnos/edit/${id}`);
  };

  const deleteAlumno = (id) => {
    if (window.confirm('¿Quieres eliminar este alumno?')) {
      axios.delete(`/api/alumnos/${id}`).then((alumnos) => {
        //recargar
      });
    }
  };

  const createAlumno = () => {
    navigate('/alumnos/new');
  };

  const columns = [...CommonColumns];

  const actions = [detailsAlumno, editAlumno, null, deleteAlumno, createAlumno];

  return (
    <FetchData
      apiPath="/api/alumnos"
      render={(alumnos) => (
        <>
          <div className="list">
            <h3>Lista de alumnos</h3>
            <DataTable columns={columns} data={alumnos} actions={actions} />
          </div>
        </>
      )}
    />
  );
};

export default AlumnosList;
