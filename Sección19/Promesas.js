"use strict";
/*
* El parametro en Promise "resolver"  está ligado
* al parametro en then "valor"
* Igualmente en Promise "rechazar" está ligado
* al parametro en then "error"
*
*
* O bien el parametro rechazar está ligado al catch
*/

let miPromesa = new Promise((resolver, rechazar) =>{
    let expresión = true;

    if(expresión === true){
        resolver(`Resolvio correcto`);
    }
    else {
        rechazar(`Se produjo un error`);
    }
});

/*
miPromesa.then(
    valor => console.log(valor),
    error => console.log(error)
);
 */
/*
miPromesa.then(
  valor => console.log(valor)
).catch(error=>console.log(error));
 */

let promesa = new Promise((resolve, ) => {
    //console.log("inicio promesa y timeout");
    setTimeout(() => resolve('Saludos con promesa y timeout'), 3000);
    //console.log("fin promesa y timeout");
    //setTimeout(() => reject('Produjo un error'), 3000);
});


promesa.then(
    valor => console.log(valor)
    //error => console.log(error)
    );


//async indica que una función regrese una promesa
async function miFuncionPromesa(){
    return `saludos con promesa y async`;
}

miFuncionPromesa().then(
  valor => console.log(valor),
  error => console.log(error)
);

//asyn/await
async function miFuncionPromesaAwait() {
    let miPromesa = new Promise(resolve =>{
        resolve (`Promesa con await`);
    });
    //await indica que va a procesar una promesa
    console.log(await miPromesa);
}

miFuncionPromesaAwait();

// promesas, await, async, y setTimeout

async function funcionConPromesaAwaitTimeout() {
    console.log(`Inicio funcion`)
    let miPromesa = new Promise(resolve=>{
        setTimeout(()=> resolve(`promesa con await y timeout`), 3000);
    });
    console.log(await  miPromesa);
    console.log(`Fin promesa`);
}

funcionConPromesaAwaitTimeout();