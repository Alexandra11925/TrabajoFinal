document.addEventListener('DOMContentLoaded', () => {
    const newsletterForm = document.getElementById('newsletter-form');
    
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = e.target.querySelector('input[type="email"]').value;
      
      // Aquí normalmente enviarías el email a tu backend
      console.log(`Email suscrito: ${email}`);
      
      // Simulamos una respuesta del servidor
      setTimeout(() => {
        alert('¡Gracias por suscribirte a nuestro newsletter!');
        e.target.reset();
      }, 1000);
    });
  
    // Animación suave para los iconos sociales
    const socialIcons = document.querySelectorAll('.icon-links');
    socialIcons.forEach(icon => {
      icon.addEventListener('mouseenter', (e) => {
        e.target.style.transform = 'translateY(-5px)';
      });
      icon.addEventListener('mouseleave', (e) => {
        e.target.style.transform = 'translateY(0)';
      });
    });
    });