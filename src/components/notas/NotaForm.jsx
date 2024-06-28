import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Form from '../comun/form/Form';

const NotaForm = () => {
  const { alumnoId, asignaturaId } = useParams();
  const navigate = useNavigate();
  const [nota, setNota] = useState({
    id: {
      alumno_id: alumnoId || '',
      asignatura_id: asignaturaId || '',
    },
    nota: '',
  });
  const [asignaturas, setAsignaturas] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    if (alumnoId && asignaturaId) {
      axios.get(`/api/notas/${alumnoId}/${asignaturaId}`).then((response) => {
        setNota(response.data);
        setCargando(false);
      });
    } else if (alumnoId) {
      axios.get(`/api/alumnos/${alumnoId}/asignaturas`).then((response) => {
        const asignaturasOptions = response.data.map((asignatura) => ({
          value: asignatura.id,
          label: `${asignatura.nombre} - ${asignatura.curso}`,
        }));
        setAsignaturas(asignaturasOptions);
        setCargando(false);
      });
    }
  }, [alumnoId, asignaturaId]);

  const fields = [
    {
      name: 'id.alumno_id',
      type: 'text',
      placeholder: alumnoId,
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

  if (!asignaturaId && alumnoId) {
    fields.push({
      name: 'id.asignatura_id',
      type: 'select',
      placeholder: 'Selecciona una asignatura',
      required: true,
      disabled: false,
    });
  } else {
    fields.push({
      name: 'id.asignatura_id',
      type: 'text',
      placeholder: asignaturaId,
      required: true,
      disabled: true,
    });
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('id.')) {
      const [_, key] = name.split('.');
      setNota((prevNota) => ({
        ...prevNota,
        id: {
          ...prevNota.id,
          [key]: value,
        },
      }));
    } else {
      setNota((prevNota) => ({
        ...prevNota,
        [name]: value,
      }));
    }
  };

  const handleSelectChange = (name, selectedOption) => {
    const [_, key] = name.split('.');
    setNota((prevNota) => ({
      ...prevNota,
      id: {
        ...prevNota.id,
        [key]: selectedOption.value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      id: {
        alumno_id: nota.id.alumno_id,
        asignatura_id: nota.id.asignatura_id,
      },
      nota: nota.nota,
    };

    if (alumnoId && asignaturaId) {
      axios
        .put(`/api/notas`, payload)
        .then(() => {
          navigate(-1);
        })
        .catch((error) => {
          console.error('Error al actualizar la nota:', error);
        });
    } else {
      axios
        .post('/api/notas', payload)
        .then(() => {
          navigate(-1);
        })
        .catch((error) => {
          console.error('Error al crear la nota:', error);
        });
    }
  };

  if (cargando) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h3>Editar nota</h3>
      <Form
        fields={fields}
        data={nota}
        handleChange={handleChange}
        handleSelectChange={handleSelectChange}
        handleSubmit={handleSubmit}
        selectOptions={asignaturas}
      />
    </div>
  );
};

export default NotaForm;
