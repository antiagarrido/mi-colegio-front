import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const FetchData = ({ apiPath, render }) => {
  const [data, setData] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(apiPath)
      .then((response) => {
        setData(response.data);
        setCargando(false);
      })
      .catch((error) => {
        console.error(`Error obteniendo datos de ${apiPath}`, error);
        setError(error);
        setCargando(false);
      });
  }, [apiPath]);

  if (cargando) return <p>Cargando...</p>;
  if (error) return <p>Error cargando los datos.</p>;

  return render(data);
};
export default FetchData;
