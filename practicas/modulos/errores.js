function otraFUncion(){
    lanza_error();
}

function lanza_error(){
    return 3 + z;
}

function lanza_error_asincrona(callback){
    setTimeout(function (){
        try {
            return 3 +Z;
        } catch (err2) {
            console.log('se captura el error en el hilo asincrono');
            callback(err2);
        }
    })
}

//lanza_error();

console.log('mensaje antes del try')
try {
    //lanza_error()
    lanza_error_asincrona(function (){
        console.log('hay error en la funcion asincrona')
    });
} catch (err) {
    //console.log(err);
    console.log(err.message);
}

console.log('mensaje luego del try')