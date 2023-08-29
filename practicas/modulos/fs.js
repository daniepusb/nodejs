const fs = require('fs');




function leer(url, callback){
    console.log('procedimiento de leer');
    fs.readFile(url, (err,data) => {
        callback(data.toString());
    })
}

function escribir(url, data, callback){
    fs.writeFile(url,data, function(err){
        console.log('se ha escrito correctamente')
    })
}

function borrar(url, callback){
    fs.unlink(url, callback);
}

//leer(__dirname + '/archivo.txt', console.log)
//escribir(__dirname + '/archivo.txt', 'NUEVO TEXTO', console.log)
//borrar(__dirname + '/archivo.txt', console.log)
