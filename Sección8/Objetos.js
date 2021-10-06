//Funcion constructor de obj
function Persona(nombre, apellidos, email){
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.email = email;
    this.nombreCompleto = function () {
        return this.nombre+' '+this.apellidos;
    }
}

//forma más común de crear objetos
let persona={
    nombre: 'Juan',
    apellidos: 'Robertiño Calderon',
    //Metodos de objetos
    edad: 20,
    idioma: 'es',
    get lang(){
      return this.idioma.toUpperCase();
    },
    set lang(lang){
        this. idioma = lang.toUpperCase();
    },
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellidos ;
    }
}

console.log(persona.nombre);
console.log(persona.apellidos);
console.log(persona.nombreCompleto)

//Otras formas de crear Objetos
//Esto para reservar un espacio en memoria para esté objeto

let persona2 = new Object();
persona2.nombre='Carlos'
persona2.apellidos='Arce Bernal'
persona2.telefono = '555555555555'
persona2.email = 'algo@algo.com'

console.log(persona2.telefono);

//acceder a las propiedades de un objeto como arreglo

console.log(persona['apellidos']);

//for in, recorrer las propiedades de nuestro obj
for(propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}

//agregar y eliminar propiedades a un obj
persona.telefono= '534234';
console.log(persona);
console.log(typeof persona.telefono);

delete persona.telefono;

console.log(persona);
console.log(typeof persona.telefono);

//como imprimir las propiedades
console.log(persona.nombre+' '+persona.apellidos)
for (nombrePropiedades in persona){
    console.log(persona[nombrePropiedades]);
}

let personaArray = Object.values(persona);
console.log(personaArray);

let personaString = JSON.stringify(persona);
console.log(personaString);

//metodos get y set, es una mejor practica

console.log(persona.nombreCompleto);
console.log(persona.lang);
persona.lang = 'en';
console.log(persona.lang);

//Constructor
let padre = new Persona('Juan', 'Perez persona', 'algo@algo.com');
console.log(padre);

let madre = new Persona('Laura','Gomez', 'algo@algo.comw');
console.log(madre);

padre.nombre = 'Carlos';
console.log(padre);

let miOBJ = new Object();
let miOBJ2 = {};
let miCadenenaUno = new String();
let miNumeroUno = new Number(1);
let miBoolean = new Boolean(true);
let miArreglo1 = new Array();
//let miFuncionn = new function();

//usos de  prototype

Persona.prototype.tel = '1234567';
console.log(madre.tel);
console.log(padre.tel);
padre.tel = '1';
console.log(madre.tel);
console.log(padre.tel);

//usos de call para reusar metodos de un obj en otro obj
let persona1 = {
    nombre: 'Juan',
    apellidos: 'Algo Algo1',
    nombreCompleto: function (titulo, tel) {
        return titulo + ': '+this.nombre+ ' ' + this.apellidos + ' '+ tel ;
    }
}
let personas2 = {
    nombre: 'Carlos',
    apellidos: 'Lara',

}
//Paso de argumentos en call
console.log(persona1.nombreCompleto('Lic', '1234'));
console.log(persona1.nombreCompleto.call(personas2, 'Ing', '12345678'));

//uso de apply
let arreglopersona2= ['Ing', '12345678'];
console.log(persona1.nombreCompleto.apply(personas2, arreglopersona2))


