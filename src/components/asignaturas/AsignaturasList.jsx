import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { DataTable } from '../comun/list/DataTable';

const AsignaturasList = () => {
  const [asignaturas, setAsignaturas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('/api/asignaturas')
      .then((response) => {
        setAsignaturas(response.data);
      })
      .catch((error) => {
        console.error('Error obteniendo asignaturas');
      });
  }, []);

  const detailsAsignatura = (id) => {
    navigate(`/asignaturas/${id}`);
  };
  const editAsignatura = (id) => {
    navigate(`/asignaturas/edit/${id}`);
  };

  const deleteAsignatura = (id) => {
    if (window.confirm('¿Quieres eliminar esta asignatura?')) {
      axios.delete(`/api/asignaturas/${id}`).then(() => {
        setAsignaturas(
          asignaturas.filter((asignatura) => asignatura.id !== id)
        );
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
    deleteAsignatura,
    createAsignatura,
  ];

  return (
    <>
      <div className="list">
        <h3>Lista de asignaturas</h3>
        <DataTable columns={columns} data={asignaturas} actions={actions} />
      </div>
    </>
  );
};

export default AsignaturasList;
