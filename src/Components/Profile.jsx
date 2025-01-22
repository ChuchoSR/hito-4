import React from 'react'

const Profile = () => {

    const email = 'usuario@ejemplo.com';

    const handleLogout = () => {
        alert('Sesión finalizada');
    }

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
            <h1>Perfil de Usuario</h1>
            <p>Email: {email}</p>
            <button onClick={handleLogout} style={{ padding: "10px 20px", marginTop: "10px", cursor: "pointer" }}>
                Cerrar Sesión
            </button>
        </div>
  )
}

export default Profile