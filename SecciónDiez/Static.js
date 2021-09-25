//Con clases no aplica el concepto de hoisting
class Persona{

    static contadorObjetoPersona=0;//Atributo de la clase

    email = 'Valor default email'; //Atributo de nuestros obj

    constructor(nombre, apellidoUno) {
        //private _nombreVariables
        this._nombre = nombre;
        this._apellidoUno = apellidoUno;
        Persona.contadorObjetoPersona++;
        console.log('Se incrementa contador');
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
    static saludar(){
        console.log("Saludos desde static")
    }

    static saludar2(persona){
        console.log(persona.nombre + ' ' + persona.apellidoUno);
    }
}

class Empleado extends Persona{

    static contadorObjetoEmpleado=0;

    constructor(nombre, apellido, departamento) {
        super(nombre, apellido);
        this._departamento = departamento;
        Empleado.contadorObjetoEmpleado++;
        console.log('Se incrementa contador Empleado');
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
//persona1.saludar(); no es posible llamar un metodo static desde un obj
Persona.saludar();
Persona.saludar2(persona1);


let persona2 = new Persona('Carlos', 'Lara');
console.log(persona2);
console.log(persona2.apellidoUno);

let empleado1 = new Empleado('Maria', 'Jimenez', 'Sistemas');
console.log(empleado1);
console.log(empleado1.nombreCompleto());
console.log(empleado1.toString());

Empleado.saludar();
Empleado.saludar2(empleado1);

console.log(Persona.contadorObjetoPersona);
console.log(Empleado.contadorObjetoPersona);
console.log(Empleado.contadorObjetoEmpleado);

console.log(persona1.email);
console.log(empleado1.email);
console.log(Persona.email);//Es undefined pq es el valor por default