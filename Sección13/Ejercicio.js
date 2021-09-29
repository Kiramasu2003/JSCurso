class DispositivoEntrada {

    constructor(tipoEntrada, marca) {
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada(){
        return this._tipoEntrada;
    }

    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }

    get marca() {
        return this._marca;
    }

    set marca(marca){
        this._marca = marca;
    }
}

class Raton extends DispositivoEntrada{

    static contadorRatones = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }

    get idRaton(){
        return this._idRaton;
    }

    toString(){
        return `Ratón: [IdRaton: ${this._idRaton}, tipoEntrada: ${this._tipoEntrada}, Marca: ${this._marca}]`;
    }

}

let raton1 = new Raton('USB', 'HP');
console.log(raton1.toString())
let raton2 = new Raton('Bluetooth', 'Dell')
raton2.marca = 'Samsung'
console.log(raton2.toString())

class Teclado extends DispositivoEntrada{

    static contadorTeclado = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclado;
    }

    get idTeclado(){
        return this._idTeclado;
    }

    toString(){
        return `Teclado: [IdTeclado: ${this._idTeclado}, tipoEntrada: ${this._tipoEntrada}, Marca: ${this._marca}]`;

    }
}

let teclado1 = new Teclado('USB', 'Dell')
console.log(teclado1.toString());
let teclado2 = new Teclado('Bluetooth', 'HP')
console.log(teclado2.toString());

class Monitor {

    static contadorMonitor = 0;

    constructor(marca, tamaño) {
        this._idMonitor = ++Monitor.contadorMonitor;
        this._marca = marca;
        this._tamaño = tamaño
    }

    get idMonitor(){
        return this._idMonitor;
    }

    get marca(){
        return this._marca;
    }

    set marca(marca) {
        this._marca = marca;
    }

    get tamaño(){
        return this._tamaño;
    }

    set tamaño(tamaño) {
        this._tamaño = tamaño;
    }

    toString(){
        return `Monitor: [idMonitor: ${this._idMonitor}, Marca: ${this._marca}, Tamaño: ${this._tamaño}]`;
    }
}

let monitor1 = new Monitor('Acer', 12.05);
console.log(monitor1.toString());
let monitor2 = new Monitor('MSI', 20.0);
console.log(monitor2.toString());


class Computadora {

    static contadorComputadora = 0;

    constructor(nombre, monitor, raton, teclado){
        this._idComputadora = ++Computadora.contadorComputadora;
        this._monitor = monitor;
        this._raton = raton;
        this._teclado = teclado;
        this._nombre = nombre;
    }



    get idComputadora(){
        return this._idComputadora;
    }

    get monitor(){
        return this._monitor;
    }

    set monitor(monitor) {
        this._monitor = monitor;
    }

    get raton(){
        return this._raton
    }

    set raton(raton) {
        return this._raton = raton;
    }

    get teclado(){
        return this._teclado;
    }

    set teclado(teclado) {
        this._teclado = teclado;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    toString(){
        return `Computadora "${this.nombre}": IdComputador: ${this._idComputadora}: \n Monitor: ${this._monitor},\n Ratón: ${this._raton},\n Teclado: ${this._teclado}`;
    }
}

let computadora1 = new Computadora('HP', monitor1, raton1, teclado1);
console.log(computadora1.toString());

let computadora2 = new Computadora('Dell', monitor2, raton2, teclado2);
console.log(computadora1.toString());

class Orden{

    static contadorOrden = 0;

    constructor() {
        this._idOrden = ++Orden.contadorOrden;
        this._computador = [];
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarComputadora(computador){
        this._computador.push(computador);
    }

    mostrarOrden(){
        let productosOrden = '';
        for (let producto of this._computador){
            productosOrden += `\n${producto}`;
        }
        console.log(`Orden ${this._idOrden}\n Orden: ${productosOrden}`);
    }

}

console.log(' ')

let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);

orden1.mostrarOrden();
console.log(' ')
