class Ingreso extends Dato{
    static contadorIngresos = 0;

    constructor(descripcion, valor) {
        super(descripcion, valor);
        this._id = ++Ingreso.contadorIngresos;
    }

    get idIngreso(){
        return this._id;
    }
}