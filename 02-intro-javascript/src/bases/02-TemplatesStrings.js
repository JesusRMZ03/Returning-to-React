const nombre = 'Jesus';
const apellido = 'Ramirez';

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto= `${nombre} ${apellido}`;

console.log(nombreCompleto);

function getSaludos(nombre) {
    return 'Hola ' + nombre;
}

console.log(`Este es un textp ${getSaludos(nombre) } `);