//Hoisting: mover la declaración de una función al inicio del programa para poder usarla en cualquier bloque
miFuncion(1,2);

function miFuncion(/*argumentos*/ a,b){

    console.log("Suma: "+ (a+b));
    return a+b;
}

//Invocar una función
const  result = miFuncion(12,21);
console.log(result);

