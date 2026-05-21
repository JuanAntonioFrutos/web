document.addEventListener("DOMContentLoaded", () => {

    // 1. Animación del gráfico al cargar la página
    const bars = document.querySelectorAll('.bar');
    setTimeout(() => {
        bars.forEach(bar => {
            const targetHeight = bar.style.getPropertyValue('--target-height');
            bar.style.height = targetHeight;
        });
    }, 200); // Pequeño delay para asegurar la transición visual

    // 2. Interacción del botón
    const button = document.getElementById('btn-interact');
    const message = document.getElementById('hidden-message');

    button.addEventListener('click', () => {
        if (message.classList.contains('hidden')) {
            message.classList.remove('hidden');
            button.textContent = 'Ocultar';
        } else {
            message.classList.add('hidden');
            button.textContent = '¿Quieres saber más?';
        }
    });
});
