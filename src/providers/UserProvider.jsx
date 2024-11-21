import React, { createContext, useState, useContext } from "react";

// Crear el contexto
const UserContext = createContext();

// Proveedor del contexto
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook personalizado para usar el contexto
const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext debe ser usado dentro de UserProvider");
  }
  return context;
};

// Exportaciones
export { UserProvider, UserContext, useUserContext };
