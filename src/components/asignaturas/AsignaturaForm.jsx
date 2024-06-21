import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Form from '../comun/form/Form';
import FetchData from '../comun/FetchData';

export const AsignaturaForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const fields = [
    { name: 'nombre', type: 'text', placeholder: 'Nombre', required: true },
    { name: 'curso', type: 'text', placeholder: 'Curso', required: true },
  ];

  const handleChange = (asignatura, setAsignatura) => (e) => {
    setAsignatura({ ...asignatura, [e.target.name]: e.target.value });
  };

  const handleSubmit = (asignatura, setAsignatura) => (e) => {
    e.preventDefault();
    if (id) {
      axios.put(`/api/asignaturas`, asignatura).then(() => {
        navigate('/asignaturas');
      });
    } else {
      axios.post('/api/asignaturas', asignatura).then(() => {
        navigate('/asignaturas');
      });
    }
  };

  return (
    <FetchData
      apiPath={`api/asignaturas/${id || ''}`}
      render={(asignatura, setAsignatura) => (
        <div>
          <h3>{id ? 'Editar Asignatura' : 'Nueva Asignatura'}</h3>
          <Form
            fields={fields}
            data={asignatura}
            handleChange={handleChange(asignatura, setAsignatura)}
            handleSubmit={handleSubmit(asignatura, setAsignatura)}
          />
        </div>
      )}
    />
  );
};
export default AsignaturaForm;
