//Hoisting: mover la declaración de una función al inicio del programa para poder usarla en cualquier bloque
miFuncion(1,2);

function miFuncion(/*argumentos*/ a,b){

    console.log("Suma: "+ (a+b));
    console.log(arguments.length);
    return a+b;
}

//Invocar una función
const  result = miFuncion(12,21);
console.log(result);

//Funciones tipo expresión o anonimas

let x = function (a,b){
    return a+b;
};

const result2 = x(1,2);
console.log(result2);

//Funciones self-invoking
(function (a,b) {
    console.log('Ejecutando funcion anonima ' + (a+b));

})(9,12);
//Es Una función no reutilizable

//-------------Separador---------------

//Funciones com Objetos

var miFuncionTxt= miFuncion.toString();
console.log(miFuncionTxt);

//Funciones tipo flecha
//Similares a tipo expresión

const sumarFuncionFlecha = (a,b) => a+b;
    //no es necesario poner return
const result3 = sumarFuncionFlecha(5,5);
console.log(result3);

//Argumentos y parametros
//parametros es la lista de variables definidas en una función
//argumentos el valor de esas variables

const sumarDos = function (a,b){
    console.log(arguments[0]);
    console.log(arguments[1]);
    arg1 = arguments[0];

    return a+b, arg1;
}
const result4 = sumarDos(3,9);
const arg11 = sumarDos(3, 9);
console.log(result4);
console.log(arg11);

const resultado = sumarTodo( 5, 4, 13, 10, 9);
console.log(resultado);

function sumarTodo(){
    let suma = 0;
    for (let i = 0; i< arguments.length; i++) {
        suma += arguments[i];

    }
    return suma;
}



