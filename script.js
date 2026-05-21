document.addEventListener("DOMContentLoaded", () => {

    // 1. Animación del gráfico de barras al cargar la página
    const bars = document.querySelectorAll('.bar');
    setTimeout(() => {
        bars.forEach(bar => {
            const targetHeight = bar.style.getPropertyValue('--target-height');
            bar.style.height = targetHeight;
        });
    }, 200);

    // 2. Control del mensaje oculto del botón interactivo
    const button = document.getElementById('btn-interact');
    const message = document.getElementById('hidden-message');

    // Comprobamos que el botón exista en el DOM antes de asignarle el evento
    if (button && message) {
        button.addEventListener('click', () => {
            if (message.classList.contains('hidden')) {
                message.classList.remove('hidden');
                button.textContent = 'Ocultar mensaje';
            } else {
                message.classList.add('hidden');
                button.textContent = '¿Quieres saber más?';
            }
        });
    }
});
