document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("presupuestoForm");
    const productoSelect = document.getElementById("producto");
    const plazoInput = document.getElementById("plazo");
    const extrasCheckboxes = document.querySelectorAll('input[type="checkbox"][value]');
    const presupuestoFinalInput = document.getElementById("presupuestoFinal");

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

        const nombre = document.getElementById("nombre").value;
        const apellidos = document.getElementById("apellidos").value;
        const telefono = document.getElementById("telefono").value;
        const correo = document.getElementById("correo").value;

        if (!validarDatosContacto(nombre, apellidos, telefono, correo)) {
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

        document.getElementById("presupuestoFinal").value = `$${presupuestoFinal.toFixed(2)}`;
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
});