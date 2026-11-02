export const viewDashboard = () => {
    // Range.createContextualFragment convierte el string HTML a DocumentFragment
    const htmlString = `
    <section class="seccion-cursos">
      <h2>Mis Cursos</h2>
      <div class="contenedor-tarjetas">

        <a href="../unidades/ingles.html" class="enlace-tarjeta">
          <article class="tarjeta-curso">
            <input type="checkbox" name="ingles" id="ingles" class="disable">
            <label for="ingles" class="btn btn-rojo btn-chk">-</label>
            <img src="/src/assets/img/ingles.svg" alt="Brazón de Inglaterra" class="img-bandera">
            <div class="info-curso">
              <h3>Inglés</h3>
              <p><strong>Progreso:</strong> 45%</p>
              <p><strong>Nivel:</strong> Intermedio (B1)</p>
            </div>
          </article>
        </a>

        <a href="../unidades/aleman.html" class="enlace-tarjeta">
          <article class="tarjeta-curso">
            <input type="checkbox" name="aleman" id="aleman" class="disable">
            <label for="aleman" class="btn btn-rojo btn-chk">-</label>
            <img src="/src/assets/img/aleman.svg" alt="Bandera de Alemania" class="img-bandera">
            <div class="info-curso">
              <h3>Alemán</h3>
              <p><strong>Progreso:</strong> 12%</p>
              <p><strong>Nivel:</strong> Principiante (A1)</p>
            </div>
          </article>
        </a>

        <a href="../unidades/chino.html" class="enlace-tarjeta">
          <article class="tarjeta-curso">
            <input type="checkbox" name="chino" id="chino" class="disable">
            <label for="chino" class="btn btn-rojo btn-chk">-</label>
            <img src="/src/assets/img/chino.svg" alt="Bandera de China" class="img-bandera">
            <div class="info-curso">
              <h3>Chino</h3>
              <p><strong>Progreso:</strong> 0%</p>
              <p><strong>Nivel:</strong> Inicial (HSK 1)</p>
            </div>
          </article>
        </a>

        <input type="checkbox" name="mostrar" id="mostrar" class="mostrar-cursos">
        <label for="mostrar" class="btn btn-mostrar-cursos">Mostrar cursos</label>
      </div>
    </section>

    <!-- Barra lateral de estadísticas -->
    <aside class="panel-lateral">
      <div class="tarjeta-resumen">
        <h2>Estadísticas</h2>

        <div class="item-estadistica">
          <img src="/src/assets/img/liga.svg" alt="Icono de Liga" class="img-icono-aside">
          <div>
            <span class="subtitulo">Liga actual</span>
            <p class="valor-destacado">Liga Bronce</p>
          </div>
        </div>

        <div class="item-estadistica">
          <img src="/src/assets/img/meta.svg" alt="Icono de Meta" class="img-icono-aside">
          <div>
            <span class="subtitulo">Meta diaria</span>
            <p class="valor-destacado">50 XP / día</p>
          </div>
        </div>
      </div>
    </aside>
    `
    return document.createRange().createContextualFragment(htmlString)
}

export const hydrateDashboardView = (view) => {
    
    // const enlaces = preventNavigationDefault(view);
};