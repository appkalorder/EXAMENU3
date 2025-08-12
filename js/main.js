//DECLARACION DE VARIABLES GLOBALES
let deferredPrompt;

// Evento para capturar el banner de instalación
window.addEventListener("beforeinstallprompt", (event) => {
    console.log("Evento por defecto anulado");
    event.preventDefault();
    deferredPrompt = event;
    // Opcional: mostrar el botón si estaba oculto
    const installButton = document.querySelector("#banner-install");
    if (installButton) {
        installButton.style.display = "block";
    }
});

// CUANDO SE CARGA EL DOM
window.addEventListener("load", async () => {
    // Notificaciones y Service Worker
    const permission = await Notification.requestPermission();

    if(navigator.serviceWorker) {
        // Cambia la ruta a "sw.js" si está en la raíz
        const res = await navigator.serviceWorker.register("sw.js");
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

    // Botón de instalación
    const installButton = document.querySelector("#banner-install");
    if (installButton) {
        installButton.addEventListener("click", async () => {
            if (deferredPrompt) {
                deferredPrompt.prompt();
                const choiceResult = await deferredPrompt.userChoice;
                if (choiceResult.outcome === 'accepted') {
                    console.log('Usuario aceptó la instalación de la app');
                } else {
                    console.log('Usuario rechazó la instalación de la app');
                }
                deferredPrompt = null;
                installButton.style.display = "none";
            }
        });
    }
});