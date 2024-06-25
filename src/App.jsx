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
          <Route path="/" element={<Home />} />
          <Route path="/alumnos" element={<AlumnosList />} />
          <Route path="/alumnos/:id" element={<AlumnoDetail />} />
          <Route path="/alumnos/new" element={<AlumnoForm />} />
          <Route path="/alumnos/edit/:id" element={<AlumnoForm />} />
          <Route path="/alumnos/:id/asignaturas" element={<AlumnoAsignaturas />}/>
          <Route path="/alumnos/:id/asignaturas/:asignaturaId"element={<AlumnoAsignaturaDetail />}/>
          <Route path="/alumnos/:id/notas" element={<AlumnoNotas />} />

          <Route path="/asignaturas" element={<AsignaturasList />} />
          <Route path="/asignaturas/:id" element={<AsignaturaDetail />} />
          <Route path="/asignaturas/new" element={<AsignaturaForm />} />
          <Route path="/asignaturas/edit/:id" element={<AsignaturaForm />} />

          <Route path="/trabajadores" element={<TrabajadoresList />} />
          <Route path="/trabajadores/:id" element={<TrabajadorDetail />} />
          <Route path="/trabajadores/new" element={<TrabajadoresForm />} />
          <Route path="/trabajadores/edit/:id" element={<TrabajadoresForm />} />
          <Route path="/trabajadores/:id/asignaturas" element={<TrabajadoresAsignaturas />}/>

          <Route path="/roles" element={<RolesList />} />
          <Route path="/roles/:id" element={<RolDetail />} />
          <Route path="/roles/new" element={<RolForm />} />
          <Route path="/roles/edit/:id" element={<RolForm />} />

          {<Route path="/*" element={<Navigate to="/" />} />}
        </Routes>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
