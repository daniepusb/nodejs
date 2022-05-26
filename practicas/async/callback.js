function hola(nombre, miCallback) {
    setTimeout(function() {
        console.log('Hola '+nombre)
        miCallback(nombre);
    }, 100);

}

function adios(nombre, otroCallback) {
    setTimeout(function() {
        console.log('Chao '+nombre)
        otroCallback();
    }, 100);

}

hola('Daniel',function(nombre){
    adios(nombre, function() {
        console.log('terminando proceso...');
    });
});

