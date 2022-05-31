
function hola(nombre) {
    return new Promise( function(resolve,reject){
        setTimeout(function() {
            console.log('Hola '+nombre)
            resolve(nombre);
        }, 100);
    });
}

function hablar(nombre) {
    return new Promise ( (resolve,reject) => {
        setTimeout(function() {
            console.log('Bla bla bla bla...');
            //resolve(nombre);
            reject("Error en function hablar")
        }, 1000);
    })
}

function adios(nombre) {
    return new Promise( (resolve,reject)=> {
        setTimeout(function() {
            console.log('Chao '+nombre)
            resolve(nombre);
        }, 1000);
    })
   

}




console.log('Iniciando el proceso...');
hola('Daniel')
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then((nombre) =>{
        console.log('Proceso terminado');
    })
    .catch( error => {
        console.log("Ha habido un error: ");
        console.log(error);
    })

// hola('Daniel')
// adios('dani')
//     .then((nombre) =>{
//     console.log('Proceso terminado');
// })