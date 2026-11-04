import { loginFormHandler } from "../utils/loginFormHandler.js";

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
    loginFormHandler(loginForm, view);
};