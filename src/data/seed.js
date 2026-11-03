export const USER_SEED = {
    id: "user_default_01",
    nombre: "estudiante1",
    password: "123",
    email: "invitado@lingo.com",
    // Cargamos el progreso inicial para probar el componente enlaceTarjeta
    progreso: {
        "ingles": {
            completados: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            nivelActual: "Básico",
            habilitado: true },
        "chino": {
            completados: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
            nivelActual: "Básico",
            habilitado: false },
        "aleman": {
            completados: [],
            nivelActual: "No iniciado",
            habilitado: false }
    },
    xpTotal: 150,
    racha: 2,
    liga: "bronce"
};