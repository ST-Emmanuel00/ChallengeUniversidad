const tipo_documento_visitante = document.querySelector('#tipo_documento_visitante')
const numero_documento = document.querySelector('#numero_documento_visitante')
const nombre_visitante = document.querySelector('#nombre_visitante')
const apellido_visitante = document.querySelector('#apellido_visitante')
const genero_visitante = document.querySelector('#genero_visitante')


tipo_documento_visitante.addEventListener('input', validacion_tipo_documento_visitante)
numero_documento.addEventListener('input', validacion_numero_documento_visitante)
nombre_visitante.addEventListener('input', validacion_nombre_visitante)
apellido_visitante.addEventListener('input', validacion_apellido_visitante)
genero_visitante.addEventListener('input', validacion_genero_visitante)


// const boton_crear = document.getElementById('#boton_crear').addEventListener('change', ()=> {

//     console.log('le diste click')
//     validacion_tipo_documento_visitante()
//     validacion_numero_documento_visitante()
//     validacion_nombre_visitante()
//     validacion_apellido_visitante()
//     validacion_fecha_nacimiento()
//     validacion_genero_visitante()
//     validacion_telefono_visitante()
//     validacion_correo()


//     validacion_fecha_inicio()
// })






function validacion_tipo_documento_visitante() {

    try {

        const tipo_documento_visitante = document.querySelector('#tipo_documento_visitante')
        const FB_tipo_documento = document.querySelector('#FB_tipo_documento')
        if (tipo_documento_visitante.value == '') throw 'Debes selecionar un tipo de documento'
        else {

            const boton_crear = document.getElementById('boton_crear')
            // boton_crear.disabled = false

            tipo_documento_visitante.style.borderColor = ''
            FB_tipo_documento.innerHTML = '';
            FB_tipo_documento.color = ''

        }

    } catch (error) {

        const boton_crear = document.getElementById('boton_crear')
        // boton_crear.disabled = true

        const tipo_documento_visitante = document.querySelector('#tipo_documento_visitante');
        const FB_tipo_documento = document.querySelector('#FB_tipo_documento');

        tipo_documento_visitante.style.borderColor = '#900D09'
        FB_tipo_documento.innerHTML = error;
        FB_tipo_documento.style.color = '#900D09';

    }
}


function validacion_genero_visitante() {

    try {

        const genero_visitante = document.querySelector('#genero_visitante')
        const FB_genero_visitante = document.querySelector('#FB_genero_visitante')
        if (genero_visitante.value == '') throw 'Debes selecionar un genero'
        else {

            const boton_crear = document.getElementById('boton_crear')
            // boton_crear.disabled = false

            genero_visitante.style.borderColor = ''
            FB_genero_visitante.innerHTML = '';
            FB_genero_visitante.color = ''

        }

    } catch (error) {

        const boton_crear = document.getElementById('boton_crear')
        // boton_crear.disabled = true

        const genero_visitante = document.querySelector('#genero_visitante')
        const FB_genero_visitante = document.querySelector('#FB_genero_visitante')

        genero_visitante.style.borderColor = '#900D09'
        FB_genero_visitante.innerHTML = error;
        FB_genero_visitante.style.color = '#900D09';

    }
}


function validacion_numero_documento_visitante() {
    console.log('Estas en la validacion de documento visitantes')
    try {

        const ER_numero_documento = /^[0-9]{8,}$/

        const numero_documento = document.querySelector('#numero_documento_visitante');
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

        const numero_documento = document.querySelector('#numero_documento_visitante');
        const FB_documento = document.querySelector('#FB_documento');

        numero_documento.style.borderColor = '#900D09'
        FB_documento.innerHTML = error;
        FB_documento.style.color = '#900D09';


    }

}
function validacion_nombre_visitante() {

    try {

        const ER_nombre = /^[A-Za-z\s]+$/

        const nombre = document.querySelector('#nombre_visitante');
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

        const nombre = document.querySelector('#nombre_visitante');
        const FB_nombre = document.querySelector('#FB_nombre');

        FB_nombre.innerHTML = error;
        nombre.style.borderColor = '#900D09'

        FB_nombre.style.color = '#900D09'

    }

}

function validacion_apellido_visitante() {

    try {

        const ER_apellido = /^[A-Za-z\s]+$/

        const apellido = document.querySelector('#apellido_visitante');
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

        const apellido = document.querySelector('#apellido_visitante');
        const FB_apellido = document.querySelector('#FB_apellido');

        FB_apellido.innerHTML = error;
        apellido.style.borderColor = '#900D09'
        FB_apellido.style.color = '#900D09'

    }

}











