import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Form from '../comun/form/Form';
import FetchData from '../comun/FetchData';

const NotaForm = () => {
  const { alumnoId, asignaturaId } = useParams();
  const [nota, setNota] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    if (alumnoId && asignaturaId) {
      setIsUpdating(true);
      axios
        .get(`/notas/${alumnoId}/${asignaturaId}`)
        .then((response) => {
          const notaData = response.data;
          setNota(notaData.nota);
        })
        .catch((error) => console.error('Error obteniendo nota:', error));
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
      .then(() => {
        alert('Nota guardada con éxito');
      })
      .catch((error) => {
        console.error('Error guardando la nota:', error);
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

  const selectOptions = (alumnos, asignaturas) => {
    const alumnoOptions = alumnos.map((alumno) => ({
      value: alumno.id,
      label: alumno.nombre,
    }));

    const asignaturaOptions = asignaturas.map((asignatura) => ({
      value: asignatura.id,
      label: asignatura.nombre,
    }));

    return { alumnoOptions, asignaturaOptions };
  };

  return (
    <div>
      <FetchData
        apiPath="/alumnoAsignatura/alumnos"
        render={(alumnos) => (
          <FetchData
            apiPath={`/alumnoAsignatura/alumnos/${alumnoId}`}
            render={(asignaturas) => {
              const { alumnoOptions, asignaturaOptions } = selectOptions(
                alumnos,
                asignaturas
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
                  selectOptions={[...alumnoOptions, ...asignaturaOptions]}
                />
              );
            }}
          />
        )}
      />
    </div>
  );
};

export default NotaForm;
