class Persona{
    private nombre:string;

    constructor(nombre: string){
        this.nombre = nombre;
    }

    getNombre():string{
        return this.nombre;
    }

    static metodoEstatico():number{
        return 10;
    }
}

let persona1 = new Persona("Juan");
console.log(persona1.getNombre());
console.log(Persona.metodoEstatico());