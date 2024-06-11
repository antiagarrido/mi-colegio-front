import React, { useEffect, useState } from "react";
import axios from "axios";

export const AlumnosList = () => {
    const [alumnos, setAlumnos] = useState([]);

    useEffect(() => {
        axios
            .get("/api/alumnos")
            .then((response) => {
                setAlumnos(response.data);
            })
            .catch((error) => {
                console.error("Error obteniendo alumnos");
            });
    }, []);

    return (
        <>
            <h3>Lista de alumnos</h3>
            <ul>
                {alumnos.map((alumno) => (
                    <li key={alumno.id}>{alumno.nombre}</li>
                ))}
            </ul>
        </>
    );
};

export default AlumnosList;
