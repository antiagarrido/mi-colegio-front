import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Form from '../comun/form/Form';

const NotaForm = () => {
  const { alumnoId, asignaturaId } = useParams();
  const [alumnos, setAlumnos] = useState([]);
  const [asignaturas, setAsignaturas] = useState([]);
  const [nota, setNota] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);


  useEffect(() => {
    axios
      .get('/alumnoAsignatura/alumnos')
      .then((response) => setAlumnos(response.data))
      .catch((error) => console.error('Error obteniendo  alumnos:', error));
  }, []);

  useEffect(() => {
    if (alumnoId) {
      axios
        .get(`/alumnoAsignatura/alumnos/${alumnoId}`)
        .then((response) => setAsignaturas(response.data))
        .catch((error) =>
          console.error('Error obnteniendo asignaturas:', error)
        );
    } else {
      setAsignaturas([]);
    }
  }, [alumnoId]);

  useEffect(() => {
    if (alumnoId && asignaturaId) {
      setIsUpdating(true);
      axios
        .get(`/notas/${alumnoId}/${asignaturaId}`)
        .then((response) => {
          const notaData = response.data;
          setNota(notaData.nota);
        })
        .catch((error) => console.error('Error fetching nota:', error));
    }
  }, [alumnoId, asignaturaId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newNota = {
      id: {
        alumno_id: alumnoId,
        asignatura_id: asignaturaId,
      },
      nota: nota,
    };

    const request = isUpdating
      ? axios.put(`/notas/${alumnoId}/${asignaturaId}`, newNota)
      : axios.post('/notas', newNota);

    request
      .then((response) => {
        alert('Nota guardada con éxito');
      })
      .catch((error) => {
        console.error('Error saving nota:', error);
        alert('Error guardando la nota');
      });
  };

  const handleChange = (e) => {
    setNota(e.target.value);
  };

  const handleSelectChange = (field, selectedOption) => {
    if (field === 'alumno_id') {
      setAlumnoId(selectedOption.value);
    } else if (field === 'asignatura_id') {
      setAsignaturaId(selectedOption.value);
    }
  };

  const fields = [
    {
      name: 'alumno_id',
      type: 'select',
      placeholder: 'Alumno',
      required: true,
    },
    {
      name: 'asignatura_id',
      type: 'select',
      placeholder: 'Asignatura',
      required: true,
    },
    { name: 'nota', type: 'number', placeholder: 'Nota', required: true },
  ];

  const selectOptions = alumnos
    .map((alumno) => ({
      value: alumno.id,
      label: alumno.nombre,
    }))
    .concat(
      asignaturas.map((asignatura) => ({
        value: asignatura.id,
        label: asignatura.nombre,
      }))
    );

 const data = {
    alumno_id: alumnoId,
    asignatura_id: asignaturaId,
    nota: nota,
  };

  return (
    <Form
      fields={fields}
      data={data}
      handleChange={handleChange}
      handleSelectChange={handleSelectChange}
      handleSubmit={handleSubmit}
      selectOptions={selectOptions}
    />
  );
};

export default NotaForm;
