const btnRecuperar = document.getElementById('enviar');
  btnRecuperar.addEventListener('click', () => {
    const input = document.getElementById('codigo')
    const ExpresionCodigo = /^[0-9]{6}$/;
    if(input.value == ''){
        Swal.fire({
            icon: 'error',
            title: 'Tienes el campo vacio',
            text: 'Por favor, complete el campo vacio'
          })
    }else if(!ExpresionCodigo.test(input.value)){
      Swal.fire({
        icon: 'error',
        title: 'El codigo es invalido',
        text: 'Por favor verifique'
    })
    }
    else{
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Validando...',
      showConfirmButton: false,
      timer: 1500
    }).then(() => {
      setTimeout(() => {
        window.location.href = 'restablecerC';
      }, 1000);
    });
}
  })

const btnContinuar = document.getElementById('continuar');
btnContinuar.addEventListener('click', () => {
    const input = document.getElementById('correo');
    const expresionEmail = /^([a-zA-Z0-9]+)\@[a-zA-Z]+\.[a-zA-Z]+$/;
    if (input.value === '') {
        Swal.fire({
            icon: 'error',
            title: 'Tienes el campo vacío',
            text: 'Por favor, complete el campo vacío'
        }).then(() => {
            window.location.href = 'recuperarC';
            // window.location.reload()
        });
    }else if(!expresionEmail.test(input.value)){
      Swal.fire({
        icon: 'error',
        title: 'El correo es invalido',
        text: 'Por favor verifique'
    }).then(() => {
        window.location.href = 'recuperarC';
        // window.location.reload()
    });
    }
      })








