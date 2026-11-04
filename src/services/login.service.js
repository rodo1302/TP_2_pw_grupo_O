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

export const getLoggedUser = () => {
  if (!isLoggedIn()) return null;
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const currentUser = localStorage.getItem("currentUser");
  return users.find((user) => user.nombre === currentUser);
};

export const logoutUser = () => {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("currentUser");
  window.location.href = "#home"; // Redirige al inicio de sesión
};

import { crearProgresoInicial } from "./storage.service.js";

// 🛠️ CORRECCIÓN: Centraliza la lectura de usuarios para evitar excepciones de JSON corrupto y validar la estructura antes de usarla.
const leerUsuariosGuardados = () => {
  try {
    const usuariosGuardados = localStorage.getItem("usuarios");

    if (usuariosGuardados === null) {
      return { usuarios: [], error: null };
    }

    const usuarios = JSON.parse(usuariosGuardados);
    if (!Array.isArray(usuarios)) {
      throw new TypeError("El formato de usuarios guardado no es válido.");
    }

    if (
      usuarios.some(
        (usuario) =>
          !usuario ||
          typeof usuario.nombre !== "string" ||
          typeof usuario.contrasenia !== "string",
      )
    ) {
      throw new TypeError("El formato de usuarios guardado no es válido.");
    }

    return { usuarios, error: null };
  } catch (error) {
    console.error("No se pudieron leer los usuarios guardados.", error);
    return { usuarios: null, error };
  }
};

export const obtenerUsuarios = () => {
  const { usuarios, error } = leerUsuariosGuardados();
  return error ? null : usuarios;
};

export const obtenerUsuarioActual = () => {
  const { usuarios, error } = leerUsuariosGuardados();
  if (error || !usuarios) {
    return null;
  }
  const nombreUsuarioActual = localStorage.getItem("usuarioActual");
  return (
    usuarios.find((usuario) => usuario.nombre === nombreUsuarioActual) || null
  );
};

export const actualizarUsuario = (nombre, cambios) => {
  const { usuarios, error } = leerUsuariosGuardados();
  if (error || !usuarios) {
    return {
      exitoso: false,
      mensaje: "No se pudieron leer las cuentas guardadas.",
    };
  }

  const usuario = usuarios.find(
    (usuarioGuardado) => usuarioGuardado.nombre === nombre,
  );
  if (!usuario) {
    return { exitoso: false, mensaje: "No se encontró la cuenta." };
  }

  Object.assign(usuario, cambios);
  try {
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  } catch (errorAlmacenamiento) {
    console.error(
      "No se pudieron guardar los cambios de la cuenta.",
      errorAlmacenamiento,
    );
    return {
      exitoso: false,
      mensaje: "No se pudieron guardar los cambios en este navegador.",
    };
  }

  return { exitoso: true, mensaje: "Cambios guardados con éxito." };
};

export const haySesionIniciada = () => {
  // 🛠️ CORRECCIÓN: La sesión solo es válida si el indicador y el usuario actual coinciden con una cuenta persistida.
  try {
    const { usuarios, error } = leerUsuariosGuardados();
    if (error || localStorage.getItem("sesionIniciada") !== "true") {
      return false;
    }

    const nombreUsuarioActual = localStorage.getItem("usuarioActual");

    return (
      Boolean(nombreUsuarioActual) &&
      Array.isArray(usuarios) &&
      usuarios.some((usuario) => usuario.nombre === nombreUsuarioActual)
    );
  } catch (error) {
    console.error("No se pudo validar la sesión guardada.", error);
    return false;
  }
};

export const registrarUsuario = (nombre, contrasenia) => {
  // 🛠️ CORRECCIÓN: Normaliza el nombre en el servicio para evitar cuentas duplicadas por espacios laterales.
  const nombreUsuario = typeof nombre === "string" ? nombre.trim() : "";
  if (
    !nombreUsuario ||
    typeof contrasenia !== "string" ||
    contrasenia.length === 0
  ) {
    return { exitoso: false, mensaje: "Completa un usuario y una contraseña." };
  }

  const { usuarios, error } = leerUsuariosGuardados();
  if (error || !usuarios) {
    return {
      exitoso: false,
      mensaje:
        "No se pudieron leer las cuentas guardadas. Inténtalo más tarde.",
    };
  }

  const usuarioExistente = usuarios.find(
    (usuario) => usuario.nombre === nombreUsuario,
  );

  if (usuarioExistente) {
    return { exitoso: false, mensaje: "El nombre de usuario ya está en uso." };
  }

  usuarios.push({
    nombre: nombreUsuario,
    contrasenia,
    email: "",
    idiomaActual: "ingles",
    nivelActual: "inicial",
    leccionActual: { nivel: "inicial", leccionId: 1 },
    progresoCursos: crearProgresoInicial(),
    liga: "bronce",
    vidas: 3,
    erroresParaPerderVida: 0,
    xp: 0,
  });
  try {
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  } catch (error) {
    console.error("No se pudo guardar la nueva cuenta.", error);
    return {
      exitoso: false,
      mensaje: "No se pudo guardar la cuenta en este navegador.",
    };
  }

  return { exitoso: true, mensaje: "Registro exitoso." };
};

export const iniciarSesion = (nombre, contrasenia) => {
  // 🛠️ CORRECCIÓN: Aplica la misma normalización de usuario usada durante el registro.
  const nombreUsuario = typeof nombre === "string" ? nombre.trim() : "";
  if (
    !nombreUsuario ||
    typeof contrasenia !== "string" ||
    contrasenia.length === 0
  ) {
    return { exitoso: false, mensaje: "Ingresa tu usuario y contraseña." };
  }

  const { usuarios, error } = leerUsuariosGuardados();
  if (error || !usuarios) {
    return {
      exitoso: false,
      mensaje:
        "No se pudieron leer las cuentas guardadas. Inténtalo más tarde.",
    };
  }

  const usuario = usuarios.find(
    (usuarioGuardado) =>
      usuarioGuardado.nombre === nombreUsuario &&
      usuarioGuardado.contrasenia === contrasenia,
  );

  if (usuario) {
    // 🛠️ CORRECCIÓN: Restablece vidas y errores en cada nuevo inicio de sesión.
    const resultadoReinicio = actualizarUsuario(nombreUsuario, {
      vidas: 3,
      erroresParaPerderVida: 0,
    });
    if (!resultadoReinicio.exitoso) {
      return resultadoReinicio;
    }

    // 🛠️ CORRECCIÓN: Se persiste el mismo nombre normalizado que se valida en la sesión.
    try {
      localStorage.setItem("usuarioActual", nombreUsuario);
      localStorage.setItem("sesionIniciada", "true");
    } catch (error) {
      console.error("No se pudo guardar la sesión.", error);
      try {
        localStorage.removeItem("sesionIniciada");
        localStorage.removeItem("usuarioActual");
      } catch (errorLimpieza) {
        console.error(
          "No se pudo limpiar la sesión incompleta.",
          errorLimpieza,
        );
      }
      return {
        exitoso: false,
        mensaje: "No se pudo guardar la sesión en este navegador.",
      };
    }

    return { exitoso: true, mensaje: "Inicio de sesión exitoso." };
  }

  return {
    exitoso: false,
    mensaje: "Nombre de usuario o contraseña incorrectos.",
  };
};

export const cerrarSesion = () => {
  localStorage.removeItem("sesionIniciada");
  localStorage.removeItem("usuarioActual");
  // 🛠️ CORRECCIÓN: Usa el hash router en vez de asignar href y recargar la aplicación.
  window.location.hash = "#home";
};

export const recuperarContrasenia = (nombre, nuevaContrasenia) => {
  const nombreUsuario = typeof nombre === "string" ? nombre.trim() : "";
  if (
    !nombreUsuario ||
    typeof nuevaContrasenia !== "string" ||
    !nuevaContrasenia
  ) {
    return { exitoso: false, mensaje: "Completa el usuario y la contraseña." };
  }

  const usuarios = obtenerUsuarios();
  if (!usuarios) {
    return {
      exitoso: false,
      mensaje: "No se pudieron leer las cuentas guardadas.",
    };
  }

  const usuario = usuarios.find(
    (usuarioGuardado) => usuarioGuardado.nombre === nombreUsuario,
  );
  if (!usuario) {
    return { exitoso: false, mensaje: "El usuario no existe." };
  }

  const resultado = actualizarUsuario(nombreUsuario, {
    contrasenia: nuevaContrasenia,
  });
  return resultado.exitoso
    ? { exitoso: true, mensaje: "¡Contraseña actualizada con éxito!" }
    : resultado;
};
