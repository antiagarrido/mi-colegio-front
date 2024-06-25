import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const FetchData = ({ apiPath, render }) => {
  const [data, setData] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiPath);
        setData(response.data);
      } catch (error) {
        console.error(`Error obteniendo datos de ${apiPath}`, error);
        setError(error);
      } finally {
        setCargando(false);
      }
    };

    fetchData();
  }, [apiPath]);

  if (cargando) return <p>Cargando...</p>;
  if (error) return <p>Error cargando los datos.</p>;

  return render(data);
};

export default FetchData;
