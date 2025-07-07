document.addEventListener('DOMContentLoaded', () => {
    // La sequenza corretta, basata sulla data 12/07
    const CORRECT_SEQUENCE = ['1', '2', '0', '7'];
    
    // Variabili per tenere traccia dello stato del gioco
    let playerSequence = [];
    let sequenceToPlay = [...CORRECT_SEQUENCE]; // Una copia della sequenza da "consumare"
    let isPlayerTurn = false;

    // Riferimenti agli elementi HTML
    const buttons = document.querySelectorAll('.seq-btn');
    const startBtn = document.getElementById('start-btn');
    const feedback = document.getElementById('feedback-message');

    // Funzione per creare una pausa (ci servirà per le animazioni)
    const delay = ms => new Promise(res => setTimeout(res, ms));

    // Funzione per far illuminare un pulsante
    async function flashButton(value) {
        const button = document.querySelector(`.seq-btn[data-value="${value}"]`);
        button.classList.add('active');
        await delay(500); // Durata del flash
        button.classList.remove('active');
        await delay(250); // Pausa tra un flash e l'altro
    }

    // Funzione che mostra l'intera sequenza
    async function playSequence() {
        startBtn.disabled = true;
        feedback.textContent = 'Memorizza la sequenza...';
        isPlayerTurn = false;
        buttons.forEach(btn => btn.disabled = true);

        await delay(1000);

        for (const value of CORRECT_SEQUENCE) {
            await flashButton(value);
        }
        
        feedback.textContent = 'Tocca a te!';
        isPlayerTurn = true;
        buttons.forEach(btn => btn.disabled = false);
    }

    // Funzione per gestire il click del giocatore
    function handlePlayerClick(value) {
        if (!isPlayerTurn) return; // Se non è il turno del giocatore, non fa nulla

        playerSequence.push(value);
        flashButton(value); // Fa illuminare il pulsante cliccato

        const index = playerSequence.length - 1;

        // Controlla se il pulsante cliccato è corretto
        if (playerSequence[index] !== CORRECT_SEQUENCE[index]) {
            feedback.textContent = 'Sbagliato! Riprova dall\'inizio.';
            feedback.style.color = '#d9534f';
            resetGame();
            return;
        }

        // Se è corretto e la sequenza è finita, il giocatore ha vinto
        if (playerSequence.length === CORRECT_SEQUENCE.length) {
            feedback.textContent = 'Sequenza Perfetta!';
            feedback.style.color = '#5cb85c';
            isPlayerTurn = false;
            buttons.forEach(btn => btn.disabled = true);

            setTimeout(() => {
                window.location.href = 'ricordo2.html'; // VAI ALLA PAGINA DEL RICORDO!
            }, 2000);
        }
    }

    // Funzione per resettare il gioco
    function resetGame() {
        playerSequence = [];
        isPlayerTurn = false;
        startBtn.disabled = false;
        buttons.forEach(btn => btn.disabled = true);
    }

    // Aggiungi gli event listener
    startBtn.addEventListener('click', playSequence);
    buttons.forEach(button => {
        button.addEventListener('click', () => handlePlayerClick(button.dataset.value));
    });

    // Stato iniziale
    buttons.forEach(btn => btn.disabled = true);
});