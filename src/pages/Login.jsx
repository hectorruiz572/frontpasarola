import { useState } from "react";
import { login } from "../services/api";
import Register from "./Register";
import { useUserContext } from "../providers/UserProvider";
import "./Login.css"; // Importamos el archivo de estilo

const Login = () => {
  const [usr, setUsr] = useState({ username: "", password: "" });
  const { setUser } = useUserContext();
  const [isRegister, setIsRegister] = useState(false);

  const redirectRegister = () => {
    setIsRegister(true);
  };

  if (isRegister) {
    return <Register />;
  }

  const handleLogin = async () => {
    // Llamamos a la función login y esperamos la respuesta
    const user = await login({
      username: usr.username,
      password: usr.password,
    });

    if (user && user.id) {
      setUser({ id: user.id });
    } else {
      console.error("Error en el login o ID no recibido");
    }
  };

  return (
    <div className="login-container">
      <h2>Iniciar sesión</h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="Usuario"
          onChange={(e) => setUsr({ ...usr, username: e.target.value })}
          className="input-field"
        />
        <input
          type="password"
          placeholder="Contraseña"
          onChange={(e) => setUsr({ ...usr, password: e.target.value })}
          className="input-field"
        />
      </div>
      <button onClick={() => handleLogin(usr)} className="login-button">
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
