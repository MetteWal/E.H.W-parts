document.addEventListener("DOMContentLoaded", function() {
    const klickljud = document.getElementById("klick");    // Ljudet för klick
    
 // Funktion för att kopiera text och spela ljud
    function setupCopy(elementId, label) {
        const ljud = document.getElementById(elementId);
        if (ljud) {
            ljud.addEventListener("click", () => {
                // Spela ljud
                if (klickljud) {
                    klickljud.currentTime = 0;
                    klickljud.play();
                }
                // meddelanden när man kopierar 
                const textToCopy = ljud.textContent.trim();
                navigator.clipboard.writeText(textToCopy).then(() => {
                    showNotification(`${label} kopierades!`);
                }).catch(() => {
                    showNotification(`Kopiering misslyckades.`);
                });
            });
        }
    }   
    
    // Funktion för att visa notis
    function showNotification(message) {
        const notification = document.createElement("div");
        notification.className = "notification"; 
        notification.textContent = message;
        document.body.appendChild(notification);
        // Visa med fade-in
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);
        // Ta bort efter 2 sekunder
        setTimeout(() => {
            notification.classList.remove('show');
            notification.addEventListener('transitionend', () => {
                notification.remove();
            });
        }, 2000);
    }

   

    setupCopy("mail", "E-post");
    setupCopy("telefon", "Telefonnummer");

    // Gör bilden synlig genom fade 
    const bild = document.getElementById("bild");
    if (bild) {
        setTimeout(() => {
            bild.style.display = "block"; 
            setTimeout(() => {
                bild.classList.add('show');
            }, 0);
        }, 1000);
    }
});