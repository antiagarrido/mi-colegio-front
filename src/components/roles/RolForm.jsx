import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Form from '../comun/form/Form';
import FetchData from '../comun/FetchData';

export const RolForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const fields = [
    { name: 'nombre', type: 'text', placeholder: 'Nombre', required: true },
  ];

  const handleChange = (rol, setRol) => (e) => {
    setRol({ ...rol, [e.target.name]: e.target.value });
  };

  const handleSubmit = (rol, setRol) => (e) => {
    e.preventDefault();
    if (id) {
      axios.put(`/api/roles`, rol).then(() => {
        navigate('/roles');
      });
    } else {
      axios.post('/api/roles', rol).then(() => {
        navigate('/roles');
      });
    }
  };

  return (
    <FetchData
      apiPath={`api/roles/${id || ''}`}
      render={(rol, setRol) => (
        <div>
          <h3>{id ? 'Editar Rol' : 'Nuevo Rol'}</h3>
          <Form
            fields={fields}
            data={rol}
            handleChange={handleChange(rol, setRol)}
            handleSubmit={handleSubmit(rol, setRol)}
          />
        </div>
      )}
    />
  );
};

export default RolForm;
