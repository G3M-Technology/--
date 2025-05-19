document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinkers = document.querySelector('.nav-linkers');
    menuToggle.addEventListener('click', function() {
        navLinkers.classList.toggle('open');
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu-button');
    const sidebar = document.getElementById('sidebar');

    menuButton.addEventListener('click', function(e) {
        e.stopPropagation(); // Empêche la fermeture immédiate
        sidebar.classList.toggle('show');
    });

    // Ferme la sidebar si on clique ailleurs
    document.addEventListener('click', function(e) {
        if (!sidebar.contains(e.target) && e.target !== menuButton) {
            sidebar.classList.remove('show');
        }
    });
});