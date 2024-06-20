import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import DataTable from '../comun/list/DataTable';
import FetchData from '../comun/details/FetchData';
import BackButton from '../comun/buttons/BackButton';

const TrabajadorAsignaturas = () => {
  const { id } = useParams();
  const [reload, setReload] = useState(false);
  const [asignaturas, setAsignaturas] = useState([]);
  const [asignaturasMatriculadas, setAsignaturasMatriculadas] = useState([]);

  useEffect(() => {
    axios.get('/api/asignaturas').then((response) => {
      setAsignaturas(response.data);
    });
  }, []);

  const columns = [
    { Header: 'ID', accessor: 'id' },
    { Header: 'Nombre', accessor: 'nombre' },
    { Header: 'Curso', accessor: 'curso' },
  ];

  const deleteAsignaturaTrabajador = (asignaturaId) => {
    if (
      window.confirm('¿Quieres desvincular a este trabajador de la asignatura?')
    ) {
      axios
        .delete(`/api/trabajadores/asignaturas`, {
          data: { trabajador_id: id, asignatura_id: asignaturaId },
        })
        .then((response) => {
          setReload(!reload);
        });
    }
  };

  const matricularAsignaturaTrabajador = (asignaturaId) => {
    axios
      .post(`/api/trabajadores/asignaturas`, {
        trabajador_id: id,
        asignatura_id: asignaturaId,
      })
      .then((response) => {
        setReload(!reload);
      });
  };

  const actionsMatriculadas = [
    null,
    null,
    null,
    deleteAsignaturaTrabajador,
    null,
  ];
  const actionsDisponibles = [
    null,
    null,
    matricularAsignaturaTrabajador,
    null,
    null,
  ];

  useEffect(() => {
    axios.get(`/api/trabajadores/${id}/asignaturas`).then((response) => {
      setAsignaturasMatriculadas(response.data);
    });
  }, [reload]);

  const asignaturasDisponibles = asignaturas.filter(
    (asignatura) =>
      !asignaturasMatriculadas.some(
        (asignaturaMatriculada) => asignaturaMatriculada.id === asignatura.id
      )
  );

  return (
    <>
      <div className="container">
        <div className="details">
          <h4>Asignaturas del profesor</h4>
          <FetchData
            key={reload}
            apiPath={`/api/trabajadores/${id}/asignaturas`}
            render={(data) => (
              <DataTable
                columns={columns}
                data={data}
                actions={actionsMatriculadas}
              />
            )}
          />
          <BackButton />
        </div>
        <div className="details">
          <h4>Asignaturas Disponibles</h4>
          <DataTable
            columns={columns}
            data={asignaturasDisponibles}
            actions={actionsDisponibles}
          ></DataTable>
        </div>
      </div>
    </>
  );
};

export default TrabajadorAsignaturas;

/* import React from 'react';
import { useParams } from 'react-router-dom';
import EntityAssignment from '../comun/EntityAssignment';

const TrabajadorAsignaturas = () => {
  const { id } = useParams();

  return (
    <EntityAssignment
      entidadId={id}
      tipoEntidad="trabajadores"
      tipoEntidadRelacionada="asignaturas"
    />
  );
};

export default TrabajadorAsignaturas; */
