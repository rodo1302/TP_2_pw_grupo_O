// models/curso.model.js

export class Pregunta {
  constructor({ id, pregunta, opciones, respuestaCorrecta }) {
    this.id = id;
    this.pregunta = pregunta;
    this.opciones = opciones;
    this.respuestaCorrecta = respuestaCorrecta;
  }

  verificarRespuesta(opcionSeleccionada) {
    return opcionSeleccionada === this.respuestaCorrecta;
  }
}

export class Leccion {
  constructor({ id, titulo, preguntas = [] }) {
    this.id = id;
    this.titulo = titulo;
    // Mapeamos las preguntas a instancias de la clase Pregunta
    this.preguntas = preguntas.map((p) => new Pregunta(p));
  }
}

export class Curso {
  constructor(clave, { nombre, icono, niveles = {} }) {
    this.clave = clave; // Ej: "ingles", "aleman", "chino", etc.
    this.nombre = nombre;
    this.icono = icono;

    // Transformamos los niveles y sus arrays de lecciones en estructuras orientadas a objetos
    this.niveles = {};
    for (const [nombreNivel, leccionesArray] of Object.entries(niveles)) {
      this.niveles[nombreNivel] = leccionesArray.map((l) => new Leccion(l));
    }
  }

  // Método de utilidad para obtener una lección específica
  obtenerLeccion(nivel, leccionId) {
    const leccionesNivel = this.niveles[nivel];
    if (!leccionesNivel) return null;
    return leccionesNivel.find((l) => l.id === Number(leccionId)) || null;
  }
}
