//Aplica para no objetos, booleanso por ejemplo
let x = 10;

function cambiarValor (a){
    a=20;
    return a;
}
//Unicamente paso una copia de su valor, no lo modifico
cambiarValor(x);
console.log(x);
console.dir()