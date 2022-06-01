
async function hola(nombre) {
    return new Promise( function(resolve,reject){
        setTimeout(function() {
            console.log('Hola '+nombre)
            resolve(nombre);
        }, 100);
    });
}

async function hablar(nombre) {
    return new Promise ( (resolve,reject) => {
        setTimeout(function() {
            console.log('Bla bla bla bla...');
            //resolve(nombre);
            reject("Error en function hablar")
        }, 1000);
    })
}

async function adios(nombre) {
    return new Promise( (resolve,reject)=> {
        setTimeout(function() {
            console.log('Chao '+nombre)
            resolve(nombre);
        }, 1000);
    })
   

}

//se necesita definir main y luego ejecutarla
async function main (){
    let nombre = await hola('Daniel');
    //hola()
}


console.log('start');
main();
console.log('stop');