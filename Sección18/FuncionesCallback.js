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

//Llamadas asíncronas con uso setTimeout
 function miFuncionCallBack(){
     console.log('Saludo asincrono desde mi funcionCallBack');
 }

 setTimeout(miFuncionCallBack, 3000);

 setTimeout(function(){console.log('saludo asincrono 2')}, 4000);

 setTimeout(function(){console.log('saludo asincrono 3')}, 3000);

 //Lamadas asincronas con uso de setInterval
 let reloj = () =>{
     let fecha = new Date();
     console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
 }

 setInterval(reloj, 1000);