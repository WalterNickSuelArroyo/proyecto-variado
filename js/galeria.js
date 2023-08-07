const imagenes = [
    '../img/galeria/1.jpg',
    '../img/galeria/2.jpg',
    '../img/galeria/3.jpg',
    '../img/galeria/4.jpg',
    '../img/galeria/5.jpg',
    '../img/galeria/6.jpg',
    // Agrega aquí las rutas de las imágenes que desees mostrar
];

const galeria = document.getElementById('galeria');

// Cargar las imágenes en la galería
imagenes.forEach(rutaImagen => {
    const imagen = document.createElement('img');
    imagen.classList.add('imagen');
    imagen.src = rutaImagen;
    galeria.appendChild(imagen);
});
