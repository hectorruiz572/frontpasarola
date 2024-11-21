import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ListaEventos = () => {
  const navigate = useNavigate();
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/eventos")
      .then((response) => response.json())
      .then((data) => setEventos(data));
  }, []);

  return (
    <div>
      <h2>Lista de Eventos</h2>
      {eventos.map((evento) => (
        <li key={evento.id} style={{ margin: "10px 0" }}>
          {evento.name}{" "}
          <button onClick={() => navigate(`/eventos/${evento.id}`)}>Ir</button>
        </li>
      ))}

      <button onClick={() => navigate("/nuevoEvento")}>+</button>
    </div>
  );
};

export default ListaEventos;
