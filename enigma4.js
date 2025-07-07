document.addEventListener('DOMContentLoaded', () => {
    const wordBoxes = document.querySelectorAll('.word-box');
    const dropZones = document.querySelectorAll('.drop-zone');
    const feedback = document.getElementById('feedback-message');

    // --- Eventi per le PAROLE da trascinare ---
    wordBoxes.forEach(box => {
        box.addEventListener('dragstart', (e) => {
            box.classList.add('dragging');
            // Memorizza l'ID della parola che stiamo trascinando
            e.dataTransfer.setData('text/plain', e.target.id);
        });

        box.addEventListener('dragend', () => {
            box.classList.remove('dragging');
        });
    });

    // --- Eventi per le AREE di rilascio ---
    dropZones.forEach(zone => {
        zone.addEventListener('dragover', (e) => {
            e.preventDefault(); // Fondamentale! Permette il rilascio.
            zone.classList.add('drag-over');
        });

        zone.addEventListener('dragleave', () => {
            zone.classList.remove('drag-over');
        });

        zone.addEventListener('drop', (e) => {
            e.preventDefault();
            zone.classList.remove('drag-over');

            const draggedWordId = e.dataTransfer.getData('text/plain');
            const draggedWord = document.getElementById(draggedWordId);
            
            // Se la zona è vuota, sposta la parola qui
            if (zone.children.length === 0) {
                zone.appendChild(draggedWord);
            }

            // Controlla se la soluzione è corretta
            checkSolution();
        });
    });

    function checkSolution() {
        const solutionContainer = document.getElementById('solution-container');
        // Controlla solo se tutti gli spazi sono stati riempiti
        if (solutionContainer.querySelectorAll('.word-box').length !== dropZones.length) {
            return;
        }

        let isCorrect = true;
        dropZones.forEach(zone => {
            const wordInside = zone.querySelector('.word-box');
            if (!wordInside || wordInside.id !== zone.dataset.targetId) {
                isCorrect = false;
            }
        });

        if (isCorrect) {
            feedback.textContent = 'Frase Esatta! mi mancava chiamarti così';
            feedback.style.color = '#5cb85c';
            setTimeout(() => {
                window.location.href = 'Ricordo4.html';
            }, 2000);
        } else {
            feedback.textContent = 'Le parole ci sono, ma l\'ordine non è quello giusto...';
            feedback.style.color = '#d9534f';
        }
    }
});