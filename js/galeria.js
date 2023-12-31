const imagenes = [
    '../img/galeria/1.jpg',
    '../img/galeria/2.jpg',
    '../img/galeria/3.jpg',
    '../img/galeria/4.jpg',
    '../img/galeria/5.jpg',
    '../img/galeria/6.jpg',
];

const galeria = document.getElementById('galeria');

// Cargar las imágenes en la galería
imagenes.forEach(rutaImagen => {
    const imagen = document.createElement('img');
    imagen.classList.add('imagen', 'efecto-imagen', 'hvr-grow'); 
    imagen.src = rutaImagen;
    galeria.appendChild(imagen);
});

// Agrega el efecto de zoom a las imágenes al hacer clic
const imagenesConEfecto = document.querySelectorAll('.efecto-imagen');
imagenesConEfecto.forEach(imagen => {
    imagen.addEventListener('click', () => {
        imagen.classList.toggle('zoom');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const menuGaleria = document.querySelector(".menu .list-container ul li a[href='galeria.html']");
    menuGaleria.classList.add("active");
  });
  