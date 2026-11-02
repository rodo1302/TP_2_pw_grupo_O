import { loginUser } from "../../services/login.service.js";
export const viewLogin = () => {
    const htmlString = `
    <form id="loginForm" class="login-form">
            <section class="login-input_container">
                <label for="usuario">Usuario / Email</label>
                <input type="text" name="usuario" id="usuario" required>
                <label for="contrasenia">Contraseña</label>
                <input type="password" name="contrasenia" id="contrasenia" required>
            </section>
            <button id="btnSubmit" class="btn btn-verde" type="submit">Iniciar sesión</button>
            <section class="login-links">
                <a href="#recuperar_contraseña">¿Olvidaste tu contraseña?</a><span>|</span><a
                    href="#registro">¿No tienes cuenta? Créala aquí</a>
            </section>
        </form>
        `
    return document.createRange().createContextualFragment(htmlString)
};

export const hydrateLoginView = (view) => {
    const loginForm = view.querySelector("#loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const data = new FormData(e.target);
            const result = loginUser(
                data.get("usuario"), data.get("contrasenia")
            );
            if (!result.success) {
                let errorMessage = view.querySelector("#error-message");
                if (!errorMessage) {
                    const btnSubmit = view.querySelector("#btnSubmit");
                    const msjError = document.createElement('p');
                    msjError.classList.add('error-message');
                    msjError.setAttribute('id', 'error-message');
                    msjError.textContent = result.message;
                    btnSubmit.after(msjError);
                }
            } else{
                window.location.hash = "dashboard";
            }
        });
    }
};