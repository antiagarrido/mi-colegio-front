import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          value={alumno.nombre}
          onChange={handleChange}
          placeholder="Nombre"
          required
        />
        <input
          type="text"
          name="apellidos"
          value={alumno.apellidos}
          onChange={handleChange}
          placeholder="Apellidos"
          required
        />
        <input
          type="date"
          name="fNacimiento"
          value={alumno.fNacimiento}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          value={alumno.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="text"
          name="telefono"
          value={alumno.telefono}
          onChange={handleChange}
          placeholder="Teléfono"
          required
        />
        <input
          type="text"
          name="direccion"
          value={alumno.direccion}
          onChange={handleChange}
          placeholder="Dirección"
          required
        />
        <input
          type="text"
          name="dni"
          value={alumno.dni}
          onChange={handleChange}
          placeholder="DNI"
          required
        />
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default AlumnoForm;
