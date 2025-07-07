document.addEventListener('DOMContentLoaded', () => {
    const initialMessage = document.getElementById('initial-message');
    const revealBtn = document.getElementById('reveal-btn');
    const cameraView = document.getElementById('camera-view');
    const liveVideo = document.getElementById('live-video');
    const overlayText = document.getElementById('overlay-text');

    const finalMessages = [
        "ieri è storia.",
        "Domani è un mistero.",
        "ma oggi è un dono.",
        "per questo si chiama.",
        "PRESENTE."
    ];

    revealBtn.addEventListener('click', startCamera);

    async function startCamera() {
        // Nasconde il messaggio iniziale e mostra l'area video
        initialMessage.style.display = 'none';
        cameraView.classList.remove('hidden');

        try {
            // Chiede accesso alla fotocamera frontale
            const stream = await navigator.mediaDevices.getUserMedia({ 
                video: { facingMode: 'user' },
                audio: false 
            });

            // Collega il flusso video all'elemento <video>
            liveVideo.srcObject = stream;
            
            // Fa partire la sequenza di messaggi finali
            showFinalMessages();

        } catch (err) {
            // Se l'utente nega l'accesso, mostra un messaggio di riserva
            overlayText.innerHTML = `<p style="font-size: 1.5em; padding: 20px;">Per la sorpresa finale è necessario l'accesso alla fotocamera. Ma non importa. Il regalo più grande sei tu.</p>`;
            console.error("Errore nell'accesso alla fotocamera:", err);
        }
    }

    function showFinalMessages() {
        finalMessages.forEach(messageText => {
            const line = document.createElement('span');
            line.classList.add('overlay-line');
            line.textContent = messageText;
            overlayText.appendChild(line);
        });
    }
});