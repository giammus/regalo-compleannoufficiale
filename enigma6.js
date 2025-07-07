document.addEventListener('DOMContentLoaded', function() {

    const hotspots = document.querySelectorAll('.diff-hotspot');
    const counterElement = document.getElementById('counter');
    const totalDifferences = 5;
    let foundCount = 0;

    if (hotspots.length > 0) {
        hotspots.forEach(hotspot => {
            hotspot.addEventListener('click', () => {
                
                if (hotspot.classList.contains('is-found')) {
                    return; 
                }

                hotspot.classList.add('is-found');

                const circle = hotspot.querySelector('.found-circle');
                if (circle) {
                    circle.classList.remove('hidden');
                }

                foundCount++;
                counterElement.textContent = `Differenze trovate: ${foundCount} / ${totalDifferences}`;

                if (foundCount === totalDifferences) {
                    counterElement.textContent = 'Le hai trovate tutte! Sei un falco!';
                    counterElement.style.color = '#5cb85c';

                    setTimeout(() => {
                        window.location.href = 'Ricordo6.html';
                    }, 2000);
                }
            });
        });
    }
});