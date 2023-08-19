document.addEventListener("DOMContentLoaded", function () {
  // Coordenadas de tu empresa (valores ficticios)
  const empresaCoords = [4.639386, -74.082412];
  let ruta = null; // Variable para almacenar la ruta actual
  let marcador = null; // Variable para almacenar el marcador actual

  // Crear el mapa
  let map = L.map('map').setView(empresaCoords, 13);

  // Agregar capa de mapa base desde OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Crear un marcador para la empresa
  const empresaMarker = L.marker(empresaCoords)
    .bindPopup('Ubicación de Samu') // Mensaje personalizado en el popup
    .addTo(map);

  // Evento para cambiar la ubicación del mapa al seleccionar una opción
  document.getElementById('select-location').addEventListener('change', function (e) {
    let coords = e.target.value.split(",");

    // Eliminar la ruta anterior si existe
    if (ruta) {
      map.removeLayer(ruta);
    }

    // Eliminar el marcador anterior si existe
    if (marcador) {
      map.removeLayer(marcador);
    }

    // Crear una nueva ruta desde la ubicación seleccionada hasta tu empresa
    ruta = L.polyline([empresaCoords, coords], { color: 'blue' }).addTo(map);

    // Ajustar la vista del mapa para mostrar la ruta completa
    const bounds = L.latLngBounds([empresaCoords, coords]);
    map.fitBounds(bounds);

    // Agregar un marcador en la ubicación seleccionada
    marcador = L.marker(coords).addTo(map)
      .bindPopup('Ubicación del cliente')
      .openPopup();
  });
  // Resaltar el enlace activo en el menú de navegación (código para resaltar el enlace)
  const menuContacto = document.querySelector(".menu .list-container ul li a[href='contacto.html']");
  menuContacto.classList.add("active");
});
