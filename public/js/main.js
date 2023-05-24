import { EnviarCorreo, EnviarWhatsapp, Llamar, IrWeb, disableRightClick, DowloadPdf } from "./funciones.js";

// preloader
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

// document.addEventListener('contextmenu', disableRightClick); //deshabilita el click derecho

const whatsapp = document.querySelector("#BtnWhatsapp");
const email = document.querySelector("#BtnGmail");
const phone = document.querySelector("#BtnPhone");
const web = document.querySelector("#BtnpageWeb");
const pdf = document.querySelector("#BtnPdf");

whatsapp.addEventListener("click", EnviarWhatsapp);
email.addEventListener("click", EnviarCorreo);
phone.addEventListener("click", Llamar);
web.addEventListener("click", IrWeb);
pdf.addEventListener("click", DowloadPdf);

const currentYear = document.querySelector("#currentYear");
currentYear.innerHTML = new Date().getFullYear();

