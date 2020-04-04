const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crea un nuevo elemento', {
        descripcion
    })
    .command('actualizar', 'Actualiza un elemento', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra elemento', {
        descripcion
    })
    .help()
    .argv

module.exports =  {
    argv
}