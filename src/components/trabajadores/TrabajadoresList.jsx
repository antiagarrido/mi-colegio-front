import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { DataTable } from '../comun/DataTable';

const TrabajadoresList = () => {
  const [trabajadores, setTrabajadores] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('/api/trabajadores')
      .then((response) => {
        setTrabajadores(response.data);
      })
      .catch((error) => {
        console.error('Error obteniendo trabajadores');
      });
  }, []);

  const detalleClick = (id) => {
    navigate(`/trabajadores/${id}`);
  };

  const columns = [
    { Header: 'ID', accessor: 'id' },
    { Header: 'Nombre', accessor: 'nombre' },
    { Header: 'Apellidos', accessor: 'apellidos' },
    { Header: 'Teléfono', accessor: 'telefono' },
    { Header: 'DNI', accessor: 'dni' },
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
      <div>
        <h3>Lista de trabajadores</h3>
        <DataTable columns={columns} data={trabajadores} actions={actions} />
      </div>
    </>
  );
};

export default TrabajadoresList;
