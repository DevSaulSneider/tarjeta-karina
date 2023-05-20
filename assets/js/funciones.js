export{EnviarCorreo, EnviarWhatsapp, Llamar, IrWeb};

function EnviarWhatsapp() {
    let numero = "+51 925 123 534";
    let mensajeWhatsapp = "Hola Srta Karina Servan";
    let url = `https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(mensajeWhatsapp)}`;

    window.open(url);
};

function EnviarCorreo() {
    let destinatario = "karinaservan@outlook.es";
    let asunto = "Asunto de Prueba";
    let mensajeEmail = "Este es un mensaje de prueba";
    let EmailUrl=`mailto:${destinatario}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(mensajeEmail)}`;

    window.location.href = EmailUrl;
}

function Llamar(){
    let numero = "+51 925 123 534";
    window.location.href = `tel:${numero}`;
}

function IrWeb() {
    let web = "https://fcsac.com/";
    window.location.href = web;
}