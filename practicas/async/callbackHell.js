function hola(nombre, miCallback) {
    setTimeout(function() {
        console.log('Hola '+nombre)
        miCallback(nombre);
    }, 100);

}

function hablar(callbackHablar) {
    setTimeout(function() {
        console.log('Bla bla bla bla...');
        callbackHablar();
    }, 1000);

}

function adios(nombre, callback) {
    setTimeout(function() {
        console.log('Chao '+nombre)
        callback();
    }, 1000);

}

function conversacion(nombre,veces,callback) {
    if (veces>0){
        hablar(function () {
            conversacion(nombre,--veces,callback)    
        });
    }else{
        adios(nombre,callback);
    }
}


//buena práctica para llamar al hola
hola('Daniel',function(nombre){
    conversacion(nombre,3,function(){
        console.log('Terminamos')
    })
})
//esta NO es la manera
// hola('Daniel',function(nombre){
//     hablar(function(){
//         hablar(function(){
//             adios(nombre, function() {
//                 console.log('terminando proceso...');
//             });
//         });
//     });
// });

