import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { TablaDatos } from '../comun/TablaDatos';

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
      <h3>Lista de trabajadores</h3>
      <TablaDatos columns={columns} data={trabajadores} actions={actions} />
    </>
  );
};

export default TrabajadoresList;
