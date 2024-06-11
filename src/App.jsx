import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <>
            <Header></Header>
            <main>
                <Routes>
                    <Route path='/' element={<Home></Home>}></Route>
                    
                    <Route path='/*' element={<Navigate to='/'></Navigate>}></Route>
                </Routes>
            </main>
            <Footer></Footer>
        </>
    );
}

export default App;
