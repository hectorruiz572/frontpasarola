import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { cargarEventos } from "../services/api";
import "./ListaEventos.css"; // Asegúrate de importar el archivo CSS

const ListaEventos = () => {
  const navigate = useNavigate();
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    cargarEventos().then(setEventos);
    console.log(eventos);
  }, []);

  return (
    <div className="event-list-container">
      <h2 className="event-list-heading">Lista de Eventos</h2>
      <ul className="event-list">
        {eventos.map((evento) => (
          <li key={evento.id} className="event-item">
            <span className="event-name">{evento.name}</span>
            <button
              className="event-button"
              onClick={() => navigate(`/eventos/${evento.id}`)}
            >
              Ir
            </button>
          </li>
        ))}
      </ul>

      <button
        className="add-event-button"
        onClick={() => navigate("/nuevoEvento")}
      >
        +
      </button>
    </div>
  );
};

export default ListaEventos;
