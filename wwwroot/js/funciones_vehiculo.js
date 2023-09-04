const url = 'https://apptower-bk.onrender.com/api/vehiculo';

const listar_vehiculo = async () => {
    console.log('Si estás dentro');

    let body = document.getElementById('contenido_vehiculo');

    if (body) {
        try {
            const response = await fetch(url);
            const data = await response.json();

            if (response.ok) {
                console.log(data.vehiculo);

                if (Array.isArray(data.vehiculo)) {
                    const mensajes = data.vehiculo.map((vehiculo) => {
                        return `<tr>
                <td>${vehiculo.placa}</td>
                <td>${vehiculo.tipo_dueño}</td>
                <td>${vehiculo.dueño}</td>
                <td>${vehiculo.espacio}</td>
                <td>${vehiculo.estado}</td>
                <td>
                  <button class="btn btn-sm dropdown-toggle" type="button" id="actionMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Acciones</button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <a class="dropdown-item" href="#" data-toggle="modal" data-target="#eventModal" onclick='editar(${JSON.stringify(vehiculo)})'>Editar</a>
                  <buttom class="dropdown-item" id="boton_eliminar" onclick="eliminarVehiculo('${vehiculo._id}')" href="#">Eliminar</buttom>
                  </div>
                </td>
              </tr>`;
                    });

                    body.innerHTML = mensajes.join('');
                } else {
                    console.error('El objeto "vehiculo" no es un arreglo válido.'); // <-- Mostrar un error si "reservas" no es un arreglo
                }
            } else {
                console.error('Error al obtener laos vehiculos:', response.status);
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
        }
    }
};
listar_vehiculo();

const crearVehiculo = async () => {
    try {
        const placa = document.getElementById('placa').value
        const tipo_dueño = document.getElementById('tipo_Usuario').value
        const dueño = document.getElementById('propietario').value
        const espacio = document.getElementById('parqueadero').value
        const estado = document.getElementById('Estado').value

        const vehiculo = {
            placa,
            tipo_dueño,
            dueño,
            espacio,
            estado
        };

        fetch(url, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(vehiculo),
            headers: { "Content-type": "application/json; charset=UTF-8" },
        })
            .then(response => response.json())
            .then(json => {
                Swal.fire({
                    icon: 'success',
                    title: '¡Éxito!',
                    showCancelButton: false,
                    showConfirmButton: true,
                    allowOutsideClick: false
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = 'vehiculos';
                    }
                });
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Error al enviar la solicitud',
                    text: error.message
                });
            });
    }
    catch (error) {
        console.error('Error en la solicitud:', error);
    }

};

const editar = (vehiculo) => {
    document.getElementById('_id').value = ''
    document.getElementById('placa').value
    document.getElementById('tipo_Usuario').value
    document.getElementById('nombre').value
    document.getElementById('parqueadero').value
    document.getElementById('Estado').value


    document.getElementById('_id').value = vehiculo._id
    document.getElementById('placa').value = vehiculo.placa
    document.getElementById('tipo_Usuario').value = vehiculo.tipo_dueño
    document.getElementById('nombre').value = vehiculo.dueño
    document.getElementById('parqueadero').value = vehiculo.espacio
    document.getElementById('Estado').value = vehiculo.estado
}

function obtenerDatos(){
    let _id = document.getElementById('_id').value
    let placa = document.getElementById('placa').value
    let tipo_dueño = document.getElementById('tipo_Usuario').value
    let dueño = document.getElementById('nombre').value
    let espacio = document.getElementById('parqueadero').value
    let estado =document.getElementById('Estado').value
    return{
        _id,
        placa,
        tipo_dueño,
        dueño,
        espacio,
        estado,

    }
}

async function ActualizarVehiculo(){
    const cambios = obtenerDatos();
    try {
        fetch(url, {
          method: 'PUT',
          mode: 'cors',
          body: JSON.stringify(cambios),
          headers: { "Content-type": "application/json; charset=UTF-8" }
        })
          .then(response => response.json())
          .then(json => {
            Swal.fire({
              icon: 'success',
              title: 'vehiculo',
              allowOutsideClick: true,
              willClose: () => {
                window.location.replace("vehiculos");
    
              }
            });
          });
      } catch (error) {
        // Error de conexión o cualquier otro error
        Swal.fire({
          icon: 'error',
          title: 'Tienes campos vacios',
          text: 'Por favor, completa los campos obligatorios'
        });
      }
}
async function eliminarVehiculo(_id){
    Swal.fire({
        title: '¿Está seguro de realizar la eliminación?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          // Captura de valores de datos enviados desde el formulario
          let vehiculo = {
            _id: _id
          };
    
          fetch(url, {
            method: 'DELETE',
            mode: 'cors',
            body: JSON.stringify(vehiculo),
            headers: { "Content-type": "application/json; charset=UTF-8" }
          })
            .then(response => response.json())
            .then(json => {
              if (json.mensaje) {
                Swal.fire({
                  icon: 'error',
                  title: 'Error',
                  text: json.mensaje
                });
              } else {
                Swal.fire({
                  icon: 'success',
                  title: 'Eliminación Exitosa',
                  text: 'Se eliminó el vehiculo correctamente',
                }).then(() => {
                  location.reload();
                });
              }
            });
        }
      });
}


document.getElementById('boton_actualizar').addEventListener('click', ActualizarVehiculo);