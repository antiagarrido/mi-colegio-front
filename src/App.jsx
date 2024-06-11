import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import AlumnosList from "./components/alumnos/AlumnosList";
import AlumnoDetail from "./components/alumnos/AlumnoDetail";
import AsignaturasList from "./components/asignaturas/AsignaturasList";
import TrabajadoresList from "./components/trabajadores/TrabajadoresList";

function App() {
    return (
        <>
            <Header></Header>
            <main>
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route
                        path="/alumnos"
                        element={<AlumnosList></AlumnosList>}
                    ></Route>
                    <Route
                        path="/alumnos/:id"
                        element={<AlumnoDetail></AlumnoDetail>}
                    ></Route>
                    <Route
                        path="/asignaturas"
                        element={<AsignaturasList></AsignaturasList>}
                    ></Route>
                    <Route
                        path="/trabajadores"
                        element={<TrabajadoresList></TrabajadoresList>}
                    ></Route>

                    {/* <Route
                        path="/*"
                        element={<Navigate to="/"></Navigate>}
                    ></Route> */}
                </Routes>
            </main>
            <Footer></Footer>
        </>
    );
}

export default App;
