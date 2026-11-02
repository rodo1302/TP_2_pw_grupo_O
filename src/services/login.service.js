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
  console.log("Usuarios registrados:", users[0]);
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

export const logoutUser = () => {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("currentUser");
  window.location.href = "#home"; // Redirige al inicio de sesión
};
