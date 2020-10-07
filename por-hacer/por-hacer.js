const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    //JSON.strinify(objeto): Formatea el objeto a Json valido.
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err)
            throw new Error('No se pudo grabar el archivo');
    });
}

const cargarDB = () => {

    try {
        //convierte en archivo de json en un objeto de javascript 
        //para poder manipular la informacion 
        listadoPorHacer = require('../db/data.json');

    } catch (error) {

        listadoPorHacer = [];

    }

}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion: descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
}


const actualizar = (descripcion, completado = true) => {

    cargarDB();

    //el index va a obtener el index de la posicion del arreglo donde se encuentra la palabra clave
    //regresara un -1 si no lo encontro 

    // findIndex(): recibe un callback y hace un ciclo interno por cada uno de los elementos para obtener 
    // cada uno de esos elementos con una palabra clave
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    })

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false
    }
}

const borrarPorHacer = (descripcion) => {

    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    })

    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarDB();
        return true;
    } else {
        return false
    }


}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrarPorHacer
}