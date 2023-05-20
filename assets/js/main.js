import { EnviarCorreo, EnviarWhatsapp, Llamar, IrWeb } from "./funciones.js";

/**
   * Preloader
   */
const preloader = document.querySelector('#preloader');
if (preloader) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('loaded');
        }, 1000);
        setTimeout(() => {
            preloader.remove();
        }, 2000);
    });
}

let whatsapp = document.querySelector("#BtnWhatsapp");
let email = document.querySelector("#BtnGmail");
let phone = document.querySelector("#BtnPhone");
let web = document.querySelector("#BtnpageWeb");

whatsapp.addEventListener("click", EnviarWhatsapp);
email.addEventListener("click", EnviarCorreo);
phone.addEventListener("click", Llamar);
web.addEventListener("click", IrWeb);