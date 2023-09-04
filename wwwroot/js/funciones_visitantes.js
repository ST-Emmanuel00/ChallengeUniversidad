const url = 'https://apptower-bk.onrender.com/api/visitantes'

const listar_visitantes = async () => {

  console.log('Si estas dentro visitantes')

  let body = document.getElementById('contenido_visitantes')


  if (body) {

    let mensaje = ''


    fetch(url)
      .then(res => res.json())
      .then(function (data) {
        let lista_visitantes = data.visitantes
        lista_visitantes.map((visitante, item) => {


          (visitante.permiso == 'PERMITIDO') ? resaltato = 'badge-success' : resaltato = 'badge-danger'
          // (residentes.habita == true)?respuesta = 'SI':respuesta = 'NO'


          mensaje += `<tr>

        
                <td>${item + 1}</td>
                <td>${visitante.tipo_documento_visitante}</td>
                <td>${visitante.numero_documento_visitante}</td>
                <td>${visitante.nombre_visitante}</td>
                <td>${visitante.apellido_visitante}</td>
                <td>${visitante.genero_visitante}</td>
                <td>${visitante.tipo_visitante}</td>
                <td>${visitante.anfitrion}</td>                


                <td><span class="badge ${resaltato}">${visitante.permiso}</span></td>

                <td>

                    <button class="btn btn-sm dropdown-toggle" type="button" id="actionMenuButton" data-toggle="dropdown"
                      aria-haspopup="true" aria-expanded="false"><i class = "fe fe-more-vertical fe-24"></i>
                    </button>

                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="actionMenuButton">

                      <button type="button" class="dropdown-item" data-toggle="modal" data-target="#eventModal"
                      onclick="">rRegistrar ingreso</button>

                      <button type="button" class="dropdown-item" data-toggle="modal" data-target="#eventModal"
                      onclick='editar_visitantes(${JSON.stringify(visitante)})'>Editar visitante</button>
                      <a onclick="eliminar_visitante('${visitante._id}')" class="dropdown-item" href="#">Eliminar visitante</a>

                    </div>

                </td>

              </tr>`

          body.innerHTML = mensaje

        }
        )
      })
  }
}

const actualizar_visitante = async () => {

  console.log('lo intentaste bro')
  const _id = document.querySelector('#_id')
  const tipo_documento_visitante = document.querySelector('#tipo_documento_visitante')
  const numero_documento_visitante = document.querySelector('#numero_documento_visitante')
  const nombre_visitante = document.querySelector('#nombre_visitante')
  const apellido_visitante = document.querySelector('#apellido_visitante')
  const genero_visitante = document.querySelector('#genero_visitante')
  const tipo_visitante = document.querySelector('#tipo_visitante')
  const anfitrion = document.querySelector('#anfitrion')
  const permiso = document.querySelector('#permiso')

  let visitante = {
    _id: document.getElementById('_id').value,
    tipo_documento_visitante: tipo_documento_visitante.value,
    numero_documento_visitante: numero_documento_visitante.value,
    nombre_visitante: nombre_visitante.value,
    apellido_visitante: apellido_visitante.value,
    genero_visitante: genero_visitante.value,
    tipo_visitante: tipo_visitante.value,
    anfitrion: anfitrion.value,
    permiso: permiso.value,

  }

  // Validaciones POST espacios 

  const ER_nombre = /^[A-Za-z\s]+$/
  const ER_apellido = /^[A-Za-z\s]+$/

  try {
    if (tipo_documento_visitante.value === '' || numero_documento_visitante.value === '' || nombre_visitante.value === '' ||
      apellido_visitante.value === '' || genero_visitante.value === '' || tipo_visitante.value === '' ||
      anfitrion.value === '' || permiso.value === '') {

      throw 'No puede haber campos vacíos';

    } else if (!ER_nombre.test(nombre_visitante.value)) {

      throw 'El nombre de visitante no es válido';


    } else if (!ER_apellido.test(apellido_visitante.value)) {

      throw 'El apellido de visitante no es válido';


    } else {

      fetch(url, {
        method: 'PUT',
        mode: 'cors',
        body: JSON.stringify(visitante),
        headers: { "Content-type": "application/json; charset=UTF-8" }

      })

        .then(response => response.json())
        .then(json => {
          Swal.fire({

            icon: 'success',
            title: '¡Éxito!',
            text: json.visitantes,
            showCancelButton: false,
            showConfirmButton: true,
            allowOutsideClick: false

          }).then(() => {

            window.location.href = 'visitantes'

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

const editar_visitantes = (visitantes) => {

  console.log(visitantes._id)

  document.getElementById('_id').value = visitantes._id
  document.getElementById('tipo_documento_visitante').value = visitantes.tipo_documento_visitante
  document.getElementById('numero_documento_visitante').value = visitantes.numero_documento_visitante
  document.getElementById('nombre_visitante').value = visitantes.nombre_visitante
  document.getElementById('apellido_visitante').value = visitantes.apellido_visitante
  document.getElementById('genero_visitante').value = visitantes.genero_visitante
  document.getElementById('tipo_visitante').value = visitantes.tipo_visitante
  document.getElementById('anfitrion').value = visitantes.anfitrion
  document.querySelector('#permiso').value = visitantes.permiso

  document.getElementById('estado').value = visitantes.estado

}



const eliminar_visitante = (_id,) => {
  Swal.fire({

    title: '¿Está seguro que quieres eliminar este item?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí',
    cancelButtonText: 'Cancelar'

  }).then((result) => {

    if (result.isConfirmed) {
      // Captura de valores de datos enviados desde el formulario
      let visitante = {

        _id: _id

      };

      fetch(url, {

        method: 'DELETE',
        mode: 'cors',
        body: JSON.stringify(visitante),
        headers: { "Content-type": "application/json; charset=UTF-8" }

      })
        .then(response => response.json())
        .then(json => {

          if (json.visitante) {

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




const registrar_visitante = () => {

  console.log('Si esta crear propietario')

  const tipo_documento_visitante = document.querySelector('#tipo_documento_visitante')
  const numero_documento_visitante = document.querySelector('#numero_documento_visitante')
  const nombre_visitante = document.querySelector('#nombre_visitante')
  const apellido_visitante = document.querySelector('#apellido_visitante')
  const genero_visitante = document.querySelector('#genero_visitante')
  const tipo_visitante = document.querySelector('#tipo_visitante')
  const anfitrion = document.querySelector('#anfitrion')
  const permiso = document.querySelector('#permiso')

  let visitante = {

    tipo_documento_visitante: tipo_documento_visitante.value,
    numero_documento_visitante: numero_documento_visitante.value,
    nombre_visitante: nombre_visitante.value,
    apellido_visitante: apellido_visitante.value,
    genero_visitante: genero_visitante.value,
    tipo_visitante: tipo_visitante.value,
    anfitrion: anfitrion.value,
    permiso: permiso.value,

  }

  // Validaciones POST espacios 

  const ER_nombre = /^[A-Za-z\s]+$/
  const ER_apellido = /^[A-Za-z\s]+$/

  try {

    if (tipo_documento_visitante.value === '' || numero_documento_visitante.value === '' || nombre_visitante.value === '' ||
      apellido_visitante.value === '' || genero_visitante.value === '' || tipo_visitante.value === '' ||
      anfitrion.value === '' || permiso.value === '') {

      throw 'No puede haber campos vacíos';

    } else if (!ER_nombre.test(nombre_visitante.value)) {

      throw 'El nombre de visitante no es válido';


    } else if (!ER_apellido.test(apellido_visitante.value)) {

      throw 'El apellido de visitante no es válido';


    } else {

      fetch(url, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(visitante),
        headers: { "Content-type": "application/json; charset=UTF-8" }

      })

        .then(response => response.json())
        .then(json => {
          Swal.fire({

            icon: 'success',
            title: '¡Éxito!',
            text: json.visitantes,
            showCancelButton: false,
            showConfirmButton: true,
            allowOutsideClick: false

          }).then(() => {

            window.location.href = 'visitantes'

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



listar_visitantes()



const boton_crear = document.querySelector('#boton_crear').addEventListener('click', () => {

  registrar_visitante()

})

// const boton_actualizar = document.querySelector('boton_actualizar').addEventListener('click', () => {

//   actualizar_visitante();

// })




