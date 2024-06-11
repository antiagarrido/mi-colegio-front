import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { Route, Routes, Navigate } from "react-router-dom";
import AlumnosList from "./components/alumnos/AlumnosList";

function App() {
    return (
        <>
            <Header></Header>
            <main>
                <Routes>
                    <Route
                        path="/"
                        element={<Home></Home>}>
                        </Route>
                    <Route
                        path="/alumnos"
                        element={<AlumnosList></AlumnosList>}
                    ></Route>
                    alumnos
                    <Route
                        path="/*"
                        element={<Navigate to="/"></Navigate>}
                    ></Route>
                </Routes>
            </main>
            <Footer></Footer>
        </>
    );
}

export default App;
