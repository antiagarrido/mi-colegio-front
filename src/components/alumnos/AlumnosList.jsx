import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AlumnosList = () => {
    const [alumnos, setAlumnos] = useState([]);
    const navigate = useNavigate();

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

    const handleDetailClick = (id) => {
        navigate.push('alumnos/${id}');
    };

    return (
        <>
            <h3>Lista de alumnos</h3>

            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Apellidos</th>
                        <th>Teléfono</th>
                        <th>DNI</th>
                    </tr>
                </thead>
                <tbody>
                    {alumnos.map((alumno) => (
                        <tr key={alumno.id}>
                            <td>{alumno.id}</td>
                            <td>{alumno.nombre}</td>
                            <td>{alumno.apellidos}</td>
                            <td>{alumno.telefono}</td>
                            <td>{alumno.dni}</td>
                            <td>
                                <button
                                    class="btn btn-info"
                                    onClick={() => handleDetailClick(alumno.id)}
                                >
                                    Detalles
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default AlumnosList;
