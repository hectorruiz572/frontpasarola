import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../providers/UserProvider";
import "./Perfil.css";  // Asegúrate de tener este archivo CSS correctamente vinculado.

const Perfil = () => {
  const { user, setUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    age: "",
    interests: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");  // Manejo de errores.

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        lastName: user.lastName || "",
        age: user.age || "",
        interests: user.interests || "",
      });
      setLoading(false);
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación del formulario.
    if (!formData.name || !formData.lastName || !formData.age || !formData.interests) {
      setError("Todos los campos son obligatorios");
      return;
    }

    if (isNaN(formData.age) || formData.age <= 0) {
      setError("La edad debe ser un número válido y mayor a 0");
      return;
    }

    setError("");  // Limpiar error si todo está bien.

    try {
      const response = await fetch(`/api/users/${user.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const updatedUser = await response.json();
        setUser(updatedUser);
        alert("Perfil actualizado correctamente");
      } else {
        const errorText = await response.text();
        console.error("Error al actualizar el perfil:", errorText);
        alert("Hubo un error al actualizar el perfil");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      alert("No se pudo conectar con el servidor");
    }
  };

  if (loading) {
    return <p>Cargando datos del usuario...</p>;
  }

  return (
    <div className="register-container"> {/* Usar la clase del registro */}
      <h2 className="register-heading">Editar Perfil</h2> {/* Título similar */}
      {error && <p className="error">{error}</p>} {/* Mostrar errores */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="label">Nombre:</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Ingresa tu nombre"
            className="input"
            required
          />
        </div>

        <div className="form-group">
          <label className="label">Apellidos:</label>
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Ingresa tus apellidos"
            className="input"
            required
          />
        </div>

        <div className="form-group">
          <label className="label">Edad:</label>
          <input
            name="age"
            type="number"
            value={formData.age}
            onChange={handleChange}
            placeholder="Ingresa tu edad"
            className="input"
            required
          />
        </div>

        <div className="form-group">
          <label className="label">Intereses:</label>
          <textarea
            name="interests"
            value={formData.interests}
            onChange={handleChange}
            placeholder="Ingresa tus intereses"
            className="input"
            required
          ></textarea>
        </div>

        <button type="submit" className="button">Guardar cambios</button>
      </form>
    </div>
  );
};

export default Perfil;
