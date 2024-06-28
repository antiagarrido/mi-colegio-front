import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { DataTable } from '../comun/list/DataTable';
import { CommonColumns } from '../comun/list/CommonColumns';

const TrabajadoresList = () => {
  const navigate = useNavigate();
  const [trabajadores, setTrabajadores] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTrabajadores();
  }, []);

  const fetchTrabajadores = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/api/trabajadores');
      setTrabajadores(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false);
  };

  const detalleTrabajador = (id) => {
    navigate(`/trabajadores/${id}`);
  };

  const editTrabajador = (id) => {
    navigate(`/trabajadores/edit/${id}`);
  };

  const deleteTrabajador = (id) => {
    if (window.confirm('¿Quieres eliminar este trabajador?')) {
      axios
        .delete(`/api/trabajadores/${id}`)
        .then(() => {
          fetchTrabajadores(); // recargar los datos después de eliminar
        })
        .catch((error) => {
          console.error('Error deleting data:', error);
        });
    }
  };

  const createTrabajador = () => {
    navigate('/trabajadores/new');
  };

  const gestionarRoles = () => {
    navigate(`/roles`);
  };

  const columns = [
    ...CommonColumns,
    { Header: 'Puesto', accessor: 'rol.nombre' },
  ];

  const actions = [
    detalleTrabajador,
    editTrabajador,
    null,
    deleteTrabajador,
    createTrabajador,
  ];

  return (
    <div className="list">
      <h3>Lista de trabajadores</h3>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <DataTable columns={columns} data={trabajadores} actions={actions} />
      )}
      <div>
        <button className="btn btn-secondary" onClick={gestionarRoles}>
          Gestionar Roles
        </button>
      </div>
    </div>
  );
};

export default TrabajadoresList;
