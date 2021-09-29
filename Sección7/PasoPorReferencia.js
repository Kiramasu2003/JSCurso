//Aplica para objetos
const persona = {
    nombre: 'Juan',
    apellidos: 'Perez Calderon'
}

function cambiarValorObjeto(p1){
    p1.nombre = 'Carlos';
    p1.apellidos = 'Arce Bernal';
}

cambiarValorObjeto(persona);
console.log(persona);