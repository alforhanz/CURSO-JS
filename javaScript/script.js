const textarea = document.getElementById('mensaje');

textarea.addEventListener('input', () => {
    // Restablecer la altura para calcular el nuevo tamaño
    textarea.style.height = 'auto';
    // Ajustar la altura según el scrollHeight (contenido interno)
    textarea.style.height = `${textarea.scrollHeight}px`;
});

