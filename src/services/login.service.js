import { USER_SEED } from "../data/seed.js";

export const isLoggedIn = () => {
  return localStorage.getItem("isLoggedIn") === "true";
};

export const registerUser = (nombre, password) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const existingUser = users.find((user) => user.nombre === nombre);

  if (existingUser) {
    return { success: false, message: "El nombre de usuario ya está en uso." };
  }

  users.push({ nombre, password });
  localStorage.setItem("users", JSON.stringify(users));
  return { success: true, message: "Registro exitoso." };
};

export const loginUser = (nombre, password) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(
    (user) => user.nombre === nombre && user.password === password,
  );

  if (user) {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("currentUser", nombre);
    return { success: true, message: "Inicio de sesión exitoso." };
  }
  return {
    success: false,
    message: "Nombre de usuario o contraseña incorrectos.",
  };
};

export const getLoggedUser = () =>{
  if (!isLoggedIn()) return null
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const currentUser = localStorage.getItem("currentUser");
  return users.find((user) => user.nombre === currentUser);
}

export const logoutUser = () => {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("currentUser");
  window.location.href = "#home"; // Redirige al inicio de sesión
};

export const initUserDatabase = () => {
    const users = JSON.parse(localStorage.getItem("users"));

    if (!users || users.length === 0) {
        console.log("No se encontraron usuarios. Cargando usuario inicial...");
        
        // Creamos un array con el usuario semilla
        const initialUsers = [USER_SEED];
        
        localStorage.setItem("users", JSON.stringify(initialUsers));
        
        // Opcionalmente, podemos iniciar sesión automáticamente con este usuario
        localStorage.setItem("currentUser", USER_SEED.nombre);
        
        return true; // Se cargó la semilla
    }
    
    return false; // Ya había usuarios
};
