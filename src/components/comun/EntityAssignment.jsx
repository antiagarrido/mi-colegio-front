import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from '../comun/list/DataTable';
import { useNavigate } from 'react-router-dom';
import BackButton from './buttons/BackButton';

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
  const [elementosNoAsignados, setElementosNoAsignados] = useState([]);
  const [isDataReady, setIsDataReady] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [disponiblesResponse, asignadosResponse] = await Promise.all([
          axios.get(`/api/${tipoEntidadRelacionada}`),
          axios.get(
            `/api/${tipoEntidad}/${entidadId}/${tipoEntidadRelacionada}`
          ),
        ]);

        const disponibles = disponiblesResponse.data || [];
        const asignados = asignadosResponse.data || [];

        setElementosDisponibles(disponibles);
        setElementosAsignados(asignados);

        const noAsignados = disponibles.filter(
          (item) =>
            !asignados.some((assignedItem) => assignedItem.id === item.id)
        );
        setElementosNoAsignados(noAsignados);
        setIsDataReady(true);
      } catch {
        setElementosDisponibles([]);
        setElementosAsignados([]);
        setElementosNoAsignados([]);
        setIsDataReady(true);
      }
    };

    fetchData();
  }, [tipoEntidad, entidadId, tipoEntidadRelacionada, reload]);

  const asignarElemento = async (elementoId) => {
    try {
      await axios.post(`/api/${tipoEntidad}/${tipoEntidadRelacionada}`, {
        [`${getSingular(tipoEntidad)}_id`]: entidadId,
        [`${getSingular(tipoEntidadRelacionada)}_id`]: elementoId,
      });
      setReload(!reload);
    } catch (error) {
      console.error('Error al asignar el elemento', error);
    }
  };

  const desasignarElemento = async (elementoId) => {
    if (
      window.confirm(
        `¿Quieres desasignar este ${getSingular(
          tipoEntidadRelacionada
        )} de este ${getSingular(tipoEntidad)}?`
      )
    ) {
      try {
        await axios.delete(`/api/${tipoEntidad}/${tipoEntidadRelacionada}`, {
          data: {
            [`${getSingular(tipoEntidad)}_id`]: entidadId,
            [`${getSingular(tipoEntidadRelacionada)}_id`]: elementoId,
          },
        });
        setReload(!reload);
      } catch (error) {
        console.error('Error al desasignar el elemento', error);
      }
    }
  };

  const columnas = [
    { Header: 'ID', accessor: 'id' },
    { Header: 'Nombre', accessor: 'nombre' },
    { Header: 'Curso', accessor: 'curso' },
  ];

  const navigate = useNavigate();
  const verDetalleAsignado = (elementoId) => {
    navigate(
      `/${tipoEntidad}/${entidadId}/${tipoEntidadRelacionada}/${elementoId}`
    );
  };

  const accionesAsignadas = [null, null, null, desasignarElemento, null];
  const accionesDisponibles = [null, null, asignarElemento, null, null];

  if (!isDataReady) {
    return <div>Loading...</div>;
  }

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
          <BackButton />
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
