document.addEventListener('DOMContentLoaded', () => {
    // Riferimenti agli elementi HTML
    const audioClip = document.getElementById('song-clip');
    const playBtn = document.getElementById('play-btn');
    const answerInput = document.getElementById('answer-input');
    const checkBtn = document.getElementById('check-answer-btn');

    // La risposta corretta (in minuscolo per un confronto più facile)
    const CORRECT_ANSWER = "ci sono anch'io".toLowerCase().trim();

    // --- Logica per il pulsante Play/Pausa ---
    playBtn.addEventListener('click', () => {
        if (audioClip.paused) {
            audioClip.play();
            playBtn.innerHTML = '&#10074;&#10074;'; // Simbolo Pausa
        } else {
            audioClip.pause();
            playBtn.innerHTML = '&#9658;'; // Simbolo Play
        }
    });

    // Se la canzone finisce, l'icona del pulsante torna "Play"
    audioClip.addEventListener('ended', () => {
        playBtn.innerHTML = '&#9658;';
    });

    // --- Logica per il controllo della risposta ---
    checkBtn.addEventListener('click', () => {
        const userAnswer = answerInput.value.toLowerCase().trim();

        if (userAnswer === CORRECT_ANSWER) {
            // Risposta corretta
            answerInput.style.border = '2px solid #5cb85c';
            setTimeout(() => {
                window.location.href = 'Ricordo7.html';
            }, 1000);
        } else {
            // Risposta sbagliata: fa tremare l'input
            answerInput.style.animation = 'shake 0.5s';
            setTimeout(() => {
                answerInput.style.animation = '';
            }, 500);
        }
    });
});