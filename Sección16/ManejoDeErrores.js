'use strict';

try {
    const x= 10;
    //miFuncion();
    throw 'Mi error'
}
catch (error) {
    console.log(error);
}
finally {
    console.log('Termina la revisión de errores')
}

let resultado = 5;

try {
    if (isNaN(resultado)) throw 'No es un numero';
    else if(resultado === '') throw 'Es cadena vacia';
    else if(resultado >= 0) throw 'Es valor positivo';
    else if(resultado <= 0) throw 'Es valor negativo';
}
catch (e) {
    console.log(e);
    console.log(e.name);
    console.log(e.message);
}