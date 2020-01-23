//aca se hace la optimizacion de la especificacion de los comandos.
const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        default: 5,
        alias: 'l'
    }
}

const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla de multiplicar', opt)
    .command('crear', 'crea un archivo de tabla de multiplicar con base y limite especificados en el comando', opt)
    .argv;

module.exports = {
    argv
}