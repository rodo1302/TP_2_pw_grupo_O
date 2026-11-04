import { baseDatosInicial } from "../data/db.js";
import { Curso } from "../models/curso.model.js";
import { Usuario } from "../models/usuario.model.js";

export const datosCursos = {};
for (const [clave, datosCurso] of Object.entries(baseDatosInicial.cursos)) {
  datosCursos[clave] = new Curso(clave, datosCurso);
}

// 🛠️ CORRECCIÓN: Inicializa todos los cursos en su primera lección para que una cuenta nueva no herede progreso ficticio.
export const crearProgresoInicial = () =>
  Object.fromEntries(
    Object.keys(datosCursos).map((clave) => [
      clave,
      { nivel: "inicial", leccionId: 1, leccionesCompletadas: [] },
    ]),
  );

export const obtenerProgresoCurso = (usuario, cursoClave) => {
  const curso = datosCursos[cursoClave];
  if (!curso) {
    return {
      nivel: "inicial",
      leccionId: 1,
      leccionesCompletadas: [],
      totalLecciones: 0,
      leccionesFinalizadas: 0,
      porcentaje: 0,
    };
  }

  const lecciones = Object.entries(curso.niveles).flatMap(
    ([nivel, leccionesNivel]) =>
      leccionesNivel.map((leccion) => ({ nivel, leccionId: leccion.id })),
  );
  const progresoGuardado = usuario?.progresoCursos?.[cursoClave];
  const progresoAnterior =
    usuario?.idiomaActual === cursoClave ? usuario?.leccionActual : null;
  const nivel = progresoGuardado?.nivel || progresoAnterior?.nivel || "inicial";
  const leccionId = Number(
    progresoGuardado?.leccionId ?? progresoAnterior?.leccionId ?? 1,
  );
  const indiceActual = Math.max(
    0,
    lecciones.findIndex(
      (leccion) => leccion.nivel === nivel && leccion.leccionId === leccionId,
    ),
  );
  const leccionesCompletadas = Array.isArray(
    progresoGuardado?.leccionesCompletadas,
  )
    ? progresoGuardado.leccionesCompletadas
    : [];
  const completadas = new Set(leccionesCompletadas);
  const leccionesFinalizadas = lecciones.filter(
    (leccion, indice) =>
      indice < indiceActual ||
      completadas.has(`${leccion.nivel}:${leccion.leccionId}`),
  ).length;

  return {
    nivel,
    leccionId,
    leccionesCompletadas,
    totalLecciones: lecciones.length,
    leccionesFinalizadas,
    porcentaje: lecciones.length
      ? Math.round((leccionesFinalizadas / lecciones.length) * 100)
      : 0,
    indiceActual,
    lecciones,
  };
};

export const usuariosDePrueba = baseDatosInicial.usuariosDePrueba.map(
  (usuario) => new Usuario(usuario),
);

export const inicializarAlmacenamiento = () => {
  if (localStorage.getItem("usuarios") === null) {
    const usuariosIniciales = usuariosDePrueba.map((usuario) => ({
      ...usuario,
    }));
    localStorage.setItem("usuarios", JSON.stringify(usuariosIniciales));
  }
};
