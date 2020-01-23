/*
Se crea un archivo con la tabla de multiplicar.
*/
//en el require se puede especificar una libreria propia de node (encontrada en https://nodejs.org/),
//o una que no sea nativa de node pero si de algun otro emisor, o un archivo que sea 'nuestro'.

const fs = require('fs');

let base = 3;
let data = '';

for (let i = 1; i <= 10; i++) {
    data += `${base} * ${i} = ${base * i}\n`;
}

//const data = new Uint8Array(Buffer.from('Hello Node.js'));

fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log(`El archivo tabla-${base}.txt ha sido creado`);
});