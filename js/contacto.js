function inicializarMapa() {
    const ubicacion = { lat: 40.712776, lng: -74.005974 }; // Coordenadas de Nueva York (ejemplo)
    const mapa = new google.maps.Map(document.getElementById("mapa"), {
        center: ubicacion,
        zoom: 15,
    });

    const marcador = new google.maps.Marker({
        position: ubicacion,
        map: mapa,
        title: "Mi Empresa S.A.",
    });
}