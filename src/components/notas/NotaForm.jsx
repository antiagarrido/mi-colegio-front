import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Form from '../comun/form/Form';
import FetchData from '../comun/FetchData';

const NotaForm = () => {
  const { alumnoId, asignaturaId } = useParams();
  const navigate = useNavigate();
  const [nota, setNota] = useState({
    nota: '',
  });

  useEffect(() => {
    if (alumnoId && asignaturaId) {
      axios.get(`/api/notas/${alumnoId}/${asignaturaId}`).then((response) => {
        setNota(response.data);
      });
    }
  }, []);

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
  const handleChange = (e, nota) => {
    setNota({ ...nota, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e, nota) => {
    e.preventDefault();
    if (alumnoId && asignaturaId) {
      axios.put('/api/notas', nota).then(() => {
        navigate(-1);
      });
    } else {
      axios.post('/api/notas', nota).then(() => {
        navigate(-1);
      });
    }
  };

  return (
    <div>
      <h3>Editar nota</h3>
      <Form
        fields={fields}
        data={{
          ...nota,
          alumno_id: alumnoId,
          asignatura_id: asignaturaId,
        }}
        handleChange={(e) => handleChange(e, nota)}
        handleSubmit={(e) => handleSubmit(e, nota)}
      ></Form>
    </div>
  );
};

export default NotaForm;
