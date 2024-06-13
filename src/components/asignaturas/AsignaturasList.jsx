import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { DataTable } from '../comun/DataTable';

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

  const detalleClick = (id) => {
    navigate(`/asignaturas/${id}`);
  };

  const columns = [
    { Header: 'ID', accessor: 'id' },
    { Header: 'Nombre', accessor: 'nombre' },
    { Header: 'Curso', accessor: 'curso' },
  ];

  const actions = [
    {
      label: 'Detalles',
      className: 'btn btn-info',
      onClick: detalleClick,
    },
  ];

  return (
    <>
      <div className='list'>
        <h3>Lista de asignaturas</h3>
        <DataTable columns={columns} data={asignaturas} actions={actions} />
      </div>
    </>
  );
};

export default AsignaturasList;
