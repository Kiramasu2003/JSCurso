class Persona{

    static contadorPersona=0;

    static get MAX_OBJ(){
        return 5;
    }

    constructor(nombre, apellidoUno) {
        //private _nombreVariables
        this._nombre = nombre;
        this._apellidoUno = apellidoUno;

        if (Persona.contadorPersona<Persona.MAX_OBJ){
            this.idPersona = ++Persona.contadorPersona;
        }else {
            console.log('Se ha superado el limite de creación de objs para la clase Persona')
        }


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
        return this.idPersona+ ' '+this._nombre + ' ' + this._apellidoUno;
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

    static contadorEmpleado=0;

    constructor(nombre, apellido, departamento) {
        super(nombre, apellido);
        this._departamento = departamento;
        this.idEmpleado = ++Empleado.contadorEmpleado;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }

    //Sobreescribir el metodo nombreCompleto para que escriba también el departamento
    toString() {
        return this.idEmpleado+ ' ' + super.toString();
    }


}

const persona1 = new Persona('Juan', 'Perez');
console.log(persona1.idPersona);
console.log(persona1.toString());

const empleado1 = new Empleado('Juan Carlos', 'Perez', 'Sistemas');
console.log(empleado1.toString());

const persona3 = new Persona('Armando', 'Perez');
console.log(persona3.idPersona);
console.log(persona3.toString());

const persona4 = new Persona('Robertiño', 'Perez');
console.log(persona4.idPersona);
console.log(persona4.toString());

const persona6 = new Persona('Roberta', 'Perez');
console.log(persona6.idPersona);
console.log(persona6.toString());

const persona7 = new Persona('escriba', 'Perez');
console.log(persona7.idPersona);
console.log(persona7.toString());