function validacionTR() {
    const tipo = (document.getElementById("tipo_Espacio")).value
    console.log(tipo)
    if (tipo == "ZONA HUMEDA") {
        document.getElementById("espacioh").style.display = '';
        document.getElementById("espacioh").value = '';
        document.getElementById("espaciop").style.display = 'none';
        document.getElementById("espacioss").style.display = 'none';
    }
    else if (tipo == "PARQUEADERO") {
        document.getElementById("espacioh").style.display = 'none';
        document.getElementById("espaciop").style.display = '';
        document.getElementById("espaciop").value = '';
        document.getElementById("espacioss").style.display = 'none';
    }
    else if (tipo == "SALON SOCIAL") {
        document.getElementById("espacioh").style.display = 'none';
        document.getElementById("espaciop").style.display = 'none';
        document.getElementById("espacioss").style.display = '';
        document.getElementById("espacioss").value = '';
    }

}

function validacion_placa() {
    try {
        const verificacionplaca = /^[A-Z]{3}-[0-9]{3}$/

        const placa = (document.getElementById("placa")).value
        const Uplaca = placa.toUpperCase()
        const rplaca = document.getElementById('rplaca');

        if (verificacionplaca.test(Uplaca)) {
            rplaca.innerHTML = '';
        }

        else throw 'Lo siento, no es valido ' + Uplaca;

    } catch (error) {
        const rplaca = document.getElementById('rplaca');

        rplaca.innerHTML = error;
        rplaca.style.color = 'red'

    }
}
function validacion_parqueadero() {
    try {
        const verificacionparqueadero = /^[A-Z]{1}[0-9]{3}$/

        const placa = (document.getElementById("parqueadero")).value
        const Uplaca = placa.toUpperCase()
        const rplaca = document.getElementById('rparqueadero');

        if (verificacionparqueadero.test(Uplaca)) {
            rplaca.innerHTML = '';
        }

        else throw 'Lo siento, no es valido ' + Uplaca;

    } catch (error) {
        const rplaca = document.getElementById('rparqueadero');

        rplaca.innerHTML = error;
        rplaca.style.color = 'red'

    }
}
function validacion_persona() {
    try {
        const verificacionnombre = /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/

        const nombre = (document.getElementById("nombre")).value
        // const Unombre = nombre.toUpperCase()
        const rnombre = document.getElementById('rnombre');

        if (verificacionnombre.test(nombre)) {
            rnombre.innerHTML = '';
        }

        else throw 'Lo siento, no es valido ' + nombre;

    } catch (error) {
        const rnombre = document.getElementById('rnombre');

        rnombre.innerHTML = error;
        rnombre.style.color = 'red'

    }
}
function validacion_fecha() {
    try {
        const tipo = document.getElementById('tipo_Espacio')
        const rfecha = document.getElementById('rfecha')
        let fecha = document.getElementById('fecha reserva')
        let fechaActual = new Date(fecha.value)
        if (tipo.value == "SALON SOCIAL") {
            let fechaVerificar = new Date();
            fechaVerificar.setDate(fechaVerificar.getDate() + 15)
            console.log(fechaVerificar)
            console.log(fecha.value)
            console.log(fechaActual)

            if (fechaActual.getTime() > fechaVerificar.getTime()) {
                rfecha.innerHTML = '';
            }
            else throw 'Error'
        }
        else {

        }
    } catch (error) {
        const rnombre = document.getElementById('rfecha');

        rnombre.innerHTML = error;
        rnombre.style.color = 'red'
    }

}
function validacion_cantidad() {
    const cantidad = document.getElementById('cantidad');
    const rcantidad = document.getElementById('rcantidad');
    try {

        if (cantidad > 0) {
            rcantidad.innerHTML = ''
        }
        else throw "la cantidad tiene que ser mayor a 0"
    } catch (error) {
        rcantidad.innerHTML = error
        rcantidad.style.color = 'red'
    }
}