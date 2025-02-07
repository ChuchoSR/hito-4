import React, { useContext } from "react";
import { UserContext } from "../Context/UserContext"; 
const Profile = () => {
  const { email, logout } = useContext(UserContext); 
  const handleLogout = () => {
    logout(); 
    alert("Sesión finalizada");
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Perfil de Usuario</h1>
      <p>Email: {email}</p>
      <button
        onClick={handleLogout}
        style={{ padding: "10px 20px", marginTop: "10px", cursor: "pointer" }}
      >
        Cerrar Sesión
      </button>
    </div>
  );
};

export default Profile;