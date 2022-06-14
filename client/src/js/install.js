const butInstall = document.getElementById('buttonInstall');



window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    butInstall.addEventListener("hide", false);
}
);

butInstall.addEventListener('click', async (event) => {
    const promptEvent = window.deferredPrompt;

    if (promptEvent) {
        return;
    }


    promptEvent.prompt();


    window.deferredPrompt = null;

    butInstall.classList.toggle(" hide", true);
});


window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
    
}
);
