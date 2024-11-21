import { useState } from "react";

const NuevoEvento = () => {
  const [evento, setEvento] = useState({});

  const crearEvento = () => {
    //hay que poner el codigo de creacion de evento
    console.log(evento);
  };

  return (
    <div>
      <h2>Nuevo Evento</h2>
      <label>Nombre del Evento</label>
      <input
        type="text"
        placeholder="Nombre del Evento"
        onChange={(e) => setEvento({ ...evento, name: e.target.value })}
      />
      <label>Fecha</label>
      <input
        type="date"
        placeholder="Fecha"
        onChange={(e) => setEvento({ ...evento, date: e.target.value })}
      />
      <label>Lugar del Evento</label>
      <input
        type="text"
        placeholder="Lugar del Evento"
        onChange={(e) => setEvento({ ...evento, location: e.target.value })}
      />
      <button onClick={crearEvento}>Crear Evento</button>
    </div>
  );
};

export default NuevoEvento;
