import { loginUser } from "../../services/login.service.js";
import { navigateTo } from "./navigator.js";
export const loginFormHandler = (loginForm, view) => {
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
                navigateTo("dashboard");
            }
        });
    }
}