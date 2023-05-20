import { EnviarCorreo,EnviarWhatsapp,Llamar,IrWeb } from "./funciones.js";

let whatsapp = document.querySelector("#BtnWhatsapp");
let email = document.querySelector("#BtnGmail");
let phone = document.querySelector("#BtnPhone");
let web = document.querySelector("#BtnpageWeb");

whatsapp.addEventListener("click", EnviarWhatsapp);
email.addEventListener("click",EnviarCorreo);
phone.addEventListener("click",Llamar);
web.addEventListener("click",IrWeb);