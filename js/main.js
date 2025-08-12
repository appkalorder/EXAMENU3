//DECLARACION DE VARIABLES GLOBALES
let deferredPrompt;

// Evento para capturar el banner de instalación
window.addEventListener("beforeinstallprompt", (event) => {
    console.log("Evento por defecto anulado");
    event.preventDefault();
    deferredPrompt = event;
});

// CUANDO SE CARGA EL DOM
window.addEventListener("load", async () => {
    // Notificaciones y Service Worker
    const permission = await Notification.requestPermission();

    if(navigator.serviceWorker) {
        const res = await navigator.serviceWorker.register("../sw.js");
        console.log(res);
        if (res && permission === "granted") { // Solo si el usuario aceptó
            const ready = await navigator.serviceWorker.ready;
            ready.showNotification("ESPE NOTES", {
                body: "La aplicación se ha instalado correctamente",
                icon: "./assets/icons/icon-144x144.png",
                vibrate: [100, 50, 100],
            });
        }
    }

    // Botón de instalación (debes tener un botón con id="banner-install" en tu HTML)
    const installButton = document.querySelector("#banner-install");
    if (installButton) {
        installButton.addEventListener("click", () => {
            if (deferredPrompt) {
                deferredPrompt.prompt();
                deferredPrompt.userChoice.then((choiceResult) => {
                    if (choiceResult.outcome === 'accepted') {
                        console.log('Usuario aceptó la instalación de la app');
                    } else {
                        console.log('Usuario rechazó la instalación de la app');
                    }
                    deferredPrompt = null;
                });
            }
        });
    }
});