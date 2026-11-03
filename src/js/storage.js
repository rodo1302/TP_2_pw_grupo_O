// Función para modificar un valor dentro de un objeto en localStorage
export function actualizarUnUsuario(usuario) {
    const usuarios = obtenerItem('users');
    const usuarioIndex = usuarios.findIndex((u) => u.id === usuario.id);
    if (usuarioIndex !== -1) {
        usuarios[usuarioIndex] = usuario;
    }
    localStorage.setItem('users', JSON.stringify(usuarios));
}

export function obtenerItem(clave){
    const valor = localStorage.getItem(clave);
    return JSON.parse(valor) || valor
}