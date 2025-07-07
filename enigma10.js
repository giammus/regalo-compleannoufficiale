document.addEventListener('DOMContentLoaded', () => {
    const hotspots = document.querySelectorAll('.hotspot');
    const inventorySlots = document.getElementById('inventory-slots');
    const finalPuzzle = document.getElementById('final-puzzle');
    const finalAnswerInput = document.getElementById('final-answer-input');
    const solveBtn = document.getElementById('solve-mystery-btn');

    const totalClues = 4; // Imposta il numero totale di indizi da trovare
    let foundCluesCount = 0;
    const CORRECT_ANSWER = "nonna giuliana"; // La soluzione finale, in minuscolo

    hotspots.forEach(hotspot => {
        hotspot.addEventListener('click', () => {
            // Se l'indizio è già stato trovato, non fa nulla
            if (hotspot.classList.contains('found')) {
                return;
            }

            // 1. Segna l'hotspot come trovato
            hotspot.classList.add('found');

            // 2. Prende l'URL dell'icona dall'attributo data-clue-src
            const clueImageSrc = hotspot.dataset.clueSrc;

            // 3. Crea l'elemento immagine per l'inventario
            const inventoryIcon = document.createElement('img');
            inventoryIcon.src = clueImageSrc;
            inventoryIcon.classList.add('inventory-item');
            
            // 4. Aggiunge l'icona all'inventario
            inventorySlots.appendChild(inventoryIcon);

            // 5. Aggiorna il conteggio e controlla se abbiamo trovato tutto
            foundCluesCount++;
            if (foundCluesCount === totalClues) {
                // Se tutti gli indizi sono stati trovati, mostra il puzzle finale
                finalPuzzle.classList.remove('hidden');
            }
        });
    });

    // Logica per il pulsante di soluzione finale
    solveBtn.addEventListener('click', () => {
        const userAnswer = finalAnswerInput.value.toLowerCase().trim();
        if (userAnswer === CORRECT_ANSWER) {
            alert('Sì! Ricordo perfettamente quel giorno!');
            window.location.href = 'Ricordo10.html';
        } else {
            finalAnswerInput.style.animation = 'shake 0.5s';
            setTimeout(() => {
                finalAnswerInput.style.animation = '';
            }, 500);
        }
    });
});