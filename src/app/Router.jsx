import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ListaEventos from "../pages/ListaEventos";
import Perfil from "../pages/Perfil";
import LlevarCosas from "../pages/LlevarCosas";
import NuevoEvento from "../pages/NuevoEvento";
import InscripcionEvento from "../pages/InscripcionEvento";

const Router = () => {
  return (
    // Asegúrate de devolver el JSX con un return
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/eventos" element={<ListaEventos />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/llevarcosas" element={<LlevarCosas />} />
        <Route path="/nuevoevento" element={<NuevoEvento />} />
        <Route path="/inscripcion" element={<InscripcionEvento />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
