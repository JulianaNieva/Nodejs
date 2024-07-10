const fadeAnimation = (elementId) => {
    var element = document.getElementById(elementId);
    var elementPos = element.getBoundingClientRect().top;
    var screenHeight = window.innerHeight;
  
    // Agregar la clase de animación cuando el div esté visible en pantalla
    if (elementPos < screenHeight * 0.75) { // Cambia 0.75 por el porcentaje que desees
      element.classList.add('animacion-in');
      element.classList.remove('animacion-out')
    } else {
      element.classList.remove('animacion-in');
      element.classList.add('animacion-out')
    }
}

// Aplicando animacion
window.addEventListener('scroll',() => {
fadeAnimation('noticia-container');
})