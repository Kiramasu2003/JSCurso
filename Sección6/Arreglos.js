//Sintaxis para declarar un arreglo
//Sintaxis vieja
let autos = new Array('BMW', 'Mercedes Benz', 'Volvo');

//sintaxis actual
const auto = new Array('BMW', 'Mercedes Benz', 'Volvo');
console.log(auto)

//Acceder a los elementos
console.log( auto[2]);

for (let i = 0; i < auto.length; i++){
    console.log(auto[i])
}

//modificar los elementos
auto[1] = 'MercedesBenz';
console.log(auto[1]);

//añadir elementos al final de un arreglo
auto.push('Toyota');

//otras formas
console.log(auto.length);
autos[autos.length]='Cadillac';
console.log(autos);

//También se puden añadir a indices superiores
autos[6]='Porshe';
console.log(autos);

//Saber si es un array
console.log(Array.isArray(autos));
console.log(autos instanceof Array);
