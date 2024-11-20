import { useState } from "react";
import { login } from "../services/api";
import Register from "./Register";
import "./Login.css"; // Importamos el archivo de estilo

const Login = () => {
  const [user, setUser] = useState({});
  const [isRegister, setIsRegister] = useState(false);

  const redirectRegister = () => {
    setIsRegister(true);
  };

  if (isRegister) {
    return <Register />;
  }

  return (
    <div className="login-container">
      <h2>Iniciar sesión</h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="Usuario"
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          className="input-field"
        />
        <input
          type="password"
          placeholder="Contraseña"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          className="input-field"
        />
      </div>
      <button onClick={() => login(user)} className="login-button">
        Iniciar sesión
      </button>

      <div className="register-link">
        <h4>
          No tienes cuenta?{" "}
          <span onClick={redirectRegister} className="link-text">
            Crear cuenta
          </span>
        </h4>
      </div>
    </div>
  );
};

export default Login;
