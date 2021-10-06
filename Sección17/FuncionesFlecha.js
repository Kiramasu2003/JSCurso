"use strict";

/*
function miFuncion(){
    console.log('saludos desde miFuncion');
}*/


//no aplica el principio de hoisting
/*
const miFuncionFlecha = () =>{
    console.log('saludos desde miFuncionFlecha');
}*/

//const miFuncionFlecha = ()  => console.log("Hola desde miFuncionFlecha");
/*
const saludar=()=>{
    return 'Saludos desde miFuncionFlecha';
}*/
const saludar=() => 'Saludos desde miFuncionFlecha';
console.log(saludar());
//miFuncionFlecha();

const funcionConParametros = (var1, var2) => {
    let result = var1 + var2;
    return result;
};
console.log(funcionConParametros(1,2));