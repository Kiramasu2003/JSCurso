//Con clases no aplica el concepto de hoisting
class Persona{
    constructor(nombre, apellidoUno) {
        //private _nombreVariables
        this._nombre = nombre;
        this._apellidoUno = apellidoUno;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get apellidoUno(){
        return this._apellidoUno;
    }

    set apellidoUno(apellidoUno) {
        this._apellidoUno = apellidoUno;
    }
    //En una clase no es necesario poner la palabra reservada function
    nombreCompleto(){
        return this._nombre + ' ' + this._apellidoUno;
    }

    toString(){
        return this.nombreCompleto();
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, departamento) {
        super(nombre, apellido);
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }

    //Sobreescribir el metodo nombreCompleto para que escriba también el departamento
    nombreCompleto() {
        return super.nombreCompleto() + ' '+this.departamento;
    }


}

let persona1 = new Persona('Juan', 'Perez');
console.log(persona1);
console.log(persona1.apellidoUno);
persona1.nombre = 'Juan Carlos';
console.log(persona1)

let persona2 = new Persona('Carlos', 'Lara');
console.log(persona2);
console.log(persona2.apellidoUno);

let empleado1 = new Empleado('Maria', 'Jimenez', 'Sistemas');
console.log(empleado1);
console.log(empleado1.nombreCompleto());
console.log(empleado1.toString());
