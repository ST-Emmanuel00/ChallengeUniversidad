function   validacion_parqueadero(){
    let ER_parqueadero = /^S+[0-9]{3}$/
    const parqueadero = document.getElementById('parqueadero').value
    let rparqueadero = document.getElementById('rparqueadero')
    try {
        if (ER_parqueadero.test(parqueadero)){
            rparqueadero.innerHTML = ''
        }
        else throw 'no es valido '+parqueadero
    } catch (error) {
        let rparqueadero = document.getElementById('rparqueadero')
        rparqueadero.innerHTML = error;
        rparqueadero.style.color = 'red';
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