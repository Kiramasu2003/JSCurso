'use strict';
const mostrarReloj =()=>{
    let fecha = new Date();
    let hr = formatoHora(fecha.getHours());
    let min = formatoHora(fecha.getMinutes());
    let seg = formatoHora(fecha.getSeconds());

   document.getElementById('hora').innerHTML = `${hr}: ${min}: ${seg}`;

    const meses = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const dias = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];

    document.getElementById('fecha').innerHTML = `${diaSemana}, ${dia} ,${mes}`;

    document.getElementById('contenedor').classList.toggle('animar');
}

const formatoHora = (hora) =>{
    if(hora<10){
        hora = '0' + hora;
    }
    return hora;
}

setInterval(mostrarReloj, 1000);