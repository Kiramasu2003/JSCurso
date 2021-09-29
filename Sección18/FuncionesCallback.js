 function miFuncion1(){
   console.log('función1');
 }

 function  miFuncion2() {
    console.log('función2');
 }

 //Función de tipo callback
 let imp = function imprimir(mensaje) {
    console.log(mensaje);
 }

 function sumar(var1, var2, imprimir) {
    let res = var1 + var2;
     imprimir(`Resultado: ${res}`);
 }

 sumar(5,2, imp);
