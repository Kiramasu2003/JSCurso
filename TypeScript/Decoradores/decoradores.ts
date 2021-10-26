function Saludar(target: function ):void {
    target.prototype.saludos = function ():void {
        console.log('Saludos desde decoradores');
    }
}
@Saludar
class Hola{
    constructor() {
    }
}

let hola1= new Hola();
hola1.saludos();