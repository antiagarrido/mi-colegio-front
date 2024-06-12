import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { TablaDatos } from '../comun/TablaDatos';

const AlumnosList = () => {
  const [alumnos, setAlumnos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('/api/alumnos')
      .then((response) => {
        setAlumnos(response.data);
      })
      .catch((error) => {
        console.error('Error obteniendo alumnos');
      });
  }, []);

  const detalleClick = (id) => {
    navigate(`/alumnos/${id}`);
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
      <h3>Lista de alumnos</h3>
      <TablaDatos columns={columns} data={alumnos} actions={actions} />
    </>
  );
};

export default AlumnosList;
