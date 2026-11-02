export const enlaceTarjeta = (curso, datosUsuario) => {
    const enlaceTarjeta = document.createElement("a");
    enlaceTarjeta.href = `#unidades${codCurso}`;
    enlaceTarjeta.classList.add("enlace-tarjeta");
    enlaceTarjeta.innerHTML = `
    <article class="tarjeta-curso">
        <input type="checkbox" name="${codCurso}" id="${codCurso}" class="disable">
        <label for="${codCurso}" class="btn btn-rojo btn-chk">-</label>
        <img src="${icono}" alt="${iconoDescripcion}" class="img-bandera">
        <div class="info-curso">
            <h3>${nombre}</h3>
            <p><strong>Progreso:</strong> ${progresoUsuario}%</p>
            <p><strong>Nivel:</strong> ${nivel} (${codigoNivel})</p>
        </div>
    </article>
    `;
    return enlaceTarjeta;
}