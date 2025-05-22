document.addEventListener("DOMContentLoaded", function() {
    const klickljud = document.getElementById("klick"); // Hämta ljudet

    function setupCopy(elementId, label) {
        const element = document.getElementById(elementId);
        if (element) {
            element.addEventListener("click", () => { // Ändra "klick" till "click"
                if (klickljud) {
                    klickljud.currentTime = 0; 
                    klickljud.play();
                }
                const textToCopy = element.textContent.trim();
                navigator.clipboard.writeText(textToCopy).then(() => {
                    showNotification(`${label} kopierades!`);
                }).catch(() => {
                    showNotification(`Kopiering misslyckades.`);
                });
            });
        }
    }

    function showNotification(message) {
        const notification = document.createElement("div");
        notification.className = "notification";
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.classList.add('show');
        }, 10);

        setTimeout(() => {
            notification.classList.remove('show');
            notification.addEventListener('transitionend', () => {
                notification.remove();
            });
        }, 2000);
    }

    // Anropa setupCopy för mail och telefon
    setupCopy("mail", "E-post");
    setupCopy("telefon", "Telefonnummer");
});