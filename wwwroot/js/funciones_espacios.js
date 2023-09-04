// const { validacion_tipo_documento_residente,
//   validacion_numero_documento_residente,
//   validacion_nombre_residente,
//   validacion_apellido_residente,
//   validacion_fecha_nacimiento,
//   validacion_genero_residente,
//   validacion_telefono_residente,
//   validacion_correo,
//   validacion_tipo_residente,
//   validacion_fecha_inicio,
//   validacion_fecha_fin } = require('../js/validaciones_residentes')


const url = 'https://apptower-bk.onrender.com/api/espacios'

const listar_espacios = async () => {

  console.log('Si estas dentro espacios')

  let body = document.getElementById('contenido_espacios')


  if (body) {

    let mensaje = ''


    fetch(url)
      .then(res => res.json())
      .then(function (data) {
        let lista_espacios = data.espacios
        lista_espacios.map((espacio, item) => {


          (espacio.estado == 'ACTIVO') ? resaltato = 'badge-success' : resaltato = 'badge-danger'
          // (residentes.habita == true)?respuesta = 'SI':respuesta = 'NO'


          mensaje += `<tr>

        
                <td>${item + 1}</td>
                <td>${espacio.tipo_espacio}</td>
                <td>${espacio.nombre_espacio}</td>
                <td>${espacio.area}</td>
                <td>${espacio.capacidad}</td>
                           


                <td><span class="badge ${resaltato}">${espacio.estado}</span></td>

                <td>

                  <button class="btn btn-sm dropdown-toggle" type="button" id="actionMenuButton" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false"><i class = "fe fe-more-vertical fe-24"></i>
                  </button>

                  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="actionMenuButton">

                    <button type="button" class="dropdown-item" data-toggle="modal" data-target="#eventModal"
                    onclick="">Crear propietario</button>

                    <button type="button" class="dropdown-item" data-toggle="modal" data-target="#eventModal"
                    onclick='editar_espacio(${JSON.stringify(espacio)})'>Editar espacio</button>
                    <a onclick="eliminar_espacio('${espacio._id}')" class="dropdown-item" href="#">Eliminar espacio</a>

                  </div>

                </td>

              </tr>`

          body.innerHTML = mensaje

        }
        )
      })
  }
}

const actualizar_espacio = async () => {

  console.log('lo intentaste bro')
  const _id = document.querySelector('#_id')
  const tipo_espacio = document.querySelector('#tipo_espacio')
  const nombre_espacio = document.querySelector('#nombre_espacio')
  const area = document.querySelector('#area')
  const capacidad = document.querySelector('#capacidad')
  const estado = document.querySelector('#estado')

  area.value == 0 ? area.value = null: area.value
  capacidad.value == 0 ? capacidad.value = null: capacidad.value


  let espacio = {

    _id: document.getElementById('_id').value,
    tipo_espacio: tipo_espacio.value,
    tipo_espacio: tipo_espacio.value,
    nombre_espacio: nombre_espacio.value,
    area: area.value,
    capacidad: capacidad.value,
    estado: estado.value,


  }

  const ER_nombre_espacio = /^[A-Z0-9]+$/


  try {

    if (tipo_espacio.value === '' || nombre_espacio.value === '' || estado.value === '') {

      throw 'No puede haber campos vacíos';

    } else if (!ER_nombre_espacio.test(nombre_espacio.value)) {

      throw 'El nombre de espacio no es válido';

    } else if ( area.value < 0) {

      throw 'El area debe ser mayor a cero';

    }else if ( capacidad.value < 0) {

      throw 'La capacidad debe ser mayor a cero';

    } else {

      fetch(url, {
        method: 'PUT',
        mode: 'cors',
        body: JSON.stringify(espacio),
        headers: { "Content-type": "application/json; charset=UTF-8" }

      })

        .then(response => response.json())
        .then(json => {
          Swal.fire({

            icon: 'success',
            title: '¡Éxito!',
            text: json.espacio,
            showCancelButton: false,
            showConfirmButton: true,
            allowOutsideClick: false

          }).then(()=>{

            window.location.href = 'espacios'
            
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


  // console.log(espacios)
  // fetch(url, {
  //   method: 'PUT',
  //   mode: 'cors',
  //   body: JSON.stringify(espacios),
  //   headers: { "Content-type": "application/json; charset=UTF-8" }
  // })

  //   .then(response => response.json()) //La respuesta del método POST de la API
  //   .then(json => {

  //     alert(json.espacios)
  //     location.reload()

  //   })

}

const editar_espacio = (espacios) => {

  console.log(espacios._id)

  document.getElementById('_id').value = espacios._id
  document.getElementById('tipo_espacio').value = espacios.tipo_espacio
  document.getElementById('nombre_espacio').value = espacios.nombre_espacio
  document.getElementById('area').value = espacios.area
  document.getElementById('capacidad').value = espacios.capacidad
  document.getElementById('estado').value = espacios.estado


}



const eliminar_espacio = (_id,) => {

  Swal.fire({

    title: '¿Está seguro que quieres eliminar este item?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí',
    cancelButtonText: 'Cancelar'

  }).then((result) => {

    if (result.isConfirmed) {
      // Captura de valores de datos enviados desde el formulario
      let espacio = {

        _id: _id

      };

      fetch(url, {

        method: 'DELETE',
        mode: 'cors',
        body: JSON.stringify(espacio),
        headers: { "Content-type": "application/json; charset=UTF-8" }

      })
        .then(response => response.json())
        .then(json => {

          if (json.espacio) {

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

const registrar_espacio = () => {

  console.log('Si esta crear espacio')

  const tipo_espacio = document.querySelector('#tipo_espacio')
  const nombre_espacio = document.querySelector('#nombre_espacio')
  const area = document.querySelector('#area')
  const capacidad = document.querySelector('#capacidad')
  const estado = document.querySelector('#estado')

  area.value == 0 ? area.value = null: area.value
  capacidad.value == 0 ? capacidad.value = null: capacidad.value


  let espacio = {

    tipo_espacio: tipo_espacio.value,
    nombre_espacio: nombre_espacio.value,
    area: area.value,
    capacidad: capacidad.value,
    estado: estado.value,


  }
  console.log(area.value + 'area')
  console.log(capacidad.value + 'capacidad')

  // Validaciones POST espacios 

  const ER_nombre_espacio = /^[A-Z0-9\s]+$/;

  try {
    if (tipo_espacio.value === '' || nombre_espacio.value === '' || estado.value === '') {

      throw 'No puede haber campos vacíos';

    } else if (!ER_nombre_espacio.test(nombre_espacio.value)) {

      throw 'El nombre de espacio no es válido';

    } else if ( area.value < 0) {

      throw 'El area debe ser mayor a cero';

    }else if ( capacidad.value < 0) {

      throw 'La capacidad debe ser mayor a cero';

    } else {

      fetch(url, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(espacio),
        headers: { "Content-type": "application/json; charset=UTF-8" }

      })

        .then(response => response.json())
        .then(json => {
          Swal.fire({

            icon: 'success',
            title: '¡Éxito!',
            text: json.espacios,
            showCancelButton: false,
            showConfirmButton: true,
            allowOutsideClick: false

          }).then(()=> {

            window.location.href = 'espacios'
            
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


listar_espacios()

const boton_crear = document.querySelector('#boton_crear').addEventListener('click', () => {



  registrar_espacio()


})

// const boton_actualizar = document.querySelector('boton_actualizar').addEventListener('click', () => {

//   actualizar_visitante();

// })




