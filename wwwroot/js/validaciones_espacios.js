const tipo_espacio = document.querySelector('#tipo_espacio')
const nombre_espacio = document.querySelector('#nombre_espacio')
const area = document.querySelector('#area')
const capacidad = document.querySelector('#capacidad')

nombre_espacio.addEventListener('input', validacion_nombre_espacio)
area.addEventListener('input', validacion_area)
capacidad.addEventListener('input', validacion_capacidad)

tipo_espacio.addEventListener('change', () => {

    const tipo_espacio = document.querySelector('#tipo_espacio')
    const div_area = document.querySelector('#div_area')
    const div_capacidad = document.querySelector('#div_capacidad')

    if (tipo_espacio.value === 'PARQUEADERO') {

        div_area.style.display = 'none'
        div_capacidad.style.display = 'none'
        area.value = null
        capacidad.value = null

        console.log(capacidad.value)

    }

    else if (tipo_espacio.value === 'APARTAMENTO') {

        div_area.style.display = 'block'
        div_capacidad.style.display = 'none'
        capacidad.value = null

    }

    else if (tipo_espacio.value === 'SALON SOCIAL') {

        div_area.style.display = 'block'
        div_capacidad.style.display = 'block'

    }

    else if (tipo_espacio.value === 'ZONA HUMEDA') {

        div_area.style.display = 'none'
        div_capacidad.style.display = 'block'
        area.value = null 

    }


})

// const boton_crear = document.getElementById('#boton_crear').addEventListener('change', ()=> {

//     console.log('le diste click')
//     validacion_tipo_documento_propietario()
//     validacion_numero_documento_propietario()
//     validacion_nombre_propietario()
//     validacion_apellido_propietario()
//     validacion_fecha_nacimiento()
//     validacion_genero_propietario()
//     validacion_telefono_propietario()
//     validacion_correo()


//     validacion_fecha_inicio()
// })





function validacion_nombre_espacio() {

    try {

        const ER_nombre_espacio = /^[A-Z0-9\s]+$/;
        const nombre_espacio = document.querySelector('#nombre_espacio');
        const FB_nombre_espacio = document.querySelector('#FB_nombre_espacio');

        nombre_espacio.value = nombre_espacio.value.toUpperCase()

        if (ER_nombre_espacio.test(nombre_espacio.value)) {

            nombre_espacio.style.borderColor = ''

            FB_nombre_espacio.innerHTML = '';
            FB_nombre_espacio.style.color = ''
        }

        else throw 'Nombre de espacio no valido';

    } catch (error) {

        FB_nombre_espacio.innerHTML = error;
        nombre_espacio.style.borderColor = 'red'
        FB_nombre_espacio.style.color = 'red'

    }

}

function validacion_area() {

    try {

        const ER_area = /^[0-9]+$/

        const area = document.querySelector('#area');
        const FB_area = document.querySelector('#FB_area');

        area.value = area.value.toUpperCase()

        if (ER_area.test(area.value)) {

            area.style.borderColor = ''

            FB_area.innerHTML = '';
            FB_area.style.color = ''
        }

        else throw 'Lo siento, no es valido ' + area.value;;

    } catch (error) {

        FB_area.innerHTML = error;
        area.style.borderColor = 'red'
        FB_area.style.color = 'red'

    }

}

function validacion_capacidad() {

    try {

        const ER_capacidad = /^[0-9]+$/

        const capacidad = document.querySelector('#capacidad');
        const FB_capacidad = document.querySelector('#FB_capacidad');

        capacidad.value = capacidad.value.toUpperCase()

        if (ER_capacidad.test(capacidad.value)) {

            capacidad.style.borderColor = ''

            FB_capacidad.innerHTML = '';
            FB_capacidad.style.color = ''
        }

        else throw 'Lo siento, no es valido ' + capacidad.value;;

    } catch (error) {

        FB_capacidad.innerHTML = error;
        capacidad.style.borderColor = 'red'
        FB_capacidad.style.color = 'red'

    }

}


