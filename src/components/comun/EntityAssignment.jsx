/* import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from '../comun/list/DataTable';

// Función para obtener el singular de las entidades
const getSingular = (tipoEntidad) => {
  switch (tipoEntidad) {
    case 'trabajadores':
      return 'trabajador';
    case 'roles':
      return 'rol';
    default:
      return tipoEntidad.slice(0, -1);
  }
};

const EntityAssignment = ({
  entidadId,
  tipoEntidad,
  tipoEntidadRelacionada,
}) => {
  const [reload, setReload] = useState(false);
  const [elementosDisponibles, setElementosDisponibles] = useState([]);
  const [elementosAsignados, setElementosAsignados] = useState([]);

  useEffect(() => {
    axios
      .get(`api/${tipoEntidadRelacionada}`)
      .then((response) => {
        setElementosDisponibles(response.data || []);
      })
      .catch(() => {
        setElementosDisponibles([]);
      });
  }, [tipoEntidadRelacionada]);

  useEffect(() => {
    axios
      .get(`api/${tipoEntidad}/${entidadId}/${tipoEntidadRelacionada}`)
      .then((response) => {
        setElementosAsignados(response.data || []);
      })
      .catch(() => {
        setElementosAsignados([]);
      });
  }, [7, tipoEntidad, entidadId, tipoEntidadRelacionada, reload]);

  const asignarElemento = (elementoId) => {
    axios
      .post(`api/${tipoEntidad}/${tipoEntidadRelacionada}`, {
        [`${getSingular(tipoEntidad)}_id`]: entidadId,
        [`${getSingular(tipoEntidadRelacionada)}_id`]: elementoId,
      })
      .then(() => {
        setReload(!reload);
      });
  };

  const desasignarElemento = (elementoId) => {
    if (
      window.confirm(
        `¿Quieres desasignar este ${getSingular(
          tipoEntidadRelacionada
        )} de este ${getSingular(tipoEntidad)}?`
      )
    ) {
      axios
        .delete(`api/${tipoEntidad}/${tipoEntidadRelacionada}`, {
          [`${getSingular(tipoEntidad)}_id`]: entidadId,
          [`${getSingular(tipoEntidadRelacionada)}_id`]: elementoId,
        })
        .then(() => {
          setReload(!reload);
        });
    }
  };

  const columnas = [
    { Header: 'ID', accessor: 'id' },
    { Header: 'Nombre', accessor: 'nombre' },
  ];

  const accionesAsignadas = [null, null, null, desasignarElemento, null];
  const accionesDisponibles = [null, null, asignarElemento, null, null];

  let elementosNoAsignados = [];

  elementosNoAsignados = elementosDisponibles.filter(
    (item) =>
      !elementosAsignados.some((assignedItem) => assignedItem.id === item.id)
  );

  return (
    <>
      <div className="container">
        <div className="details">
          <h3>{`Asignados al ${getSingular(tipoEntidad)}`}</h3>
          <DataTable
            columns={columnas}
            data={elementosAsignados}
            actions={accionesAsignadas}
          />
        </div>

        <div className="details">
          <h3>{`Disponibles para asignar al ${getSingular(tipoEntidad)}`}</h3>
          <DataTable
            columns={columnas}
            data={elementosNoAsignados}
            actions={accionesDisponibles}
          />
        </div>
      </div>
    </>
  );
};

export default EntityAssignment;
 */