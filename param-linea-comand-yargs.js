//yargs sirve para pasar parametros por linea de comandos.
/*
con command le especifico el nombre del comando aceptado, luego la ayuda para el usuario, y despues un objeto que recibe 
la configuracion de parametros que es comando puede recibir, donde se especifican caracteristicas de cada uno.
*/

const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            default: 5,
            alias: 'l'
        }
    })
    .argv

console.log('Base: ', argv.base);
console.log('Limite: ', argv.limite);