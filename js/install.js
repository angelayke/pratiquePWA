let deferredInstallPrompt = null;
const installButton = document.getElementById('btnInstall');
installButton.addEventListener('click', installPWA);

// Add event listener for beforeinstallprompt event
window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);

function saveBeforeInstallPromptEvent(evt) {
    //CODELAB: Add code to save event & show the install button
    deferredInstallPrompt = evt;
    installButton.removeAttribute('hidden');
}

function installPWA(evt) {
    // Add code show install prompt & hide the install button.
    deferredInstallPrompt.prompt();
    // Hide the install button, it can't be called twice.
    evt.srcElement.setAttribute('hidden', true);

    // Log user response to prompt.
    deferredInstallPrompt.userChoice
        .then((choice) => {
            if (choice.outcome === 'accepted') {
                console.log("L'utilisateur a installé la PWA via mon bouton", choice);
            } else {
                console.log("L'utilisateur a refuser d'installer la PWA.", choice);
            }
            deferredInstallPrompt = null;
        });
}

function logAppInstalled(evt) {
    // CODELAB: Add code to log the event
    console.log("L'utilisateur a installé la PWA via les ... de chrome.", evt);
}