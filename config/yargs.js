const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer.'
}

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea.'
}

const argv = require('yargs')
    .command('crear', 'Crea tarea por hacer.', {
        descripcion
    })
    .command('actualizar', 'Actualiza la/s tarea/s por hacer.', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra la/s tarea/s que de desee/n eliminar', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}