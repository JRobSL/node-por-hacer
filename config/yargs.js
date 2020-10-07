const descripcion = {
    alias: 'd',
    demand: true,
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Descripcion de la tarea por hacer'
};


const argv = require('yargs')
    .command('crear', "Crea una tarea por hacer.", {
        descripcion
    })
    .command('actualizar', "Actualiza una tarear por hacer.", {
        descripcion,
        completado
    })
    .command('borrar', "borrara una tarear por hacer.", {
        descripcion
    }).help()
    .argv;
module.exports = {
    argv
}