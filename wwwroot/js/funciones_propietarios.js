const url = 'https://apptower-bk.onrender.com/api/propietarios'

const listar_propietarios = async () => {

  console.log('Si estas dentro propietarios')

  let body = document.getElementById('contenido_propietarios')


  if (body) {

    let mensaje = ''


    fetch(url)
      .then(res => res.json())
      .then(function (data) {
        let lista_propietarios = data.propietarios
        lista_propietarios.map((propietarios, item) => {


          (propietarios.estado == 'ACTIVO') ? resaltato = 'badge-success' : resaltato = 'badge-danger'
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
                <td>${propietarios.tipo_documento_propietario}</td>
                <td>${propietarios.numero_documento_propietario}</td>
                <td>${propietarios.nombre_propietario}</td>
                <td>${propietarios.apellido_propietario}</td>
                <td>${formato_fecha(propietarios.fecha_nacimiento)}</td>
                <td>${propietarios.genero_propietario}</td>
                <td>${propietarios.telefono_propietario}</td>
                <td>${propietarios.correo}</td>

                <td>${propietarios.propiedad}</td>
                


                <td><span class="badge ${resaltato}">${propietarios.estado}</span></td>

                <td>

                <button class="btn btn-sm dropdown-toggle" type="button" id="actionMenuButton" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false"><i class = "fe fe-more-vertical fe-24"></i>
                </button>

                  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="actionMenuButton"

                    <button type="button" class="dropdown-item"
                    onclick="">Crear envio</button>

                    <button type="button" class="dropdown-item" data-toggle="modal" data-target="#eventModal"
                    onclick='editar_propietario(${JSON.stringify(propietarios)})'>Editar propietario</button>
                    <a onclick="eliminar_propietario('${propietarios._id}')" class="dropdown-item" href="#">Eliminar</a>
                    

                  </div>

                </td>

              </tr>`

          body.innerHTML = mensaje

        }
        )
      })
  }
}

const actualizar_propietario = async () => {

  console.log('lo intentaste bro')
  const _id = document.querySelector('#_id')
  const tipo_documento_propietario = document.querySelector('#tipo_documento_propietario')
  const numero_documento_propietario = document.querySelector('#numero_documento_propietario')
  const nombre_propietario = document.querySelector('#nombre_propietario')
  const apellido_propietario = document.querySelector('#apellido_propietario')
  const fecha_nacimiento = document.querySelector('#fecha_nacimiento')
  const genero_propietario = document.querySelector('#genero_propietario')
  const telefono_propietario = document.querySelector('#telefono_propietario')
  const correo = document.querySelector('#correo')
  const propiedad = document.querySelector('#propiedad')
  const estado = document.querySelector('#estado')

  let propietarios = {
    _id: document.getElementById('_id').value,
    tipo_documento_propietario: tipo_documento_propietario.value,
    numero_documento_propietario: numero_documento_propietario.value,
    nombre_propietario: nombre_propietario.value,
    apellido_propietario: apellido_propietario.value,
    fecha_nacimiento: fecha_nacimiento.value,
    genero_propietario: genero_propietario.value,
    telefono_propietario: telefono_propietario.value,
    correo: correo.value,
    propiedad: propiedad.value,
    estado: estado.value
  }


  // Validaciones POST espacios 

  const ER_nombre = /^[A-Za-z\s]+$/
  const ER_apellido = /^[A-Za-z\s]+$/
  const fecha_actual = new Date()
  const ER_telefono = /^[0-9]{10}$/
  const ER_correo = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/




  try {
    if (tipo_documento_propietario.value === '' || numero_documento_propietario.value === '' || nombre_propietario.value === '' ||
      apellido_propietario.value === '' || fecha_nacimiento.value === '' || genero_propietario.value === '' ||
      telefono_propietario.value === '' || correo.value === '' || propiedad.value === '' || estado.value === '') {

      throw 'No puede haber campos vacíos';

    } else if (!ER_nombre.test(nombre_propietario.value)) {

      throw 'El nombre de propietario no es válido';


    } else if (!ER_apellido.test(apellido_propietario.value)) {

      throw 'El apellido de propietario no es válido';


    } else if (new Date(fecha_nacimiento.value) > new Date(fecha_actual)) {

      throw 'Fecha nacimiento no es valida';

    } else if (isNaN(new Date(fecha_nacimiento.value))) {

      throw 'Debes seleccionar la fecha de nacimiento';


    } else if (!ER_telefono.test(telefono_propietario.value)) {

      throw 'El numero de telefono no es valido';

    } else if (!ER_correo.test(correo.value)) {

      throw 'El correo no es valido';

    } else {

      fetch(url, {
        method: 'PUT',
        mode: 'cors',
        body: JSON.stringify(propietarios),
        headers: { "Content-type": "application/json; charset=UTF-8" }

      })

        .then(response => response.json())
        .then(json => {
          Swal.fire({

            icon: 'success',
            title: '¡Éxito!',
            text: json.propietarios,
            showCancelButton: false,
            showConfirmButton: true,
            allowOutsideClick: false

          }).then(() => {

            window.location.href = 'propietarios'

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

const editar_propietario = (propietarios) => {

  console.log(propietarios._id)

  document.getElementById('_id').value = propietarios._id
  document.getElementById('tipo_documento_propietario').value = propietarios.tipo_documento_propietario
  document.getElementById('numero_documento_propietario').value = propietarios.numero_documento_propietario
  document.getElementById('nombre_propietario').value = propietarios.nombre_propietario
  document.getElementById('apellido_propietario').value = propietarios.apellido_propietario
  document.getElementById('fecha_nacimiento').value = propietarios.fecha_nacimiento
  document.getElementById('genero_propietario').value = propietarios.genero_propietario
  document.getElementById('telefono_propietario').value = propietarios.telefono_propietario
  document.getElementById('correo').value = propietarios.correo
  document.querySelector('#propiedad').value = propietarios.propiedad

  document.getElementById('estado').value = propietarios.estado

}



const eliminar_propietario = (_id,) => {
  Swal.fire({

    title: '¿Está seguro que quieres eliminar este item?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí',
    cancelButtonText: 'Cancelar'

  }).then((result) => {

    if (result.isConfirmed) {
      // Captura de valores de datos enviados desde el formulario
      let propietario = {

        _id: _id

      };

      fetch(url, {

        method: 'DELETE',
        mode: 'cors',
        body: JSON.stringify(propietario),
        headers: { "Content-type": "application/json; charset=UTF-8" }

      })
        .then(response => response.json())
        .then(json => {

          if (json.propietario) {

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




const registrar_propietario = () => {

  console.log('Si esta propietario')

  const tipo_documento_propietario = document.querySelector('#tipo_documento_propietario')
  const numero_documento_propietario = document.querySelector('#numero_documento_propietario')
  const nombre_propietario = document.querySelector('#nombre_propietario')
  const apellido_propietario = document.querySelector('#apellido_propietario')
  const fecha_nacimiento = document.querySelector('#fecha_nacimiento')
  const genero_propietario = document.querySelector('#genero_propietario')
  const telefono_propietario = document.querySelector('#telefono_propietario')
  const correo = document.querySelector('#correo')
  const propiedad = document.querySelector('#propiedad')
  const estado = document.querySelector('#estado')

  let propietarios = {

    tipo_documento_propietario: tipo_documento_propietario.value,
    numero_documento_propietario: numero_documento_propietario.value,
    nombre_propietario: nombre_propietario.value,
    apellido_propietario: apellido_propietario.value,
    fecha_nacimiento: fecha_nacimiento.value,
    genero_propietario: genero_propietario.value,
    telefono_propietario: telefono_propietario.value,
    correo: correo.value,
    propiedad: propiedad.value,
    estado: estado.value

  }


  // Validaciones POST espacios 

  const ER_nombre = /^[A-Za-z\s]+$/
  const ER_apellido = /^[A-Za-z\s]+$/
  const fecha_actual = new Date()
  const ER_telefono = /^[0-9]{10}$/
  const ER_correo = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/




  try {
    if (tipo_documento_propietario.value === '' || numero_documento_propietario.value === '' || nombre_propietario.value === '' ||
      apellido_propietario.value === '' || fecha_nacimiento.value === '' || genero_propietario.value === '' ||
      telefono_propietario.value === '' || correo.value === '' || propiedad.value === '' || estado.value === '') {

      throw 'No puede haber campos vacíos';

    } else if (!ER_nombre.test(nombre_propietario.value)) {

      throw 'El nombre de propietario no es válido';


    } else if (!ER_apellido.test(apellido_propietario.value)) {

      throw 'El apellido de propietario no es válido';


    } else if (new Date(fecha_nacimiento.value) > new Date(fecha_actual)) {

      throw 'Fecha nacimiento no es valida';

    } else if (isNaN(new Date(fecha_nacimiento.value))) {

      throw 'Debes seleccionar la fecha de nacimiento';


    } else if (!ER_telefono.test(telefono_propietario.value)) {

      throw 'El numero de telefono no es valido';

    } else if (!ER_correo.test(correo.value)) {

      throw 'El correo no es valido';

    } else {

      fetch(url, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(propietarios),
        headers: { "Content-type": "application/json; charset=UTF-8" }

      })

        .then(response => response.json())
        .then(json => {
          Swal.fire({

            icon: 'success',
            title: '¡Éxito!',
            text: json.propietarios,
            showCancelButton: false,
            showConfirmButton: true,
            allowOutsideClick: false

          }).then(() => {

            window.location.href = 'propietarios'

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




listar_propietarios()

const boton_crear = document.querySelector('#boton_crear').addEventListener('click', () => {



  registrar_propietario()


})

const boton_actualizar = document.querySelector('boton_actualizar').addEventListener('click', () => {

  actualizar_propietario();
})




