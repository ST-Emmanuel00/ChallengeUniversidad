const url = 'https://apptower-bk.onrender.com/api/residentes'

const listar_residentes = async () => {

  console.log('Si estas dentro')

  let body = document.getElementById('contenido_residentes')


  if (body) {

    let mensaje = ''


    fetch(url)
      .then(res => res.json())
      .then(function (data) {
        let lista_residentes = data.residentes
        lista_residentes.map((residentes, item) => {


          (residentes.estado == 'ACTIVO') ? resaltato = 'badge-success' : resaltato = 'badge-danger'
          // (residentes.habita == true)?respuesta = 'SI':respuesta = 'NO'

          function formato_fecha(fecha_node) {

            let fecha = new Date(fecha_node)
        
            var dia = fecha.getDate();
            var mes = fecha.getMonth() + 1;
            var anio = fecha.getFullYear();
        
            fecha_resultado = anio + '-' + mes + '-' + dia;
        
            return fecha_resultado
          }



          mensaje += `<tr>

        
                <td>${item + 1}</td>
                <td>${residentes.tipo_documento_residente}</td>
                <td>${residentes.numero_documento_residente}</td>
                <td>${residentes.nombre_residente}</td>
                <td>${residentes.apellido_residente}</td>
                <td>${formato_fecha(residentes.fecha_nacimiento)}</td>
                <td>${residentes.genero_residente}</td>
                <td>${residentes.telefono_residente}</td>
                <td>${residentes.correo}</td>

                <td>${residentes.tipo_residente}</td>
                <td>${residentes.residencia}</td>
                <td>${residentes.habita === true ? 'SI' : 'NO'}</td>
                

                <td>${formato_fecha(residentes.fecha_inicio)}</td>
                <td>${formato_fecha(residentes.fecha_fin)}</td>


                <td><span class="badge ${resaltato}">${residentes.estado}</span></td>

                <td>

                <button class="btn btn-sm dropdown-toggle" type="button" id="actionMenuButton" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false"><i class = "fe fe-more-vertical fe-24"></i>
                </button>

                  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="actionMenuButton">

                    <button type="button" class="dropdown-item" data-toggle="modal" data-target="#eventModal"
                    onclick="">Crear envio</button>
                    
                    <button type="button" class="dropdown-item" data-toggle="modal" data-target="#eventModal"
                    onclick='editar_residente(${JSON.stringify(residentes)})'>Editar</button>
                    <a onclick="eliminar_residente('${residentes._id}')" class="dropdown-item" href="#">Eliminar</a>
                    <a class="dropdown-item" href="#"></a>

                  </div>

                </td>

              </tr>`

          body.innerHTML = mensaje

        }
        )
      })
  }
}

const actualizar_residente = async () => {

  console.log('lo intentaste bro')
  const _id = document.querySelector('#_id')
  const tipo_documento_residente = document.querySelector('#tipo_documento_residente')
  const numero_documento_residente = document.querySelector('#numero_documento_residente')
  const nombre_residente = document.querySelector('#nombre_residente')
  const apellido_residente = document.querySelector('#apellido_residente')
  const fecha_nacimiento = document.querySelector('#fecha_nacimiento')
  const genero_residente = document.querySelector('#genero_residente')
  const telefono_residente = document.querySelector('#telefono_residente')
  const correo = document.querySelector('#correo')
  const tipo_residente = document.querySelector('#tipo_residente')
  const residencia = document.querySelector('#residencia')
  const habita = document.querySelector('#habita')
  const fecha_inicio = document.querySelector('#fecha_inicio')
  const fecha_fin = document.querySelector('#fecha_fin')
  const estado = document.querySelector('#estado')

  

  let residentes = {
    _id: document.getElementById('_id').value,
    tipo_documento_residente: tipo_documento_residente.value,
    numero_documento_residente: numero_documento_residente.value,
    nombre_residente: nombre_residente.value,
    apellido_residente: apellido_residente.value,
    fecha_nacimiento: fecha_nacimiento.value,
    genero_residente: genero_residente.value,
    telefono_residente: telefono_residente.value,
    correo: correo.value,
    tipo_residente: tipo_residente.value,
    residencia: residencia.value,
    habita: habita.value,
    fecha_inicio: fecha_inicio.value,
    fecha_fin: fecha_fin.value,
    estado: estado.value,
  }


  // Validaciones POST espacios 

  const ER_nombre = /^[A-Za-z\s]+$/
  const ER_apellido = /^[A-Za-z\s]+$/
  const fecha_actual = new Date()
  const ER_telefono = /^[0-9]{10}$/
  const ER_correo = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/




  try {
    if (tipo_documento_residente.value === '' || numero_documento_residente.value === '' || nombre_residente.value === '' ||
      apellido_residente.value === '' || fecha_nacimiento.value === '' || genero_residente.value === '' ||
      telefono_residente.value === '' || correo.value === '' || tipo_residente.value === '' ||
      residencia.value === '' || habita.value === '' || fecha_inicio.value === '' || estado.value === '') {

      throw 'No puede haber campos vacíos';

    } else if (!ER_nombre.test(nombre_residente.value)) {

      throw 'El nombre de residente no es válido';


    } else if (!ER_apellido.test(apellido_residente.value)) {

      throw 'El apellido de residente no es válido';


    } else if (new Date(fecha_nacimiento.value) > new Date(fecha_actual)) {

      throw 'Fecha nacimiento no es valida';

    } else if (isNaN(new Date(fecha_nacimiento.value))) {

      throw 'Debes seleccionar la fecha de nacimiento';


    } else if (!ER_telefono.test(telefono_residente.value)) {

      throw 'El numero de telefono no es valido';

    } else if (!ER_correo.test(correo.value)) {

      throw 'El correo no es valido';

    } else if (new Date(fecha_inicio.value) > new Date(fecha_fin.value)) {

      throw 'La fecha de salida debe ser antes que la fecha de ingreso';

    } else if (new Date(fecha_inicio.value) > new Date(fecha_fin.value)) {

      throw 'La fecha de salida debe ser antes que la fecha de ingreso';

    }
    else if (isNaN(new Date(fecha_inicio.value))) {

      throw 'La fecha de salida debe ser antes que la fecha de ingreso';

    } else {

      fetch(url, {
        method: 'PUT',
        mode: 'cors',
        body: JSON.stringify(residentes),
        headers: { "Content-type": "application/json; charset=UTF-8" }

      })

        .then(response => response.json())
        .then(json => {
          Swal.fire({

            icon: 'success',
            title: '¡Éxito!',
            text: json.residentes,
            showCancelButton: false,
            showConfirmButton: true,
            allowOutsideClick: false

          }).then(() => {

            window.location.href = 'residentes'

          })
        })
        .catch(error => {
          Swal.fire({

            icon: 'error',
            title: 'Tienes un problema',
            text: error

          });
        });
    }
  } catch (error) {

    Swal.fire({

      icon: 'error',
      title: 'Tienes un problema',
      text: error

    });
  }



}

const editar_residente = async (residentes) => {

  console.log(residentes._id)

  document.getElementById('_id').value = residentes._id
  document.getElementById('tipo_documento_residente').value = residentes.tipo_documento_residente
  document.getElementById('numero_documento_residente').value = residentes.numero_documento_residente
  document.getElementById('nombre_residente').value = residentes.nombre_residente
  document.getElementById('apellido_residente').value = residentes.apellido_residente
  document.getElementById('fecha_nacimiento').value = residentes.fecha_nacimiento
  document.getElementById('genero_residente').value = residentes.genero_residente
  document.getElementById('telefono_residente').value = residentes.telefono_residente
  document.getElementById('correo').value = residentes.correo
  document.getElementById('tipo_residente').value = residentes.tipo_residente
  document.getElementById('residencia').value = residentes.residencia
  document.getElementById('habita').value = residentes.habita
  document.getElementById('fecha_inicio').value = residentes.fecha_inicio
  document.getElementById('fecha_fin').value = residentes.fecha_fin
  document.getElementById('estado').value = residentes.estado

}



const eliminar_residente = async (_id) => {
  Swal.fire({

    title: '¿Está seguro que quieres eliminar este item?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí',
    cancelButtonText: 'Cancelar'

  }).then((result) => {

    if (result.isConfirmed) {
      // Captura de valores de datos enviados desde el formulario
      let residente = {

        _id: _id

      };

      fetch(url, {

        method: 'DELETE',
        mode: 'cors',
        body: JSON.stringify(residente),
        headers: { "Content-type": "application/json; charset=UTF-8" }

      })
        .then(response => response.json())
        .then(json => {

          if (json.residente) {

            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: json.mensaje
            });

          } else {

            Swal.fire({
              icon: 'success',
              title: 'Eliminación Exitosa',
              text: 'Se eliminó la reserva correctamente',
            }).then(() => {

              location.reload();

            });

          }
        });
    }
  });



}




const registrar_residente = () => {



  const tipo_documento_residente = document.querySelector('#tipo_documento_residente')
  const numero_documento_residente = document.querySelector('#numero_documento_residente')
  const nombre_residente = document.querySelector('#nombre_residente')
  const apellido_residente = document.querySelector('#apellido_residente')
  const fecha_nacimiento = document.querySelector('#fecha_nacimiento')
  const genero_residente = document.querySelector('#genero_residente')
  const telefono_residente = document.querySelector('#telefono_residente')
  const correo = document.querySelector('#correo')
  const tipo_residente = document.querySelector('#tipo_residente')
  const residencia = document.querySelector('#residencia')
  const habita = document.querySelector('#habita')
  const fecha_inicio = document.querySelector('#fecha_inicio')
  const fecha_fin = document.querySelector('#fecha_fin')
  const estado = document.querySelector('#estado')

  let residentes = {

    tipo_documento_residente: tipo_documento_residente.value,
    numero_documento_residente: numero_documento_residente.value,
    nombre_residente: nombre_residente.value,
    apellido_residente: apellido_residente.value,
    fecha_nacimiento: fecha_nacimiento.value,
    genero_residente: genero_residente.value,
    telefono_residente: telefono_residente.value,
    correo: correo.value,
    tipo_residente: tipo_residente.value,
    residencia: residencia.value,
    habita: habita.value,
    fecha_inicio: fecha_inicio.value,
    fecha_fin: fecha_fin.value,
    estado: estado.value,

  }

  // Validaciones POST espacios 

  const ER_nombre = /^[A-Za-z\s]+$/
  const ER_apellido = /^[A-Za-z\s]+$/
  const fecha_actual = new Date()
  const ER_telefono = /^[0-9]{10}$/
  const ER_correo = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/




  try {
    if (tipo_documento_residente.value === '' || numero_documento_residente.value === '' || nombre_residente.value === '' ||
      apellido_residente.value === '' || fecha_nacimiento.value === '' || genero_residente.value === '' ||
      telefono_residente.value === '' || correo.value === '' || tipo_residente.value === '' ||
      residencia.value === '' || habita.value === '' || fecha_inicio.value === '' || estado.value === '') {

      throw 'No puede haber campos vacíos';

    } else if (!ER_nombre.test(nombre_residente.value)) {

      throw 'El nombre de residente no es válido';


    } else if (!ER_apellido.test(apellido_residente.value)) {

      throw 'El apellido de residente no es válido';


    } else if (new Date(fecha_nacimiento.value) > new Date(fecha_actual)) {

      throw 'Fecha nacimiento no es valida';

    } else if (isNaN(new Date(fecha_nacimiento.value))) {

      throw 'Debes seleccionar la fecha de nacimiento';


    } else if (!ER_telefono.test(telefono_residente.value)) {

      throw 'El numero de telefono no es valido';

    } else if (!ER_correo.test(correo.value)) {

      throw 'El correo no es valido';

    } else if (new Date(fecha_inicio.value) > new Date(fecha_fin.value)) {

      throw 'La fecha de salida debe ser antes que la fecha de ingreso';

    } else if (new Date(fecha_inicio.value) > new Date(fecha_fin.value)) {

      throw 'La fecha de salida debe ser antes que la fecha de ingreso';

    }
    else if (isNaN(new Date(fecha_inicio.value))) {

      throw 'La fecha de salida debe ser antes que la fecha de ingreso';

    } else {

      fetch(url, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(residentes),
        headers: { "Content-type": "application/json; charset=UTF-8" }

      })

        .then(response => response.json())
        .then(json => {
          Swal.fire({

            icon: 'success',
            title: '¡Éxito!',
            text: json.residentes,
            showCancelButton: false,
            showConfirmButton: true,
            allowOutsideClick: false

          }).then(() => {

            window.location.href = 'residentes'

          })
        })
        .catch(error => {
          Swal.fire({

            icon: 'error',
            title: 'Tienes un problema',
            text: error

          });
        });
    }
  } catch (error) {

    Swal.fire({

      icon: 'error',
      title: 'Tienes un problema',
      text: error

    });
  }

}




listar_residentes()

const boton_crear = document.querySelector('#boton_crear').addEventListener('click', () => {


    registrar_residente()

})

const boton_actualizar = document.querySelector('boton_actualizar').addEventListener('click', () => {

  console.log('hola puto')
  actualizar_residente();

})


