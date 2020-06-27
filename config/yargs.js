
const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
.command('crear', 'Crea un elemento por hacer', {
    descripcion
})
.command('actualizar', 'Actualiza el estado completado de una tarea', { descripcion, completado})
.command('listar', 'Lista las tareas por hacer')
.command('borrar', "Borrar una tarea de la lista de tareas por hacer", descripcion)
.help()
.argv;

module.exports = {
    argv
}