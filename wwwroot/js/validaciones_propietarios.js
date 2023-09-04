const tipo_documento_propietario = document.querySelector('#tipo_documento_propietario')
const numero_documento = document.querySelector('#numero_documento_propietario')
const nombre_propietario = document.querySelector('#nombre_propietario')
const apellido_propietario = document.querySelector('#apellido_propietario')
const fecha_nacimiento = document.querySelector('#fecha_nacimiento')
const genero_propietario = document.querySelector('#genero_propietario')
const telefono_propietario = document.querySelector('#telefono_propietario')
const correo = document.querySelector('#correo')

tipo_documento_propietario.addEventListener('input', validacion_tipo_documento_propietario)
numero_documento.addEventListener('input', validacion_numero_documento_propietario)
nombre_propietario.addEventListener('input', validacion_nombre_propietario)
apellido_propietario.addEventListener('input', validacion_apellido_propietario )
fecha_nacimiento.addEventListener('input', validacion_fecha_nacimiento)
genero_propietario.addEventListener('input', validacion_genero_propietario)
telefono_propietario.addEventListener('input', validacion_telefono_propietario)
correo.addEventListener('input', validacion_correo)

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






function validacion_tipo_documento_propietario() {

    try {

        const tipo_documento_propietario = document.querySelector('#tipo_documento_propietario')
        const FB_tipo_documento = document.querySelector('#FB_tipo_documento')
        if (tipo_documento_propietario.value == '') throw 'Debes selecionar un tipo de documento'
        else {

            const boton_crear = document.getElementById('boton_crear')
            // boton_crear.disabled = false

            tipo_documento_propietario.style.borderColor = ''
            FB_tipo_documento.innerHTML = '';
            FB_tipo_documento.color = ''

        }

    } catch (error) {

        const boton_crear = document.getElementById('boton_crear')
        // boton_crear.disabled = true

        const tipo_documento_propietario = document.querySelector('#tipo_documento_propietario');
        const FB_tipo_documento = document.querySelector('#FB_tipo_documento');

        tipo_documento_propietario.style.borderColor = '#900D09'
        FB_tipo_documento.innerHTML = error;
        FB_tipo_documento.style.color = '#900D09';

    }
}







function validacion_genero_propietario() {

    try {

        const genero_propietario = document.querySelector('#genero_propietario')
        const FB_genero_propietario = document.querySelector('#FB_genero_propietario')
        if (genero_propietario.value == '') throw 'Debes selecionar un genero'
        else {

            const boton_crear = document.getElementById('boton_crear')
            // boton_crear.disabled = false

            genero_propietario.style.borderColor = ''
            FB_genero_propietario.innerHTML = '';
            FB_genero_propietario.color = ''

        }

    } catch (error) {

        const boton_crear = document.getElementById('boton_crear')
        // boton_crear.disabled = true

        const genero_propietario = document.querySelector('#genero_propietario')
        const FB_genero_propietario = document.querySelector('#FB_genero_propietario')

        genero_propietario.style.borderColor = '#900D09'
        FB_genero_propietario.innerHTML = error;
        FB_genero_propietario.style.color = '#900D09';

    }
}


function validacion_numero_documento_propietario() {
    console.log('Estas en la validacion de documento propietarios')
    try {

        const ER_numero_documento = /^[0-9]{8,}$/

        const numero_documento = document.querySelector('#numero_documento_propietario');
        const FB_documento = document.querySelector('#FB_documento');

        if (ER_numero_documento.test(numero_documento.value) == true) {

            const boton_crear = document.getElementById('boton_crear')
            // boton_crear.disabled = false

            numero_documento.style.borderColor = ''
            FB_documento.innerHTML = '';
            FB_documento.color = ''

        }

        else throw 'El numero de documento tiene mas digitos y no tiene letras';



    } catch (error) {

        const boton_crear = document.getElementById('boton_crear')
        // boton_crear.disabled = true

        const numero_documento = document.querySelector('#numero_documento_propietario');
        const FB_documento = document.querySelector('#FB_documento');

        numero_documento.style.borderColor = '#900D09'
        FB_documento.innerHTML = error;
        FB_documento.style.color = '#900D09';


    }

}
function validacion_nombre_propietario() {

    try {

        const ER_nombre = /^[A-Za-z\s]+$/

        const nombre = document.querySelector('#nombre_propietario');
        const FB_nombre = document.querySelector('#FB_nombre');



        nombre.value = nombre.value.toUpperCase()

        if (ER_nombre.test(nombre.value)) {

            const boton_crear = document.getElementById('boton_crear')
            // boton_crear.disabled = false


            nombre.style.borderColor = ''

            FB_nombre.innerHTML = '';
            FB_nombre.style.color = ''

            // boton_crear.disabled = false
        }

        else {

            throw 'El nombre no debe tener numeros ni simbolos';

        }

    } catch (error) {

        const boton_crear = document.getElementById('boton_crear')
        // boton_crear.disabled = true
        console.log(boton_crear)

        const nombre = document.querySelector('#nombre_propietario');
        const FB_nombre = document.querySelector('#FB_nombre');

        FB_nombre.innerHTML = error;
        nombre.style.borderColor = '#900D09'

        FB_nombre.style.color = '#900D09'

    }

}

function validacion_apellido_propietario() {

    try {

        const ER_apellido = /^[A-Za-z\s]+$/

        const apellido = document.querySelector('#apellido_propietario');
        const FB_apellido = document.querySelector('#FB_apellido');

        apellido.value = apellido.value.toUpperCase()

        if (ER_apellido.test(apellido.value)) {

            const boton_crear = document.getElementById('boton_crear')
            // boton_crear.disabled = false

            apellido.style.borderColor = ''

            FB_apellido.innerHTML = '';
            FB_apellido.style.color = ''

            // boton_crear.disabled = false
        }

        else {
            throw 'El apellido no debe contener numeros ni simbolos'
        };

    } catch (error) {

        const boton_crear = document.getElementById('boton_crear')
        // boton_crear.disabled = true

        const apellido = document.querySelector('#apellido_propietario');
        const FB_apellido = document.querySelector('#FB_apellido');

        FB_apellido.innerHTML = error;
        apellido.style.borderColor = '#900D09'
        FB_apellido.style.color = '#900D09'

    }

}

// 

function validacion_correo() {

    try {

        const ER_correo = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/

        const correo = document.querySelector('#correo');
        const FB_correo = document.querySelector('#FB_correo');

        if (ER_correo.test(correo.value)) {

            const boton_crear = document.getElementById('boton_crear')
            // boton_crear.disabled = false

            correo.style.borderColor = ''

            FB_correo.innerHTML = '';
            FB_correo.style.color = ''
        }

        else throw 'Lo siento, no es valido ' + correo.value;

    } catch (error) {

        const boton_crear = document.getElementById('boton_crear')
        // boton_crear.disabled = true

        const correo = document.querySelector('#correo');
        const FB_correo = document.querySelector('#FB_correo');

        FB_correo.innerHTML = error;
        correo.style.borderColor = '#900D09'
        FB_correo.style.color = '#900D09'

    }

}

function validacion_telefono_propietario() {

    try {

        const ER_telefono = /^[0-9]{10}$/

        const telefono = document.querySelector('#telefono_propietario');
        const FB_telefono = document.querySelector('#FB_telefono');

        if (ER_telefono.test(telefono.value)) {

            const boton_crear = document.getElementById('boton_crear')
            // boton_crear.disabled = false

            telefono.style.borderColor = ''

            FB_telefono.innerHTML = '';
            FB_telefono.style.color = ''
        }

        else throw 'Lo siento, no es valido ' + telefono.value;;

    } catch (error) {

        const boton_crear = document.getElementById('boton_crear')
        // boton_crear.disabled = true

        const telefono = document.querySelector('#telefono_propietario');
        const FB_telefono = document.querySelector('#FB_telefono');

        FB_telefono.innerHTML = error;
        telefono.style.borderColor = '#900D09'
        FB_telefono.style.color = '#900D09'

    }

}
function validacion_fecha_nacimiento() {

    const fecha_nacimiento = document.querySelector('#fecha_nacimiento');

    const FB_fecha_nacimiento = document.querySelector('#FB_fecha_nacimiento');


    const fecha_actual = new Date()

    console.log(new Date(fecha_nacimiento.value))
    console.log(new Date(fecha_actual))
    try {

        


        if (new Date(fecha_nacimiento.value) > new Date(fecha_actual)) {

            throw 'La fecha de nacimiento debe ser anterior a la fecha actual'

        }

        else if (isNaN(new Date(fecha_nacimiento.value))) {

            throw 'Debes seleccionar la fecha de nacimiento'
        }

        else {

            const boton_crear = document.getElementById('boton_crear')
            // boton_crear.disabled = false

            // console.log('Continua viendo precios de vuelos');
            fecha_nacimiento.style.borderColor = '';
            fecha_nacimiento.style.borderColor = '';
            FB_fecha_nacimiento.innerHTML = '';

        }
    } catch (error) {

        const boton_crear = document.getElementById('boton_crear')
        // boton_crear.disabled = true

        const fecha_nacimiento = document.querySelector('#fecha_nacimiento');
        const FB_fecha_nacimiento = document.querySelector('#FB_fecha_nacimiento');

        FB_fecha_nacimiento.innerHTML = error;
        fecha_nacimiento.style.borderColor = '#900D09';
        FB_fecha_nacimiento.style.color = '#900D09';


    }
}










