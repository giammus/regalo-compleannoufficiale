document.addEventListener('DOMContentLoaded', () => {
    const hotspots = document.querySelectorAll('.hotspot');
    const correctHotspot = document.getElementById('correct-hotspot');
    const feedbackMessage = document.getElementById('feedback-message');

    hotspots.forEach(hotspot => {
        hotspot.addEventListener('click', (event) => {
            
            // Controlla se l'hotspot cliccato è quello giusto
            if (event.target.id === 'correct-hotspot') {
                // Azione se la risposta è corretta
                feedbackMessage.textContent = 'Centro! Proprio lì. Che ricordo meraviglioso e goloso...';
                feedbackMessage.style.color = '#5cb85c';
                correctHotspot.classList.add('found'); // Evidenzia l'area trovata

                // Impedisce altri click
                hotspots.forEach(hs => hs.style.pointerEvents = 'none');

                // Reindirizza alla pagina del ricordo dopo un paio di secondi
                setTimeout(() => {
                    window.location.href = 'ricordo3.html';
                }, 2000);

            } else {
                // Azione se la risposta è sbagliata
                feedbackMessage.textContent = 'Mmmh, no... non era quello il punto. Riprova!';
                feedbackMessage.style.color = '#d9534f';
                
                // Opzionale: fa sparire il messaggio di errore dopo un po'
                setTimeout(() => {
                    feedbackMessage.textContent = '';
                }, 2500);
            }
        });
    });
});