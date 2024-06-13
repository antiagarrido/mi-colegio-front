import { useState, Navigate } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import AlumnosList from './components/alumnos/AlumnosList';
import AlumnoDetail from './components/alumnos/AlumnoDetail';
import AlumnoForm from './components/alumnos/AlumnoForm';
import AsignaturasList from './components/asignaturas/AsignaturasList';
import TrabajadoresList from './components/trabajadores/TrabajadoresList';
import AsignaturaDetail from './components/asignaturas/AsignaturaDetail';
import TrabajadorDetail from './components/trabajadores/TrabajadorDetail';
import { AsignaturaForm } from './components/asignaturas/AsignaturaForm';

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/alumnos" element={<AlumnosList></AlumnosList>}></Route>
          <Route
            path="/alumnos/:id"
            element={<AlumnoDetail></AlumnoDetail>}
          ></Route>
          <Route path="/alumnos/new" element={<AlumnoForm />} />
          <Route path="/alumnos/edit/:id" element={<AlumnoForm />} />

          <Route
            path="/asignaturas"
            element={<AsignaturasList></AsignaturasList>}
          ></Route>
          <Route
            path="/asignaturas/:id"
            element={<AsignaturaDetail></AsignaturaDetail>}
          ></Route>
          <Route
            path="/asignaturas/new"
            element={<AsignaturaForm></AsignaturaForm>}
          ></Route>
          <Route
            path="/asignaturas/edit/:id"
            element={<AsignaturaForm></AsignaturaForm>}
          ></Route>
          <Route
            path="/trabajadores"
            element={<TrabajadoresList></TrabajadoresList>}
          ></Route>
          <Route
            path="/trabajadores/:id"
            element={<TrabajadorDetail></TrabajadorDetail>}
          ></Route>
          <Route
            path="/trabajadores/new"
            element={<TrabajadorDetail></TrabajadorDetail>}
          ></Route>
          <Route
            path="/trabajadores/edit/:id"
            element={<TrabajadorDetail></TrabajadorDetail>}
          ></Route>

          {<Route path="/*" element={<Navigate to="/"></Navigate>}></Route>}
        </Routes>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
