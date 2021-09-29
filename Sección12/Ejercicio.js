class Producto {

    static _contadorProductos = 0;

    constructor(nombre, precio) {
        this._idProducto = ++Producto._contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }

    get idProducto() {
        return this._idProducto;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get precio() {
        return this._precio;
    }

    set precio(precio) {
        this._precio = precio;
    }

    toString(){
        return `
            idProducto: ${this._idProducto}\n
            Producto: ${this._nombre}\n
            Precio: ${this._precio}
        `;
    }

}
let producto1= new Producto('Camisa', 200);
console.log(producto1.toString())
let producto2= new Producto('Peluche', 100);
console.log(producto2.toString())

class Orden {

    static contadorOrdenes = 0;

    static get MAX_PRODUCTO() {
        return 5;
    }

    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        //this._contadorProductosAgregados = 0;
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarProducto(producto){
        if (this._productos.length < Orden.MAX_PRODUCTO){
            this._productos.push(producto);
        }
        else{
            console.log('No se pueden agregar más Productos')
        }
    }

    calcularTotal(){
        let totalVenta = 0;
        for (let producto of this._productos){
            totalVenta += producto.precio;

        }
        return totalVenta;
    }

    mostrarOrden(){
        let productosOrden = '';
        for (let producto of this._productos){
            productosOrden += producto.toString() + ' ';
        }
        console.log(`Orden: ${productosOrden} TOTAL: $${this.calcularTotal()}, \n Productos: ${productosOrden}`);
    }
}
console.log('       ')
let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);

orden1.mostrarOrden();