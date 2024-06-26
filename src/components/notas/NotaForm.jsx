import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Form from '../comun/form/Form';
import FetchData from '../comun/FetchData';

const NotaForm = () => {
  const { alumnoId, asignaturaId } = useParams();
  const navigate = useNavigate();

  const fields = [
    {
      name: 'alumno_id',
      type: 'text',
      placeholder: 'alumno_id',
      required: true,
      disabled: true,
    },
    {
      name: 'asignatura_id',
      type: 'text',
      placeholder: 'asignatura_id',
      required: true,
      disabled: true,
    },
    {
      name: 'nota',
      type: 'text',
      placeholder: 'Nota',
      required: true,
    },
  ];
  const handleChange = (e, setData, data) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e, data) => {
    e.preventDefault();
    if (alumnoId) {
      axios.put('/api/notas', data).then(() => {
        navigate(-1);
      });
    } else {
      axios.post('/api/notas', data).then(() => {
        navigate(-1);
      });
    }
  };

  return (
    <FetchData
      apiPath={`/api/notas/${alumnoId}/${asignaturaId}`}
      render={(data, setData) => (
        <div>
          <h3>Editar nota</h3>
          <Form
            fields={fields}
            data={{
              ...data.nota,
              alumno_id: alumnoId,
              asignatura_id: asignaturaId,
            }}
            handleChange={(e) => handleChange(e, setData, data)}
            handleSubmit={(e) => handleSubmit(e, data)}
          ></Form>
        </div>
      )}
    />
  );
};

export default NotaForm;
