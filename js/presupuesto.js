document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("presupuestoForm");
    const productoSelect = document.getElementById("producto");
    const plazoInput = document.getElementById("plazo");
    const extrasCheckboxes = document.querySelectorAll('input[type="checkbox"][value]');
    const presupuestoFinalInput = document.getElementById("presupuestoFinal");
    const successMessage = document.getElementById("successMessage");

    const nombre = document.getElementById("nombre");
    const apellidos = document.getElementById("apellidos");
    const telefono = document.getElementById("telefono");
    const correo = document.getElementById("correo");

    const nombreError = document.getElementById("nombreError");
    const apellidosError = document.getElementById("apellidosError");
    const telefonoError = document.getElementById("telefonoError");
    const correoError = document.getElementById("correoError");

    nombre.addEventListener("input", function () {
        if (nombre.value === "") {
            nombreError.textContent = "Por favor, ingrese un nombre.";
        } else {
            nombreError.textContent = "";
        }
    });

    apellidos.addEventListener("input", function () {
        if (apellidos.value === "") {
            apellidosError.textContent = "Por favor, ingrese los apellidos.";
        } else {
            apellidosError.textContent = "";
        }
    });

    telefono.addEventListener("input", function () {
        if (telefono.value === "") {
            telefonoError.textContent = "Por favor, ingrese un número de teléfono.";
        } else {
            telefonoError.textContent = "";
        }
    });

    correo.addEventListener("input", function () {
        if (correo.value === "") {
            correoError.textContent = "Por favor, ingrese un correo electrónico.";
        } else {
            correoError.textContent = "";
        }
    });

    form.addEventListener("input", function () {
        const producto = parseFloat(productoSelect.value);
        const plazo = parseFloat(plazoInput.value);
        let extrasTotal = 0;

        extrasCheckboxes.forEach(checkbox => {
            if (checkbox.checked) {
                extrasTotal += parseFloat(checkbox.value);
            }
        });

        const descuento = calcularDescuento(plazo);
        const presupuestoFinal = producto + extrasTotal - descuento;

        presupuestoFinalInput.value = `$${presupuestoFinal.toFixed(2)}`;
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const nombreValue = nombre.value;
        const apellidosValue = apellidos.value;
        const telefonoValue = telefono.value;
        const correoValue = correo.value;

        if (!validarDatosContacto(nombreValue, apellidosValue, telefonoValue, correoValue)) {
            return;
        }

        const producto = parseFloat(productoSelect.value);
        const plazo = parseFloat(plazoInput.value);
        let extrasTotal = 0;

        extrasCheckboxes.forEach(checkbox => {
            if (checkbox.checked) {
                extrasTotal += parseFloat(checkbox.value);
            }
        });

        const descuento = calcularDescuento(plazo);
        const presupuestoFinal = producto + extrasTotal - descuento;

        presupuestoFinalInput.value = `$${presupuestoFinal.toFixed(2)}`;

        // Mostrar mensaje de éxito
        successMessage.style.display = "block";

        // Redirigir a la página de inicio
        setTimeout(function () {
            window.location.href = "../index.html"; // Actualiza esta URL si es necesario
        }, 2000); // Redirigir después de 2 segundos (ajusta según necesites)
    });

    function validarDatosContacto(nombre, apellidos, telefono, correo) {
        const nombreRegex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]{1,15}$/;
        const apellidosRegex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]{1,40}$/;
        const telefonoRegex = /^[0-9]{1,9}$/;
        const correoRegex = /^\S+@\S+\.\S+$/;

        if (!nombreRegex.test(nombre)) {
            alert("Nombre inválido. Debe contener solo letras y tener máximo 15 caracteres.");
            return false;
        }

        if (!apellidosRegex.test(apellidos)) {
            alert("Apellidos inválidos. Deben contener solo letras y tener máximo 40 caracteres.");
            return false;
        }

        if (!telefonoRegex.test(telefono)) {
            alert("Teléfono inválido. Debe contener solo números y tener máximo 9 dígitos.");
            return false;
        }

        if (!correoRegex.test(correo)) {
            alert("Correo electrónico inválido. Debe ser un correo válido (nnnnn_nnn@zzzzz.xxx).");
            return false;
        }

        return true;
    }

    function calcularDescuento(plazo) {
        const DESCUENTO_POR_PLAZO = 10;
        const PRECIO_POR_MES = 20;

        if (plazo >= 6) {
            return (plazo * PRECIO_POR_MES) * (DESCUENTO_POR_PLAZO / 100);
        }

        return 0;
    }
    // Obtener el enlace del menú para la página actual
    const menuPresupuesto = document.querySelector(".menu .list-container ul li a[href='presupuesto.html']");

    // Agregar la clase 'active' al enlace del menú de la página actual
    menuPresupuesto.classList.add("active");
});
