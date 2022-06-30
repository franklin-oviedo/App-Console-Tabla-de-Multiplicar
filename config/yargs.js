const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Base de la Tabla'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Ver en Tabla en Consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 2,
        describe: 'Limeta el multiplicador'
    })
    .check((argv, option) => {

        if (isNaN(argv.b)) {
            throw 'Se necesita la base';
        }

        return true;
    }).argv

module.exports = {
    argv
}