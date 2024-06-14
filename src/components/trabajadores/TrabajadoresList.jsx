import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { DataTable } from '../comun/list/DataTable';

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

  const detalleTrabajador = (id) => {
    navigate(`/trabajadores/${id}`);
  };

  const editTrabajador = (id) => {
    navigate(`/trabajadores/edit/${id}`);
  };

  const deleteTrabajador = (id) => {
    if (window.confirm('¿Quieres eliminar este trabajador?')) {
      axios.delete(`/api/trabajadores/${id}`).then(() => {
        setTrabajadores(
          trabajadores.filter((trabajador) => trabajador.id !== id)
        );
      });
    }
  };

  const createTrabajador = () => {
    navigate('/trabajadores/new');
  };

  const columns = [
    { Header: 'ID', accessor: 'id' },
    { Header: 'Nombre', accessor: 'nombre' },
    { Header: 'Apellidos', accessor: 'apellidos' },
    { Header: 'Teléfono', accessor: 'telefono' },
    { Header: 'DNI', accessor: 'dni' },
    { Header: 'Puesto', accessor: 'rol.nombre' },
  ];

  const actions = [
    detalleTrabajador,
    editTrabajador,
    deleteTrabajador,
    createTrabajador,
  ];

  return (
    <>
      <div className="list">
        <h3>Lista de trabajadores</h3>
        <DataTable columns={columns} data={trabajadores} actions={actions} />
      </div>
    </>
  );
};

export default TrabajadoresList;
