import { getLoggedUser } from "../../services/login.service.js";
import { actualizarUnUsuario } from "../storage.js";
import { capitalizar } from "../utils/capitalizar.js";

export const enlaceTarjeta = (curso, usuario) => {
    let nivel = "no iniciado"
    let progresoUsuario = 0
    let habilitado = null;
    let progreso = null;
    const { codCurso, niveles, icono, nombre } = curso
    const cantidadUnidades = Object.values(niveles).reduce(
        (acumulador, unidadesDelNivel) => acumulador + unidadesDelNivel.length,
        0
    )

    const enlaceTarjeta = document.createElement("a");


    // Verificamos si el usuario está logueado y si tiene progreso para ese curs
    if (usuario &&
        usuario.progreso.hasOwnProperty(codCurso) &&
        usuario.progreso[codCurso].hasOwnProperty('completados') &&
        usuario.progreso[codCurso].completados.length > 0
    ) {
        progreso = usuario.progreso[codCurso]
        progresoUsuario = Math.round((
            cantidadUnidades / progreso.completados.length
        ) * 100)
        nivel = progreso.nivelActual
    }

    enlaceTarjeta.href = `#unidades${capitalizar(codCurso)}`;
    enlaceTarjeta.classList.add("enlace-tarjeta");
    enlaceTarjeta.innerHTML = `
    <article class="tarjeta-curso">
        <input type="checkbox" name="${codCurso}" id="${codCurso}" class="disable" >
        <label for="${codCurso}" class="btn btn-rojo btn-chk">-</label>
        <img src="${icono}" alt="${"icono" + codCurso}" class="img-bandera">
        <div class="info-curso">
            <h3>${nombre}</h3>
            <p><strong>Progreso:</strong> ${progresoUsuario}%</p>
            <p><strong>Nivel:</strong> ${capitalizar(nivel)}</p>
        </div>
    </article>
    `;

    const inputCheck = enlaceTarjeta.querySelector(`#${codCurso}`);
    
    if (progreso && !progreso.habilitado) {
        //está deshabilitado => checked = true
        inputCheck.setAttribute("checked", "true");
    } else if (progreso && progreso.habilitado) {
        // está habilitado => checked = false
        inputCheck.setAttribute("checked", "false");
    } 
   
    //logica de checked para habilitar y deshabilitar cursos con logica directa para evitar desincronizaciones
    enlaceTarjeta.addEventListener('change', (e) => {  
        if (e.target.checked) {
            usuario.progreso[codCurso].habilitado = false
        } else {
            usuario.progreso[codCurso].habilitado = true
        }
        //actualización de localstorage
        actualizarUnUsuario(usuario)
    })

    return enlaceTarjeta;
}