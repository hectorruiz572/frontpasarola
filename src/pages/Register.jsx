import { useState } from "react";
import Login from "./Login";
import "./Register.css";
import { registerUser } from "../services/api";

const Register = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const registerController = () => {
    if (user.password !== user.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setError("");
    console.log(user);
    registerUser(user).then(redirectLogin);
  };

  const redirectLogin = () => {
    setIsLogin(true);
  };

  if (isLogin) {
    return <Login />;
  }

  return (
    <div className="register-container">
      <h2 className="register-heading">Register</h2>
      <div className="form-group">
        <label className="label">Username</label>
        <input
          type="text"
          placeholder="Enter your username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          className="input"
        />
      </div>
      <div className="form-group">
        <label className="label">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          className="input"
        />
      </div>
      <div className="form-group">
        <label className="label">Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm your password"
          value={user.confirmPassword}
          onChange={(e) =>
            setUser({ ...user, confirmPassword: e.target.value })
          }
          className="input"
        />
      </div>
      {error && <p className="error">{error}</p>}
      <button onClick={registerController} className="button">
        Register
      </button>
      <div className="login-link">
        <p>
          Already have an account?{" "}
          <span onClick={redirectLogin} className="link-text">
            Login here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
