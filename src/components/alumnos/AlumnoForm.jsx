import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Form from '../comun/form/Form';
import CommonFields from '../comun/form/CommonFields';
import FetchData from '../comun/FetchData';

const AlumnoForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const fields = [...CommonFields];

  const handleChange = (e, setData, data) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e, data) => {
    e.preventDefault();
    if (id) {
      axios.put(`/api/alumnos`, data).then(() => {
        navigate('/alumnos');
      });
    } else {
      axios.post('/api/alumnos', data).then(() => {
        navigate('/alumnos');
      });
    }
  };

  return (
    <FetchData
      apiPath={id ? `/api/alumnos/${id}` : null}
      render={(data, setData) => (
        <div>
          <h3>{id ? 'Editar Alumno' : 'Nuevo Alumno'}</h3>
          <Form
            fields={fields}
            data={data}
            handleChange={(e) => handleChange(e, setData, data)}
            handleSubmit={(e) => handleSubmit(e, data)}
          />
        </div>
      )}
    />
  );
};

export default AlumnoForm;
