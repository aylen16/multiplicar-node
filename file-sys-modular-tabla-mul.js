/*Para poder usar la funcion crearArchivo:
const multiplicar = require(./multiplicar/multiplicar.js), pero si lo definimos asi, cada vez que se quiera
utilizar crearArchivo deberia llamarse multiplicar.crearArchivo, entonces:
*/
const { crearArchivo } = require('./multiplicar/multiplicar.js')

let base = '5';

crearArchivo(base)
    .then(archivo => console.log(`El archivo ${archivo} se ha creado`))
    .catch(err => console.log(err))


//module es un objeto global, tiene exports: son objetos que pueden ser trabajados de forma global(las funciones son objetos)
//console.log(module);