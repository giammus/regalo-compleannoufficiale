/* --- INIZIO LOGICA TRANSIZIONE FLUIDA --- */
window.addEventListener('DOMContentLoaded', () => {
  const allLinks = document.querySelectorAll('a:not([target="_blank"])'); // Prende tutti i link interni

  allLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      const href = this.getAttribute('href');

      // Se il link non è un'ancora interna o un link vuoto
      if (href && href.charAt(0) !== '#') {
        event.preventDefault(); // Impedisce il cambio di pagina immediato
        document.body.classList.add('is-leaving'); // Aggiunge la classe per l'animazione di uscita

        setTimeout(() => {
          window.location.href = href; // Cambia pagina dopo l'animazione
        }, 700); // 700 millisecondi, la stessa durata dell'animazione CSS
      }
    });
  });
});
/* --- FINE LOGICA TRANSIZIONE FLUIDA --- */

// Controlla se siamo sulla pagina dell'enigma 1
if (window.location.pathname.includes('enigma1.html')) {
  
  // 1. Prendi gli elementi dalla pagina HTML
  const rispostaInput = document.getElementById('rispostaInput');
  const controllaBtn = document.getElementById('controllaBtn');
  const messaggioErrore = document.getElementById('messaggioErrore');

  // 2. Definisci la risposta corretta (ATTENZIONE: è sensibile a maiuscole/minuscole!)
  const rispostaCorretta = "24"; // <--- CAMBIA QUESTA CON LA TUA RISPOSTA!

  // 3. Aggiungi un'azione quando il pulsante viene cliccato
  controllaBtn.addEventListener('click', function() {
    
    // Prendi il valore scritto dall'utente e mettilo in minuscolo per un controllo più facile
    const rispostaUtente = rispostaInput.value.trim().toLowerCase();
    
    if (rispostaUtente === rispostaCorretta.toLowerCase()) {
      // Se la risposta è corretta...
      // ...vai alla pagina del primo ricordo!
      window.location.href = "ricordo1.html"; 
    } else {
      // Se la risposta è sbagliata...
      // ...mostra il messaggio di errore
      messaggioErrore.style.display = 'block'; 
    }
  });
}
