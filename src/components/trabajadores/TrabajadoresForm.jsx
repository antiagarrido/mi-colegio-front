import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Form from '../comun/form/Form';
import CommonFields from '../comun/form/CommonFields';

export const TrabajadoresForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [trabajador, setTrabajador] = useState({
    nombre: '',
    apellidos: '',
    fNacimiento: '',
    email: '',
    telefono: '',
    direccion: '',
    dni: '',
  });

  const fields = [
    ...CommonFields,
    { name: 'iban', type: 'text', placeholder: 'IBAN', required: true },
    { name: 'sueldo', type: 'number', placeholder: 'Sueldo', required: true },
    {
      name: 'antiguedad',
      type: 'number',
      placeholder: 'Antigüedad',
      required: true,
    },
  ];

  useEffect(() => {
    if (id) {
      axios.get(`/api/trabajadores/${id}`).then((response) => {
        setTrabajador(response.data);
      });
    }
  }, [id]);

  const handleChange = (e) => {
    setTrabajador({ ...trabajador, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      axios.put(`/api/trabajadores`, trabajador).then(() => {
        navigate('/trabajadores');
      });
    } else {
      axios.post('/api/trabajadores', trabajador).then(() => {
        navigate('/trabajadores');
      });
    }
  };

  return (
    <div>
      <h3>{id ? 'Editar Trabajador' : 'Nuevo Trabajador'}</h3>
      <Form
        fields={fields}
        data={trabajador}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};
export default TrabajadoresForm;
