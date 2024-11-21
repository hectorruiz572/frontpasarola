import { Link } from "react-router-dom";
import "./Home.css"; // Importa el archivo de estilo

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-heading">Menú de navegación</h1>
      <ul className="menu-list">
        <li>
          <Link to="/eventos" className="menu-link">
            Lista Eventos
          </Link>
        </li>
        <li>
          <Link to="/perfil" className="menu-link">
            Perfil
          </Link>
        </li>
        <li>
          <Link to="/llevarcosas" className="menu-link">
            Cosas a llevar
          </Link>
        </li>
        <li>
          <Link to="/nuevoEvento" className="menu-link">
            Añadir Evento
          </Link>
        </li>
        <li>
          <Link to="/inscripcion" className="menu-link">
            Inscripción a Evento
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
