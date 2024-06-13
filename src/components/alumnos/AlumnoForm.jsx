// AlumnoForm.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Form from '../comun/form/Form';
import CommonFields from '../comun/form/CommonFields';

const AlumnoForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [alumno, setAlumno] = useState({
    nombre: '',
    apellidos: '',
    fNacimiento: '',
    email: '',
    telefono: '',
    direccion: '',
    dni: '',
  });

  const fields = [...CommonFields];

  useEffect(() => {
    if (id) {
      axios.get(`/api/alumnos/${id}`).then((response) => {
        setAlumno(response.data);
      });
    }
  }, [id]);

  const handleChange = (e) => {
    setAlumno({ ...alumno, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      axios.put(`/api/alumnos`, alumno).then(() => {
        navigate('/alumnos');
      });
    } else {
      axios.post('/api/alumnos', alumno).then(() => {
        navigate('/alumnos');
      });
    }
  };

  return (
    <div>
      <h3>{id ? 'Editar Alumno' : 'Nuevo Alumno'}</h3>
      <Form
        fields={fields}
        data={alumno}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default AlumnoForm;
