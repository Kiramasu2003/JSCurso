"use strict";
class Empleado{
    constructor(nombre, sueldo) {
        this.nombre = nombre;
        this.sueldo = sueldo;
    }

    obtenerDetalles(){
        return `Empleado: nombre ${this.nombre}, sueldo ${this.sueldo}`;
    }

}

class Gerente extends Empleado{

    constructor(nombre, sueldo, departamento) {
        super(nombre, sueldo);
        this.departamento = departamento;
    }

    obtenerDetalles() {
        return `Gerente: ${super.obtenerDetalles()}, Departamento: ${this.departamento}`;
    }
}

function determinarTipo(tipo){
    console.log(tipo.obtenerDetalles());
    if (tipo instanceof Gerente){
        console.log('Es un objeto gerente');
        console.log(tipo.departamento);
    }else
    if (tipo instanceof Empleado){
        console.log('Es un objeto empleado');
    }else
    if (tipo instanceof Object){
        console.log('Es un objeto objeto')
    }
}

let empleado1 = new Empleado('Roberto', 100.0);
let gerente1 = new Gerente('Juan', 2000.0, 'Sistemas');

determinarTipo(empleado1);
determinarTipo(gerente1);
