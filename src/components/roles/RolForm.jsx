import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Form from '../comun/form/Form';

export const RolForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [rol, setRol] = useState({
    nombre: '',
    curso: '',
  });

    useEffect(() => {
      if (id) {
        axios.get(`/api/roles/${id}`).then((response) => {
          setRol(response.data);
        });
      }
    }, [id]);

  const fields = [
    { name: 'nombre', type: 'text', placeholder: 'Nombre', required: true },
  ];



  const handleChange = (e) => {
    setRol({ ...rol, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
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
    <div>
      <h3>{id ? 'Editar Rol' : 'Nueva Rol'}</h3>
      <Form
        fields={fields}
        data={rol}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};
export default RolForm;
