document.addEventListener('DOMContentLoaded', function(){
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const cards = document.querySelectorAll('.card');


    // Funktion för att söka
    const performSearch = () => {
        const searchTerm = searchInput.value.toLowerCase();

        // Ta bort tidigare highlight
        document.querySelectorAll('.card.highlight').forEach(c => c.classList.remove('highlight'));

        let foundCard = null;
        for (const card of cards) {
            const cardName = card.getAttribute('data-name').toLowerCase();
            if (cardName.includes(searchTerm)) {
                foundCard = card;
                break; // stoppar när ett kort hittas
            }
        }

        // Highlight och scrolla till kortet om det hittas
        if (foundCard) {
            foundCard.classList.add('highlight');
            foundCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
            alert(`Tyvärr, inga kort matchade din sökning: "${searchTerm}"`);
        }
    };

    // Hantera klick på sökknappen
    if (searchButton) {
        searchButton.addEventListener('click', function(e) {
            e.preventDefault();
            performSearch();
        });
    }

    // Sök med Enter
    if (searchInput) {
        searchInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                performSearch();
            }
        });
    }




    
    // "Läs mer" knappar
    document.querySelectorAll('.read-more').forEach(btn => {
        btn.addEventListener('click', function() {
            const cardBody = btn.closest('.card-body');
            const moreText = cardBody.querySelector('.infoText');

            if (moreText) {
                if (moreText.classList.contains('expanded')) {
                    moreText.classList.remove('expanded');
                    btn.textContent = 'Läs mer';
                } else {
                    moreText.classList.add('expanded');
                    btn.textContent = 'Läs mindre';
                }
            }
        });
    });
});