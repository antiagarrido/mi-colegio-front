import { useState, Navigate } from 'react';
import './App.css';
import Header from './components/comun/Header';
import Footer from './components/comun/Footer';
import Home from './components/comun/Home';
import { Route, Routes } from 'react-router-dom';
import AlumnosList from './components/alumnos/AlumnosList';
import AlumnoDetail from './components/alumnos/AlumnoDetail';
import AlumnoForm from './components/alumnos/AlumnoForm';
import AsignaturasList from './components/asignaturas/AsignaturasList';
import TrabajadoresList from './components/trabajadores/TrabajadoresList';
import AsignaturaDetail from './components/asignaturas/AsignaturaDetail';
import TrabajadorDetail from './components/trabajadores/TrabajadorDetail';
import TrabajadoresForm from './components/trabajadores/TrabajadoresForm';
import TrabajadoresAsignaturas from './components/trabajadores/TrabajadorAsignaturas';
import { AsignaturaForm } from './components/asignaturas/AsignaturaForm';
import RolesList from './components/roles/RolesList';
import RolDetail from './components/roles/RolDetail';
import RolForm from './components/roles/RolForm';
import AlumnoAsignaturas from './components/alumnos/AlumnoAsignaturas';
import AlumnoAsignaturaDetail from './components/alumnos/AlumnoAsignaturaDetail';
import AlumnoNotas from './components/notas/AlumnoNotas';

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
            path="/alumnos/:id/asignaturas"
            element={<AlumnoAsignaturas />}
          />

          <Route
            path="/alumnos/:id/asignaturas/:asignaturaId"
            element={<AlumnoAsignaturaDetail />}
          />

          <Route path="/alumnos/:id/notas" element={<AlumnoNotas />} />

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
            element={<TrabajadoresForm></TrabajadoresForm>}
          ></Route>
          <Route
            path="/trabajadores/edit/:id"
            element={<TrabajadoresForm></TrabajadoresForm>}
          ></Route>
          <Route
            path="/trabajadores/:id/asignaturas"
            element={<TrabajadoresAsignaturas />}
          />

          <Route path="/roles" element={<RolesList></RolesList>}></Route>
          <Route path="/roles/:id" element={<RolDetail></RolDetail>}></Route>
          <Route path="/roles/new" element={<RolForm></RolForm>}></Route>
          <Route path="/roles/edit/:id" element={<RolForm></RolForm>}></Route>

          {<Route path="/*" element={<Navigate to="/"></Navigate>}></Route>}
        </Routes>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
