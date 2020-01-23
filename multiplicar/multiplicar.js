const fs = require('fs');

const colors = require('colors')


let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La base ingresada: '${base}' no es un numero`)
            return;
        }

        if (!Number(limite)) {
            reject(`El limite ingresado: '${limite}' no es un numero`)
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }


        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla-${base}.txt`)
        });
    })
}

let listarTabla = (base, limite) => {

    if (!Number(base)) {
        throw new Error(`La base ingresada: ${base} no es un numero`)
    }

    if (!Number(limite)) {
        throw new Error(`El limite ingresado: ${limite} no es un numero`)
    }

    console.log('=================================================='.green);
    console.log(`===============Tabla del ${base}========================`.green);
    console.log('=================================================='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }

}

//module es un objeto global, tiene exports: son objetos que pueden ser trabajados de forma global(las funciones son objetos)
//en este caso agrego el objeto crearArchivo para que pueda ser utilizado de forma global
module.exports = {
    crearArchivo,
    listarTabla
}