import React, { useEffect, useState } from "react";
import axios from "axios";


const DataFetcher = ({ endpoint, render }) => {
  const [data, setData] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    axios
      .get(endpoint)
      .then((response) => {
        setData(response.data);
        setCargando(false);
      })
      .catch((error) => {
        console.error("Error obteniendo los detalles", error);
        setError(error);
        setCargando(false);
      });
  }, [endpoint]);


  if (cargando) return <p>Cargando...</p>;
  if (error) return <p>Error cargando los detalles.</p>;
  if (!data) return <p>No hay detalles disponibles.</p>;


  return render(data);
};


export default DataFetcher;
