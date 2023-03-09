// Funció que valida el tipo de input que se recibe
export function valida(input){
    const tipoDeinput = input.dataset.tipo;
    if(validadores[tipoDeinput]){
    validadores[tipoDeinput](input);
    }
// Mensaje de error de campo si el campo esta rellenado o no  
if(input.validity.valid){
    input.parentElement.classList.remove('input-container--invalid')
}else{
    input.parentElement.classList.add('input-container--invalid')
}
}
// Mensaje de errores dependiendo el campo y el tipo de error
const mensajeDeErrores = {
    nombre:{
        valueMissing: 'Este campo no puede estar vacío'
    },
    email:{
        valueMissing: 'Este campo no puede estar vacío',
        typeMismatch: 'El correo no es válido'
    },
    password:{
        valueMissing: 'Este campo no puede estar vacío',
        patternMismatch:
        'Al menos seis carácteres, máximos doce, debe contener una letra minúscula, una letra mayúscula, sin carácteres especiales.'
    },
    nacimiento:{
        valueMissing: 'Este campo no puede estar vacío',
        customError: 'Debes tener al menos 18 años'
    },
}
// Validador del input tipo blur para el nacimiento 
const validadores = {
    nacimiento: input => validarNacimiento(input),
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
