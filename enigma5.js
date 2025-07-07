document.addEventListener('DOMContentLoaded', () => {
    const messages = document.querySelectorAll('.message');
    const replyOptions = document.getElementById('reply-options');
    const chatWindow = document.getElementById('chat-window');

    // Funzione per creare una pausa
    const delay = ms => new Promise(res => setTimeout(res, ms));

    // Funzione per rivelare un messaggio e scorrere la chat
    function revealMessage(index) {
        if (messages[index]) {
            messages[index].classList.remove('hidden');
            // Fa scrollare la finestra fino in fondo per mostrare il nuovo messaggio
            chatWindow.scrollTop = chatWindow.scrollHeight;
        }
    }

    // La sequenza principale della chat
    async function playChatSequence() {
        await delay(1500); // Pausa iniziale
        revealMessage(0);

        await delay(2000); // Pausa tra i messaggi
        revealMessage(1);

        await delay(2500); // Pausa più lunga, come se si stesse pensando
        revealMessage(2);

        await delay(2000);
        revealMessage(3);

        // Alla fine, mostra le opzioni di risposta
        await delay(1000);
        replyOptions.classList.remove('hidden');
    }

    // Gestione delle risposte (simile al quiz dell'Atto 1)
    const replyButtons = replyOptions.querySelectorAll('.quiz-btn');
    replyButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.dataset.correct === 'true') {
                button.classList.add('correct');
                setTimeout(() => {
                    window.location.href = 'Ricordo5.html';
                }, 1000);
            } else {
                button.classList.add('incorrect');
                // Disabilita solo il pulsante sbagliato per non confondere
                button.disabled = true; 
            }
        });
    });

    // Fa partire la magia
    playChatSequence();
});