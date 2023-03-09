import {valida} from './validaciones.js'

// selector universal de inputs
const inputs = document.querySelectorAll('input');

// Funión que agrega el blur
inputs.forEach((input) => {
    input.addEventListener('blur',(input) => {
        valida(input.target)
    })  
})