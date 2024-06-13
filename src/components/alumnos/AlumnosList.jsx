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

  const detailsAlumno = (id) => {
    navigate(`/alumnos/${id}`);
  };

  const editAlumno = (id) => {
    navigate(`/alumnos/edit/${id}`);
  };

  const deleteAlumno = (id) => {
    if (window.confirm('¿Quieres eliminar este alumno?')) {
      axios.delete(`/api/alumnos/${id}`).then(() => {
        setAlumnos(alumnos.filter((alumno) => alumno.id !== id));
      });
    }
  };

  const createAlumno = () => {
    navigate('/alumnos/new');
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
      onClick: detailsAlumno,
    },
    {
      label: 'Editar',
      className: 'btn btn-warning',
      onClick: editAlumno,
    },
    {
      label: 'Eliminar',
      className: 'btn btn-danger',
      onClick: deleteAlumno,
    },
  ];

  return (
    <>
      <div className="list">
        <h3>Lista de alumnos</h3>
        <DataTable columns={columns} data={alumnos} actions={actions} />
        <button className="btn btn-success" onClick={createAlumno}>
          Nuevo alumno
        </button>
      </div>
    </>
  );
};

export default AlumnosList;
