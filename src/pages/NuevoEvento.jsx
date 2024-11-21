import { useEffect, useState } from "react";
import { createEvent } from "../services/api";
import { useNavigate } from "react-router-dom";
import "./NuevoEvento.css";
import { getUsers } from "../services/api";

const NuevoEvento = () => {
  const [evento, setEvento] = useState({});
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]); // Estado para los usuarios seleccionados
  const navigate = useNavigate();

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  // Función para manejar el cambio del checkbox de cada usuario
  const handleCheckboxChange = (userId) => {
    setSelectedUsers((prevSelectedUsers) => {
      if (prevSelectedUsers.includes(userId)) {
        // Si el usuario ya está seleccionado, lo quitamos
        return prevSelectedUsers.filter((id) => id !== userId);
      } else {
        // Si el usuario no está seleccionado, lo agregamos
        return [...prevSelectedUsers, userId];
      }
    });
  };

  const crearEvento = () => {
    const eventoConUsuarios = { ...evento, invitedUsers: selectedUsers }; // Añadimos los usuarios seleccionados
    createEvent(eventoConUsuarios).then(() => navigate("/eventos"));
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

        <ul className="event-list">
          <label>Invitar Usuarios</label>
          {users.map((user) => (
            <li key={user.id} className="event-item">
              <span className="event-name">{user.username}</span>
              <input
                type="checkbox"
                checked={selectedUsers.includes(user.id)} // Comprobamos si el usuario está seleccionado
                onChange={() => handleCheckboxChange(user.id)} // Cambiamos el estado del checkbox
              />
            </li>
          ))}
        </ul>

        <button className="submit-button" onClick={crearEvento}>
          Crear Evento
        </button>
      </div>
    </div>
  );
};

export default NuevoEvento;
