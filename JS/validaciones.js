// Elemento que vamos a guardar
const inputNacimiento = document.querySelector('#birth');

// Creacion del escuchar evento después de salir de él
inputNacimiento.addEventListener('blur', (event) =>{
    validarNacimiento(event.target);
})

// Guarda la edad del cliente
function validarNacimiento(input){
    const fechaCliente = new Date(input.value);
    let mensaje = ''
if(!mayorDeEdad(fechaCliente)){
    mensaje = 'Debe tener al menos 18 años de edad'
}

input.setCustomValidity(mensaje);
}

// Guarda la regla de ser mayor de 18 
function mayorDeEdad(fecha){
    const fechaActual = new Date();
    const diferenciasFechas = new Date(
        fecha.getUTCFullYear() + 18, 
        fecha.getUTCMonth(), 
        fecha.getUTCDate()
    );
    return diferenciasFechas <= fechaActual;
}

