const { argv } = require('./config/yargs');
const colors = require('colors');

const porhacer = require('./por-hacer/por-hacer');

console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porhacer.crear(argv.descripcion);    
        console.log(tarea);
        break;

    case 'listar':
        let listado = porhacer.getListado()
        
        for(let item of listado) {
            console.log("===== Por Hacer =====".green);
            console.log(item.descripcion)
            console.log("Estado: ", item.completado);
            console.log('====================='.green);
        }
        
        break;

    case 'actualizar':
        
        let actualizado = porhacer.actualizar(argv.descripcion, argv.completado);

        console.log(actualizado);

        break;
    case 'borrar':

        let borrado = porhacer.borrar(argv.descripcion);
        console.log(borrado);

        break;

    default:
        console.log('Comando no reconocido');
        break;
}