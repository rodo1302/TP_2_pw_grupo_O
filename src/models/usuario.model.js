// models/usuario.model.js

export class Usuario {
  constructor({
    id,
    nombre,
    email = "",
    apodo,
    idiomaActual = "ingles",
    nivelActual = "inicial",
    leccionActual = { nivel: "inicial", leccionId: 1 },
    liga = "bronce",
    avatar = "./src/assets/img/logo-lingo.svg",
    xp = 0,
    vidas = 3,
    erroresParaPerderVida = 0,
    progresoCursos = {},
    contrasenia = "",
  }) {
    this.id = id;
    this.nombre = nombre;
    this.email = email;
    this.apodo = apodo;
    this.idiomaActual = idiomaActual;
    this.nivelActual = nivelActual;
    this.leccionActual = leccionActual;
    this.liga = liga;
    this.avatar = avatar;
    this.xp = xp;
    this.vidas = vidas;
    this.erroresParaPerderVida = erroresParaPerderVida;
    this.progresoCursos = progresoCursos;
    this.contrasenia = contrasenia; // Útil para el registro y login en localStorage
  }

  // Método para actualizar el progreso del usuario
  actualizarProgreso(nuevoNivel, nuevaLeccionId, xpGanada = 0) {
    this.nivelActual = nuevoNivel;
    this.leccionActual = { nivel: nuevoNivel, leccionId: nuevaLeccionId };
    this.xp += xpGanada;
  }

  // Convertir la instancia a un objeto plano (útil para guardar en localStorage)
  toJSON() {
    return {
      id: this.id,
      nombre: this.nombre,
      email: this.email,
      apodo: this.apodo,
      idiomaActual: this.idiomaActual,
      nivelActual: this.nivelActual,
      leccionActual: this.leccionActual,
      liga: this.liga,
      avatar: this.avatar,
      xp: this.xp,
      vidas: this.vidas,
      erroresParaPerderVida: this.erroresParaPerderVida,
      progresoCursos: this.progresoCursos,
      contrasenia: this.contrasenia,
    };
  }
}
