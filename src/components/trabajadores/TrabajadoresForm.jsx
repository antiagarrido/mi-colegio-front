import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Form from '../comun/form/Form';
import CommonFields from '../comun/form/CommonFields';
import FetchData from '../comun/FetchData';

export const TrabajadoresForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

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
    {
      name: 'rol',
      type: 'select',
      placeholder: 'Puesto',
      required: true,
    },
  ];

  const handleChange = (trabajador, setTrabajador) => (e) => {
    const { name, value } = e.target;
    setTrabajador({ ...trabajador, [name]: value });
  };

  const handleSelectChange =
    (trabajador, setTrabajador) => (name, selectedOption) => {
      setTrabajador({ ...trabajador, [name]: { id: selectedOption.value } });
    };

  const handleSubmit = (trabajador, setTrabajador) => (e) => {
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
    <FetchData
      apiPath={`api/trabajadores/${id || ''}`}
      render={(trabajador, setTrabajador) => (
        <div>
          <h3>{id ? 'Editar Trabajador' : 'Nuevo Trabajador'}</h3>
          <Form
            fields={fields}
            data={trabajador}
            handleChange={handleChange(trabajador, setTrabajador)}
            handleSelectChange={handleSelectChange(trabajador, setTrabajador)}
            handleSubmit={handleSubmit(trabajador, setTrabajador)}
            selectOptions={roles}
          />
        </div>
      )}
    />
  );
};

export default TrabajadoresForm;
