export { EnviarCorreo, EnviarWhatsapp, Llamar, disableRightClick, DowloadPdf };

function EnviarWhatsapp() {
    let numero = "+51 925 123 534";
    let mensajeWhatsapp = "Hola Srta Karina Servan";
    let url = `https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(mensajeWhatsapp)}`;

    window.open(url);
};

function EnviarCorreo() {
    let destinatario = "karinaservan@outlook.es";
    let asunto = "Servicio de Administracion";
    let mensajeEmail = "Buen dia Srta Karina Servan, vengo desde su sitio web \n...";
    let encodedDestinatario = encodeURIComponent(destinatario);
    let encodedAsunto = encodeURIComponent(asunto);
    let encodedMensaje = encodeURIComponent(mensajeEmail);

    let EmailUrl = `mailto:${encodedDestinatario}?subject=${encodedAsunto}&body=${encodedMensaje}`;

    window.location.href = EmailUrl;
};

function DowloadPdf() {
    let archivo = "public/assets/pdf/cv.pdf";
    let a = document.createElement("a");
    a.href = archivo;
    a.download = "Asistente_Administravio-Karina-CV";
    a.click();
}

const Llamar = () => window.location.href = "tel:+51 925 123 534";
const disableRightClick = (e) => e.preventDefault();