import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Form from '../comun/form/Form';

export const AsignaturaForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [asignatura, setAsignatura] = useState({
    nombre: '',
    curso: '',
  });

  const fields = [
    { name: 'nombre', type: 'text', placeholder: 'Nombre', required: true },
    { name: 'curso', type: 'text', placeholder: 'Curso', required: true },
  ];

  useEffect(() => {
    if (id) {
      axios.get(`/api/asignaturas/${id}`).then((response) => {
        setAsignatura(response.data);
      });
    }
  }, [id]);

  const handleChange = (e) => {
    setAsignatura({ ...asignatura, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
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
    <div>
      <h3>{id ? 'Editar Asignatura' : 'Nueva Asignatura'}</h3>
      <Form
        fields={fields}
        data={asignatura}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};
export default AsignaturaForm;
