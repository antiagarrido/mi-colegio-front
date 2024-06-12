import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { DataTable } from '../comun/DataTable';

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

  const getDetails = (id) => {
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
      onClick: getDetails,
    },
  ];

  return (
    <>
      <div>
        <h3>Lista de alumnos</h3>
        <DataTable columns={columns} data={alumnos} actions={actions} />
      </div>
    </>
  );
};

export default AlumnosList;
