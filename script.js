document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('#contacto form');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que el formulario se envíe realmente

        // Puedes obtener los valores del formulario si lo necesitas
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('mensaje').value;

        // Muestra una alerta simple
        alert('¡Gracias por tu mensaje! Colabeco te responderá pronto.');

        // Opcional: limpiar los campos del formulario después de enviar
        contactForm.reset();
    });
});
