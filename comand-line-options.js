const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')

const { argv } = require('./config/yargs')

const colors = require('colors/safe')

//console.log(argv) imprime un objeto donde en _ estan las funciones (en un arreglo) que se especifican en linea de comandos (listar, crear, etc)
let comando = argv._[0]

switch (comando) {
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('El archivo ' + colors.red(archivo) + ' se ha creado'))
            .catch(err => console.log(err))

        break;
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;
    default:
        console.log('comando no reconocido');
}