/*process es una variable de entorno. (objeto). 
tiene argv (argumentos), por defecto existen 2: la ubicacion de node.exe y del archivo que estamos ejecutando,
cada uno de los argumentos enviados luego de node nombreArchivo.js [argumentos] seran colocados en argv
console.log(process.argv);*/

const { crearArchivo } = require('./multiplicar/multiplicar.js')


let argv = process.argv
let parametro = argv[2]
let base = parametro.split('=')[1]

crearArchivo(base)
    .then(archivo => console.log(`El archivo ${archivo} se ha creado`))
    .catch(err => console.log(err))