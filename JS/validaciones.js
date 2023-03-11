// Funció que valida el tipo de input que se recibe
export function valida(input){
    const tipoDeinput = input.dataset.tipo;
    if(validadores[tipoDeinput]){
    validadores[tipoDeinput](input);
    }
// Mensaje de error de campo si el campo esta rellenado o no  
if(input.validity.valid){
    input.parentElement.classList.remove('input-container--invalid');
    input.parentElement.querySelector('.input-message-error').innerHTML = ''
}else{
    input.parentElement.classList.add('input-container--invalid');
    input.parentElement.querySelector('.input-message-error').innerHTML = 
    mostrarMensajeDeError(tipoDeinput, input);
}
}
// Tipo de errores constenidos en el mensajeDeErrores
const tipoDeErroreres = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError',
]
// Mensaje de errores dependiendo el campo y el tipo de error
const mensajeDeErrores = {
    nombre:{
        valueMissing: 'El campo nombre no puede estar vacío'
    },
    email:{
        valueMissing: 'El campo correo no puede estar vacío',
        typeMismatch: 'El correo no es válido'
    },
    password:{
        valueMissing: 'El campo contraseña no puede estar vacío',
        patternMismatch:
        'Al menos seis carácteres, máximos doce, debe contener una letra minúscula, una letra mayúscula, sin carácteres especiales.'
    },
    nacimiento:{
        valueMissing: 'El campo nacimiento no puede estar vacío',
        customError: 'Debes tener al menos 18 años',
    },
    numero:{
        valueMissing: 'El campo número no puede estar vacío',
        patternMismatch: 'El formate requiere de diez números',
    }, 
    direccion:{
        valueMissing: 'El campo dirección no puede estar vacío',
        patternMismatch: 'El formate requiere de diez a cuarenta carácteres',
    }, 
    cuidad:{
        valueMissing: 'El campo cuidad no puede estar vacío',
        patternMismatch: 'El formate requiere de cuatro a treinta carácteres ',
    }, 
    estado:{
        valueMissing: 'El campo estado no puede estar vacío',
        patternMismatch: 'El formate requiere de cuatro a treinta carácteres',
    }, 
}
// Validador del input tipo blur para el nacimiento 
const validadores = {
    nacimiento: input => validarNacimiento(input),
}

// Función para mostrar errores 
function mostrarMensajeDeError(tipoDeinput, input){
    let mensaje = ''
    tipoDeErroreres.forEach(error =>{
        if (input.validity[error]){
            console.log(tipoDeinput, error);
            console.log(input.validity[error])
            console.log(mensajeDeErrores[tipoDeinput][error]);
            mensaje = mensajeDeErrores[tipoDeinput][error];
        }
    })
    return mensaje
}

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

// Elemento que vamos a guardar
// const inputNacimiento = document.querySelector('#birth');

// Creacion del escuchar evento después de salir de él
// inputNacimiento.addEventListener('blur', (event) =>{
//     validarNacimiento(event.target);
// })
