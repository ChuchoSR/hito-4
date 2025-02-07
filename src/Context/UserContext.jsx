import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null); // Estado para el token JWT
  const [email, setEmail] = useState(null); // Estado para el email del usuario

  // Método para hacer login
  const login = async (email, password) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) throw new Error("Error en el login");

      const data = await response.json();
      setToken(data.token); // Guardamos el token
      setEmail(data.email); // Guardamos el email
      localStorage.setItem("token", data.token); // Opcional: Guardar el token en localStorage
    } catch (error) {
      console.error("Error en el login:", error);
      throw error; // Lanzamos el error para manejarlo en el componente
    }
  };

  // Método para hacer registro
  const register = async (email, password) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) throw new Error("Error en el registro");

      const data = await response.json();
      setToken(data.token); // Guardamos el token
      setEmail(data.email); // Guardamos el email
      localStorage.setItem("token", data.token); // Opcional: Guardar el token en localStorage
    } catch (error) {
      console.error("Error en el registro:", error);
      throw error; // Lanzamos el error para manejarlo en el componente
    }
  };

  // Método para hacer logout
  const logout = () => {
    setToken(null); // Eliminamos el token
    setEmail(null); // Eliminamos el email
    localStorage.removeItem("token"); // Opcional: Eliminar el token del localStorage
  };

  // Método para obtener el perfil del usuario
  const getProfile = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`, // Enviamos el token en el header
        },
      });

      if (!response.ok) throw new Error("Error al obtener el perfil");

      const data = await response.json();
      return data; // Devolvemos los datos del perfil
    } catch (error) {
      console.error("Error al obtener el perfil:", error);
      throw error; // Lanzamos el error para manejarlo en el componente
    }
  };

  return (
    <UserContext.Provider
      value={{
        token,
        email,
        login,
        register,
        logout,
        getProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};