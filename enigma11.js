document.addEventListener('DOMContentLoaded', () => {
    // --- SOLUZIONE SEGRETA (Aggiornata con i tuoi numeri!) ---
    const DIAL_SOLUTION = ['2', '0', '2', '3'];
    const LEVER_SOLUTION = [false, true, false]; // giù, sù, giù
    const SLIDER_SOLUTION = '15';

    // --- RIFERIMENTI AGLI ELEMENTI ---
    const dials = document.querySelectorAll('.dial');
    const levers = document.querySelectorAll('.lever');
    const slider = document.getElementById('secret-slider');
    const sliderValueDisplay = document.getElementById('slider-value');
    const unlockBtn = document.getElementById('unlock-btn');
    const puzzleBox = document.getElementById('puzzle-box');

    // --- STATO ATTUALE DEL PUZZLE ---
    let currentDialValues = ['0', '0', '0', '0'];
    let currentLeverStates = [false, false, false];

    // --- LOGICA DEI DIALI ---
    dials.forEach(dial => {
        dial.addEventListener('click', () => {
            const dialId = parseInt(dial.dataset.dialId);
            let currentValue = parseInt(currentDialValues[dialId]);
            currentValue = (currentValue + 1) % 10; // Cicla da 0 a 9
            currentDialValues[dialId] = currentValue.toString();
            dial.textContent = currentValue;
        });
    });

    // --- LOGICA DELLE LEVE ---
    levers.forEach(lever => {
        lever.addEventListener('click', () => {
            const leverId = parseInt(lever.dataset.leverId);
            lever.classList.toggle('toggled');
            currentLeverStates[leverId] = !currentLeverStates[leverId]; // Inverte lo stato
        });
    });

    // --- LOGICA DEL CURSORE ---
    // Imposta il valore iniziale del display del cursore
    sliderValueDisplay.textContent = slider.value; 
    slider.addEventListener('input', () => {
        sliderValueDisplay.textContent = slider.value;
    });

    // --- LOGICA DEL PULSANTE DI SBLOCCO ---
    unlockBtn.addEventListener('click', () => {
        // Confronta array convertendoli in stringhe
        const dialsAreCorrect = currentDialValues.join('') === DIAL_SOLUTION.join('');
        const leversAreCorrect = JSON.stringify(currentLeverStates) === JSON.stringify(LEVER_SOLUTION);
        const sliderIsCorrect = slider.value === SLIDER_SOLUTION;

        if (dialsAreCorrect && leversAreCorrect && sliderIsCorrect) {
            // VITTORIA!
            puzzleBox.style.transition = 'transform 0.5s, box-shadow 0.5s';
            puzzleBox.style.transform = 'scale(1.1)';
            puzzleBox.style.boxShadow = '0 0 50px #5cb85c';
            alert('COMBINAZIONE ESATTA! La scatola si apre...');
            setTimeout(() => {
                window.location.href = 'Ricordo11.html';
            }, 1500);
        } else {
            // Sbagliato: fa tremare la scatola
            puzzleBox.style.animation = 'shake 0.5s';
            setTimeout(() => {
                puzzleBox.style.animation = '';
            }, 500);
        }
    });
});