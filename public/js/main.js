import { EnviarCorreo, EnviarWhatsapp, Llamar, DowloadPdf, disableRightClick } from "./funciones.js";


document.addEventListener('contextmenu', disableRightClick); //deshabilita el click derecho

const whatsapp = document.querySelector("#BtnWhatsapp");
const email = document.querySelector("#BtnGmail");
const phone = document.querySelector("#BtnPhone");
const web = document.querySelector("#BtnpageWeb");
const pdf = document.querySelector("#BtnPdf");

const title_slider = document.querySelector("#Typewriter");
let text1 = 'Proyectos de Calidad';
let text2 = '<span class="span_Title"> FC Ingenier&iacute;a Y Construccion SAC </span>';
let suprimir = 7;

const title_maps = document.querySelector("#title_maps");
let oneText = 'Ubicanos Ahora';
let twoText = '<span class="span_Title"> ¿Qu&eacute; Esperas? </span>';

whatsapp.addEventListener("click", EnviarWhatsapp);
email.addEventListener("click", EnviarCorreo);
phone.addEventListener("click", Llamar);
pdf.addEventListener("click", DowloadPdf);

const currentYear = document.querySelector("#currentYear");
currentYear.innerHTML = new Date().getFullYear();
