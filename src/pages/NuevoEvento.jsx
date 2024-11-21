import { useState } from "react";
import { createEvent } from "../services/api";
import { useNavigate } from "react-router-dom";
import "./NuevoEvento.css"; // Asegúrate de importar el archivo CSS

const NuevoEvento = () => {
  const [evento, setEvento] = useState({});
  const navigate = useNavigate();

  const crearEvento = () => {
    createEvent(evento).then(navigate("/eventos"));
  };

  return (
    <div className="nuevo-evento-container">
      <h2 className="titulo">Nuevo Evento</h2>
      <div className="form-container">
        <label className="form-label">Nombre del Evento</label>
        <input
          className="form-input"
          type="text"
          placeholder="Nombre del Evento"
          onChange={(e) => setEvento({ ...evento, name: e.target.value })}
        />

        <label className="form-label">Fecha</label>
        <input
          className="form-input"
          type="date"
          onChange={(e) => setEvento({ ...evento, date: e.target.value })}
        />

        <label className="form-label">Lugar del Evento</label>
        <input
          className="form-input"
          type="text"
          placeholder="Lugar del Evento"
          onChange={(e) => setEvento({ ...evento, location: e.target.value })}
        />

        <button className="submit-button" onClick={crearEvento}>
          Crear Evento
        </button>
      </div>
    </div>
  );
};

export default NuevoEvento;
