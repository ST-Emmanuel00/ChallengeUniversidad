const btnGuardar = document.getElementById('guardar');
  btnGuardar.addEventListener('click', () => {
    const input = document.getElementById('nuevaC')
    const inputs = document.getElementById('contrasena')
    const expresionpassword =  /^[a-zA-Z0-9]{8,}$/;
 
    if(input.value == '' || inputs.value == '') {
        Swal.fire({
            icon: 'error',
            title: 'Tienes campos vacios',
            text: 'Por favor, complete el campo vacio'
          })
    }else if(!expresionpassword.test(input.value) || (!expresionpassword.test(inputs.value))){
      Swal.fire({
        icon: 'error',
        title: 'La contraseña es invalida',
        text: 'Por favor verifique'
    })
    }
    else if(input.value !== inputs.value){
        Swal.fire({
            icon: 'error',
            title: 'La contraseñas no coinciden',
            text: 'Por favor verifique'
        })
    }
    else{
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Cambios Guardados',
      showConfirmButton: false,
      timer: 1500
    }).then(() => {
      setTimeout(() => {
        window.location.href = '/';
      }, 1000);
    });
}
  })