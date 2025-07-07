// --- LOGICA PER L'ANIMAZIONE DI SCRITTURA (MACCHINA DA SCRIVERE) ---

function setupTypingAnimation() {
    // Cerca un elemento con la classe speciale nella pagina corrente
    const element = document.querySelector('.js-typing-animation');
    
    // Se non lo trova, non fa nulla
    if (!element) return; 

    const text = element.textContent.trim(); // Salva il testo originale
    element.textContent = ''; // Svuota l'elemento per iniziare a scrivere
    let i = 0;

    // Disabilita il pulsante della musica per non sovrapporre le animazioni
    const musicBtn = document.querySelector('.music-toggle-btn');
    if(musicBtn) musicBtn.style.display = 'none';

    const typingInterval = setInterval(() => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typingInterval);
            // Rimuove il cursore lampeggiante dopo che ha finito di scrivere
            element.classList.add('typing-done');
            // Fa riapparire il pulsante della musica
            if(musicBtn) musicBtn.style.display = 'block';
        }
    }, 50); // Velocità di battitura (50ms è un buon valore)
}

// Esegui la funzione quando la pagina ha caricato
setupTypingAnimation();