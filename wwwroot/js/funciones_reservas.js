const url = 'https://apptower-bk.onrender.com/api/reservas';

// Función para listar las reservas
const listar_reservas = async () => {
  console.log('Si estás dentro');

  let body = document.getElementById('contenido_reservas');

  if (body) {
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (response.ok) {
        console.log(data);

        if (Array.isArray(data.reservas)) { // <-- Actualizar la verificación del objeto "reservas"
          const mensajes = data.reservas.map((reserva) => { // <-- Acceder al arreglo "reservas"
            let fechaP = new Date(reserva.fecha_Peticion)
            let año = fechaP.getFullYear();
            let mes = (fechaP.getMonth() + 1).toString().padStart(2 , '0')
            let dia = (fechaP.getDate()).toString().padStart(2,'0')
            let hora = (fechaP.getHours()).toString().padStart(2, '0')
            let minutos = (fechaP.getMinutes()).toString().padStart(2, '0')
            fechaP = año+"/"+mes+"/"+dia+" "+hora+":"+minutos
            let fechaR = new Date(reserva.fecha_Reserva)
            let añoR = fechaR.getFullYear();
            let mesR = (fechaR.getMonth() + 1).toString().padStart(2 , '0')
            let diaR = (fechaR.getDate()).toString().padStart(2,'0')
            let horaR = (fechaR.getHours()).toString().padStart(2, '0')
            let minutosR = (fechaR.getMinutes()).toString().padStart(2, '0')
            fechaR = añoR+"/"+mesR+"/"+diaR+" "+horaR+":"+minutosR
            return `<tr>
              <td>${reserva.tipo_espacio}</td>
              <td>${reserva.espacio}</td>
              <td>${reserva.propietario}</td>
              <td value="${reserva.fecha_Peticion}">${fechaP}</td>
              <td value="${reserva.fecha_Reserva}">${fechaR}</td>
              <td>${reserva.vehiculo}</td>
              <td>${reserva.parqueadero}</td>
              <td>${reserva.personas}</td>
              <td>${reserva.estado}</td>
              <td>
                <button class="btn btn-sm dropdown-toggle" type="button" id="actionMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Acciones</button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#eventModal" onclick='editar(${JSON.stringify(reserva)})'>Editar</a>
                <buttom class="dropdown-item" id="boton_eliminar" onclick="eliminarReserva('${reserva._id}')" href="#">Eliminar</buttom>
                </div>
              </td>
            </tr>`;
          });

          body.innerHTML = mensajes.join('');
        } else {
          console.error('El objeto "reservas" no es un arreglo válido.'); // <-- Mostrar un error si "reservas" no es un arreglo
        }
      } else {
        console.error('Error al obtener las reservas:', response.status);
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  }
};
// Función para crear una reserva
const crearReserva = async () => {
  try {
    const tipo_espacio = document.getElementById('tipo_Espacio').value;
    let espacio = document.getElementById('espacio').value;
    if (tipo_espacio == 'SALON SOCIAL') {
      espacio = 'SALON SOCIAL';
    }
    else if (tipo_espacio == 'PARQUEADERO') {
      espacio = 'PARQUEADERO';
    }
    const propietario = document.getElementById('nombre').value;
    const fecha_Peticion = new Date();
    let fecha_Reserva = new Date(document.getElementById('fecha reserva').value);
    let hora = document.getElementById('hora').value;
    let partes = hora.split(':');
    let horas = parseInt(partes[0], 10);
    let minutos = parseInt(partes[1], 10);
    fecha_Reserva.setHours(horas)
    fecha_Reserva.setMinutes(minutos)
    let vehiculo = document.getElementById('placa').value;
    try {
      vehiculo = document.getElementById('placa').value;
    } catch (error) {
      vehiculo = 'N/A'
    }
    let parqueadero = document.getElementById('parqueadero').value;
    try {
      parqueadero = document.getElementById('parqueadero').value;
    } catch (error) {
      parqueadero = 'N/A'
    }
    const personas = document.getElementById('cantidad').value;
    const estado = 'Pendiente';

    const reservas = {
      tipo_espacio,
      espacio,
      propietario,
      fecha_Peticion,
      fecha_Reserva,
      vehiculo,
      parqueadero,
      personas,
      estado,
    };

    fetch(url, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(reservas),
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
            window.location.href = 'reservas';
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
// Función para editar una reserva
async function actualizarReserva() {
  const datosFormulario = obtenerDatosFormulario();
  console.log(datosFormulario)
  try {
    fetch(url, {
      method: 'PUT',
      mode: 'cors',
      body: JSON.stringify(datosFormulario),
      headers: { "Content-type": "application/json; charset=UTF-8" }
    })
      .then(response => response.json())
      .then(json => {
        Swal.fire({
          icon: 'success',
          title: 'Reservas',
          allowOutsideClick: true,
          willClose: () => {
            window.location.replace("reservas");

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
function obtenerDatosFormulario() {
  const _id = document.getElementById('_id').value
  const tipo_espacio = document.getElementById('tipo_Espacio').value;
  let espacio = document.getElementById('espacio').value;
  if (tipo_espacio == 'SALON SOCIAL') {
    espacio = 'SALON SOCIAL';
  }
  else if (tipo_espacio == 'PARQUEADERO') {
    espacio = 'PARQUEADERO';
  }
  const propietario = document.getElementById('nombre').value;
  const fecha_Peticion = new Date();
  let fecha_Reserva = new Date(document.getElementById('fecha reserva').value);
  let hora = document.getElementById('hora').value;
  let partes = hora.split(':');
  let horas = parseInt(partes[0], 10);
  let minutos = parseInt(partes[1], 10);
  fecha_Reserva.setHours(horas)
  fecha_Reserva.setMinutes(minutos)
  let vehiculo = ''
  try {
    vehiculo = document.getElementById('placa').value;
  } catch (error) {
    vehiculo = 'N/A'
  }
  let parqueadero = '';
  try {
    parqueadero = document.getElementById('parqueadero').value;
  } catch (error) {
    parqueadero = 'N/A'
  }
  const personas = document.getElementById('cantidad').value;
  let tipoModificacion = 'Unitaria'


  return {
    _id:_id,
    tipo_espacio:tipo_espacio,
    espacio:espacio,
    propietario:propietario,
    fecha_Peticion:fecha_Peticion,
    fecha_Reserva:fecha_Reserva,
    vehiculo:vehiculo,
    parqueadero:parqueadero,
    personas:personas,
    tipoModificacion:tipoModificacion
  };
}
const editar = (reservas) => {
  document.getElementById('_id').value = '';
  document.getElementById('tipo_Espacio').value;
  document.getElementById('espacio').value;
  document.getElementById('nombre').value
  document.getElementById('fecha reserva').value
  try {
    document.getElementById('placa').value;
  } catch (error) {
    document.getElementById('placa').value = 'N/A'
  }
  try {
    parqueadero = document.getElementById('parqueadero').value;
  } catch (error) {
    parqueadero = 'N/A'
  }
  document.getElementById('cantidad').value


  document.getElementById('_id').value = reservas._id
  console.log(reservas._id)
  document.getElementById('tipo_Espacio').value = reservas.tipo_espacio
  document.getElementById('espacio').value = reservas.espacio
  document.getElementById('nombre').value = reservas.propietario
  document.getElementById('fecha reserva').value = reservas.fecha_Peticion ? reservas.fecha_Peticion.substring(0, 10) : '';
  let datos = new Date(reservas.fecha_Peticion)
  console.log(datos)
  let organizarDato = datos.getMinutes()
  let formateo = organizarDato.toString().padStart(2, '0')
  document.getElementById('hora').value = datos.getHours()+":"+formateo
  document.getElementById('placa').value = reservas.vehiculo
  document.getElementById('parqueadero').value = reservas.parqueadero
  document.getElementById('cantidad').value = reservas.personas
}
// Función para eliminar una reserva
async function eliminarReserva(_id) {
  Swal.fire({
    title: '¿Está seguro de realizar la eliminación?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      // Captura de valores de datos enviados desde el formulario
      let reservas = {
        _id: _id
      };

      fetch(url, {
        method: 'DELETE',
        mode: 'cors',
        body: JSON.stringify(reservas),
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
              text: 'Se eliminó la reserva correctamente',
            }).then(() => {
              location.reload();
            });
          }
        });
    }
  });
}
listar_reservas();
document.getElementById('boton_actualizar').addEventListener('click', actualizarReserva);
document.getElementById('boton_eliminar').addEventListener('click', eliminarReserva);
