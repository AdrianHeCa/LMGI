function leerValor(min, max) {
    return  Math.floor(Math.random() * (max - (min)) + (min));
}

setInterval(function() {
    var valor = leerValor(-30, 50);
    if (valor > 25) {
        console.log(valor + "Cº, mucho calor!");
    } else if (valor < -5){
        console.log(valor + "Cº, mucho frio!");
    }else {
        console.log(valor + "Cº, temperatura normal.");
    }
}, 1000);